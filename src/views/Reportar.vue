<template>
  <div class="report-container">
    <!-- Topo: logo + título -->
    <div class="header-row">
      <img src="@/assets/img/logo.png" alt="Logo ResgataPet" class="logo" />
      <div class="title-group">
        <h2>Reportar Animal Perdido</h2>
        <p class="description">
          Ajude um pet a reencontrar seu lar 🐾<br />
          Preencha as informações abaixo com atenção.
        </p>
      </div>
    </div>

    <!-- Card principal: form + imagem -->
    <div class="main-card">
      <!-- Formulário -->
      <form @submit.prevent="enviarReport" class="report-form">
        <!-- Linha principal -->
        <div class="form-row main-row">
          <div class="form-group">
            <label>Nome (se souber)</label>
            <input type="text" v-model="form.nome" placeholder="Ex: Rex, Nina..." />
          </div>
          <div class="form-group">
            <label>Tipo de Animal *</label>
            <select v-model="form.tipo" required>
              <option disabled value="">Selecione</option>
              <option>Cachorro</option>
              <option>Gato</option>
              <option>Outro</option>
            </select>
          </div>
          <div class="form-group">
            <label>Local onde foi visto *</label>
            <input type="text" v-model="form.local" placeholder="Rua, bairro, cidade..." required />
          </div>
          <div class="form-group">
            <label>Situação *</label>
            <select v-model="form.situacao" required>
              <option disabled value="">Selecione</option>
              <option>Perdido</option>
              <option>Ferido</option>
              <option>Encontrado</option>
              <option>Outro</option>
            </select>
          </div>
        </div>

        <!-- Descrição -->
        <div class="form-group full-width">
          <label>Descrição</label>
          <textarea v-model="form.descricao" rows="4" placeholder="Cor, tamanho, comportamento, sinais, etc."></textarea>
        </div>

        <!-- Fotos -->
        <div class="form-group full-width">
          <label>Fotos (1–5 imagens)</label>
          <input type="file" multiple accept="image/*" @change="onFileChange" />
          <div class="preview-images" v-if="form.fotos.length">
            <img v-for="(img, index) in form.fotosPreview" :key="index" :src="img" />
          </div>
        </div>

        <!-- Linha de contato -->
        <div class="form-row contact-row">
          <div class="form-group">
            <label>Nome</label>
            <input type="text" v-model="form.contatoNome" placeholder="Nome" />
          </div>
          <div class="form-group">
            <label>Telefone</label>
            <input type="text" v-model="form.contatoTelefone" placeholder="Telefone" />
          </div>
          <div class="form-group">
            <label>E-mail</label>
            <input type="text" v-model="form.contatoEmail" placeholder="E-mail" />
          </div>
        </div>

        <!-- Botão -->
        <button type="submit">Enviar Reporte</button>
      </form>

      <!-- Imagem lateral -->
      <!--<img src="@/assets/img/reportar.png" alt="Reportar Animal" class="illustration" />-->
    </div>

    <p v-if="mensagem" class="success-msg">{{ mensagem }}</p>
  </div>
</template>

<script>
export default {
  name: "Reportar",
  data() {
    return {
      form: {
        nome: "",
        tipo: "",
        local: "",
        situacao: "",
        descricao: "",
        fotos: [],
        fotosPreview: [],
        contatoNome: "",
        contatoTelefone: "",
        contatoEmail: "",
      },
      mensagem: "",
    };
  },
  methods: {
    onFileChange(event) {
      const files = event.target.files;
      this.form.fotos = [...files];
      this.form.fotosPreview = Array.from(files).map(file => URL.createObjectURL(file));
    },
    enviarReport() {
      this.mensagem = "✅ Reporte enviado com sucesso! Obrigado por ajudar um pet 💙";
      this.form = {
        nome: "",
        tipo: "",
        local: "",
        situacao: "",
        descricao: "",
        fotos: [],
        fotosPreview: [],
        contatoNome: "",
        contatoTelefone: "",
        contatoEmail: "",
      };
    },
  },
};
</script>

<style scoped>
/* Descrição com tamanho fixo */
.report-form .form-group.full-width textarea {
  width: 801px;
  height: 79px;
  resize: none; /* opcional: impede que o usuário redimensione */
}
/* Container geral */
.report-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  font-family: Arial, sans-serif;
}

/* Topo: logo + título */
.header-row {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.header-row .logo {
  width: 50px;
}
.title-group h2 {
  font-size: 1.5rem;
  margin-top: 50px;
  color: #333;
}
.title-group .description {
  font-size: 0.95rem;
  color: #666;
  margin-top: 5px;
}

/* Card principal: form + imagem */
.main-card {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  flex-wrap: wrap;
  
}


.main-card .report-form {
  flex: 1 1 500px;
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
}

/* Imagem lateral */
/* .main-card .illustration {
  flex: 0 0 250px;
  width: 250px;
  border-radius: 15px;
  
  object-fit: cover;
}

/* Inputs alinhados ao tamanho do label */
.form-row {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.form-row .form-group {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 150px;
}
.form-row .form-group input,
.form-row .form-group select {
  width: 100%;
  padding: 8px 10px;
  font-size: 0.95rem;
}

/* Inputs full width */
.full-width input,
.full-width textarea,
.full-width select {
  width: 100%;
}

/* Inputs e textarea */
.report-form input[type="text"],
.report-form input[type="file"],
.report-form select,
.report-form textarea {
  border-radius: 12px;
  border: 1px solid #ccc;
  transition: all 0.3s;
}
.report-form input:focus,
.report-form select:focus,
.report-form textarea:focus {
  outline: none;
  border-color: #d32f2f;
  box-shadow: 0 0 0 2px rgba(211,47,47,0.2);
}

/* Botão */
.report-form button {
  margin-top: 10px;
  padding: 12px 0;
  background: #d32f2f;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
}
.report-form button:hover {
  background: #b71c1c;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

/* Pré-visualização de imagens */
.preview-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.preview-images img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ccc;
}

/* Mensagem de sucesso */
.success-msg {
  margin-top: 20px;
  color: green;
  font-weight: bold;
  text-align: center;
}

/* Responsivo */
@media (max-width: 1000px) {
  .main-card {
    flex-direction: column;
    align-items: center;
  }
  .main-card .illustration {
    width: 180px;
    margin-top: 20px;
  }
  .header-row {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .title-group h2 {
    font-size: 1.5rem;
    text-align: center;
  }
  .form-row {
    flex-direction: column;
  }
}
</style>
