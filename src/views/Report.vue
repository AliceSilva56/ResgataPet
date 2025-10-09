<script setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const animal = ref('');
const situation = ref('');
const description = ref('');
const contactName = ref('');
const contactPhone = ref('');
const contactEmail = ref('');
const images = ref([]);

const latitude = ref(null);
const longitude = ref(null);
const manualAddress = ref('');

const errors = ref({});

let map; let marker;

const validate = () => {
  const e = {};
  if (!animal.value) e.animal = 'Selecione o animal';
  if (!situation.value) e.situation = 'Informe a situa??o';
  if (latitude.value === null || longitude.value === null) e.location = 'Defina a localiza??o';
  if (!description.value || description.value.trim().length < 10) e.description = 'Descri??o m?nima de 10 caracteres';
  if (images.value.length === 0) e.images = 'Envie ao menos 1 imagem';
  errors.value = e;
  return Object.keys(e).length === 0;
};

const onFilesChange = (ev) => {
  const files = Array.from(ev.target.files || []);
  const accepted = [];
  for (const file of files) {
    if (!file.type.startsWith('image/')) continue;
    if (file.size > 5 * 1024 * 1024) continue; // 5MB
    accepted.push(file);
    if (accepted.length + images.value.length >= 5) break;
  }
  images.value = [...images.value, ...accepted].slice(0, 5);
};

const removeImage = (idx) => {
  images.value = images.value.filter((_, i) => i !== idx);
};

const centerAndMark = (lat, lng) => {
  latitude.value = lat; longitude.value = lng;
  map.setView([lat, lng], 16);
  if (!marker) {
    marker = L.marker([lat, lng], { draggable: true }).addTo(map);
    marker.on('dragend', () => {
      const pos = marker.getLatLng();
      latitude.value = pos.lat; longitude.value = pos.lng;
    });
  } else {
    marker.setLatLng([lat, lng]);
  }
};

const useGPS = () => {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    (pos) => centerAndMark(pos.coords.latitude, pos.coords.longitude),
    () => {}
  );
};

const initMap = () => {
  map = L.map('report-map', { zoomControl: true }).setView([-12.9714, -38.5014], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  map.on('click', (e) => {
    centerAndMark(e.latlng.lat, e.latlng.lng);
  });
};

onMounted(() => {
  initMap();
});

const submitting = ref(false);

const submitForm = async () => {
  if (!validate()) return;
  submitting.value = true;
  try {
    const form = new FormData();
    form.append('animal', animal.value);
    form.append('situation', situation.value);
    form.append('description', description.value);
    form.append('latitude', String(latitude.value));
    form.append('longitude', String(longitude.value));
    if (manualAddress.value) form.append('address', manualAddress.value);
    if (contactName.value) form.append('contactName', contactName.value);
    if (contactPhone.value) form.append('contactPhone', contactPhone.value);
    if (contactEmail.value) form.append('contactEmail', contactEmail.value);
    images.value.forEach((file, idx) => form.append('images', file, file.name || `photo_${idx}.jpg`));

    // TODO: ajuste a URL conforme o backend de Samuel
    const resp = await fetch(import.meta.env.VITE_API_URL + '/reports', {
      method: 'POST',
      body: form
    });
    if (!resp.ok) throw new Error('Falha ao enviar');
    alert('Report enviado com sucesso!');
    // reset
    animal.value = '';
    situation.value = '';
    description.value = '';
    contactName.value = '';
    contactPhone.value = '';
    contactEmail.value = '';
    images.value = [];
  } catch (e) {
    alert('Erro ao enviar o report. Tente novamente.');
  } finally {
    submitting.value = false;
  }
};
</script>

<template>
  <div class="report-view">
    <h1>Reportar Animal</h1>

    <form class="report-form" @submit.prevent="submitForm">
      <div class="row">
        <label>Animal *</label>
        <select v-model="animal">
          <option value="" disabled>Selecione</option>
          <option value="cachorro">Cachorro</option>
          <option value="gato">Gato</option>
          <option value="ave">Ave</option>
          <option value="outro">Outro</option>
        </select>
        <small v-if="errors.animal" class="error">{{ errors.animal }}</small>
      </div>

      <div class="row">
        <label>Situa??o *</label>
        <select v-model="situation">
          <option value="" disabled>Selecione</option>
          <option value="perdido">Perdido</option>
          <option value="ferido">Ferido</option>
          <option value="encontrado">Encontrado</option>
          <option value="outro">Outro</option>
        </select>
        <small v-if="errors.situation" class="error">{{ errors.situation }}</small>
      </div>

      <div class="row">
        <label>Localiza??o *</label>
        <div class="location-actions">
          <button type="button" class="btn" @click="useGPS">Usar GPS</button>
          <input v-model="manualAddress" placeholder="Endere?o (opcional)" />
        </div>
        <div id="report-map" class="map"></div>
        <small v-if="errors.location" class="error">{{ errors.location }}</small>
      </div>

      <div class="row">
        <label>Descri??o *</label>
        <textarea v-model="description" rows="4" placeholder="Descreva a situa??o"></textarea>
        <small v-if="errors.description" class="error">{{ errors.description }}</small>
      </div>

      <div class="row">
        <label>Fotos (1?5 imagens) *</label>
        <input type="file" accept="image/*" multiple @change="onFilesChange" />
        <div class="previews">
          <div class="preview" v-for="(file, idx) in images" :key="idx">
            <img :src="URL.createObjectURL(file)" alt="preview" />
            <button type="button" class="remove" @click="removeImage(idx)">Remover</button>
          </div>
        </div>
        <small v-if="errors.images" class="error">{{ errors.images }}</small>
      </div>

      <fieldset class="row optional">
        <legend>Contato (opcional)</legend>
        <input v-model="contactName" placeholder="Nome" />
        <input v-model="contactPhone" placeholder="Telefone" />
        <input v-model="contactEmail" placeholder="E-mail" />
      </fieldset>

      <div class="actions">
        <button class="btn primary" type="submit" :disabled="submitting">{{ submitting ? 'Enviando...' : 'Enviar Report' }}</button>
      </div>
    </form>
  </div>
  
</template>

<style scoped>
.report-view {
  max-width: 800px;
  margin: 100px auto 24px auto;
  padding: 0 16px;
}
h1 { margin-bottom: 16px; }

.report-form { display: flex; flex-direction: column; gap: 16px; }
.row { display: flex; flex-direction: column; gap: 8px; }
label { font-weight: 600; }
select, input, textarea { padding: 10px; border: 1px solid #ddd; border-radius: 6px; }

.location-actions { display: flex; gap: 8px; align-items: center; }
.map { height: 320px; border-radius: 8px; border: 1px solid #ddd; }

.previews { display: flex; gap: 8px; flex-wrap: wrap; }
.preview { position: relative; width: 120px; height: 120px; border: 1px solid #eee; border-radius: 6px; overflow: hidden; }
.preview img { width: 100%; height: 100%; object-fit: cover; }
.preview .remove { position: absolute; right: 6px; top: 6px; background: #fff; border: 1px solid #ccc; border-radius: 4px; padding: 2px 6px; cursor: pointer; }

.btn { padding: 8px 12px; border: 1px solid #ccc; background: #fff; border-radius: 6px; cursor: pointer; }
.btn.primary { background: #D32F2F; color: #fff; border-color: #D32F2F; }

.error { color: #D32F2F; font-size: 0.85rem; }

fieldset.optional { border: 1px dashed #ddd; border-radius: 8px; padding: 12px; }
legend { padding: 0 6px; color: #616161; }

.actions { display: flex; justify-content: flex-end; }
</style>

