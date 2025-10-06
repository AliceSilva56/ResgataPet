<template>
  <div class="post-card">
    <div class="post-header">
      <div class="post-user-info">
        <div class="user-line">
          <h3 class="user-name">{{ reportData.user || 'Anônimo' }}</h3>
          <i class="fas fa-ellipsis-h options-icon"></i>
        </div>

        <div class="status-line">
          <i class="fas fa-paw status-icon"></i>
          <span>{{ reportData.type || 'Animal' }} • {{ reportData.status }}</span>
        </div>

        <div class="location-line">
          <i class="fas fa-map-marker-alt location-icon"></i>
          <span class="location-text">{{ reportData.location }}</span>
          <span class="post-time"> • {{ reportData.time || 'Agora' }}</span>
        </div>
      </div>
    </div>
    
    <img v-if="reportData.mainImage" :src="reportData.mainImage" alt="Foto do animal reportado" class="post-image">
    
    <div class="post-content">
        <p class="post-description">{{ reportData.description }}</p>
        
        <div class="post-tags">
            <span v-for="tag in reportData.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
    </div>

    <div class="post-actions">
      <button class="action-btn" @click="$emit('help', reportData.id)">
        <i class="fas fa-hand-holding-heart"></i> Ajudar
      </button>
      <button class="action-btn" @click="$emit('view-map', reportData.location)">
        <i class="fas fa-map-marked-alt"></i> Ver no mapa
      </button>
      <button class="action-btn" @click="$emit('report-false', reportData.id)">
        <i class="fas fa-flag"></i> Reportar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportCard',
  props: {
    reportData: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style>

:root {
    --primary-color: #D32F2F; /* Vermelho/Resgate */
    --secondary-color: #F57C00; /* Laranja/Patinhas */
    --white: #FFFFFF;
    --light-gray: #F0F2F5; /* Fundo leve do feed */
    --border-gray: #E0E0E0; /* Linhas de borda */
    --text-dark: #333333; /* Texto principal escuro */
    --text-medium: #616161; /* Texto secundário (cinza) */
    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

body {
    background-color: var(--light-gray);
    font-family: Arial, sans-serif;
}
</style>

<style scoped>

.post-card {
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: var(--shadow);
    overflow: hidden;
    margin-bottom: 20px;
}

.post-header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post-user-info {
    display: flex;
    flex-direction: column;
    width: 100%; /* Permite que o conteúdo use todo o espaço */
}

/* Linha do Nome (e Ícone de Opções) */
.user-line {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4px;
}

.user-name {
    font-size: 1rem;
    font-weight: bold;
    color: var(--text-dark);
    margin: 0;
}

.options-icon {
    font-size: 1rem;
    color: var(--text-medium);
    cursor: pointer;
    padding: 0 5px;
}

/* Linha do Status (Tipo de Animal e Situação) */
.status-line {
    font-size: 0.85rem;
    color: var(--text-medium);
    margin-bottom: 2px;
    display: flex;
    align-items: center;
}

.status-icon {
    color: var(--secondary-color); /* Patinha laranja */
    margin-right: 5px;
}

/* Linha da Localização e Tempo */
.location-line {
    font-size: 0.85rem;
    color: var(--text-medium);
    display: flex;
    align-items: center;
    gap: 5px;
}

.location-icon {
    color: var(--text-medium);
}

.post-time {
    color: var(--text-medium);
}

/* --- Imagem --- */
.post-image {
    width: 100%;
    /* Altura reduzida para o padrão de feed */
    height: auto; 
    max-height: 400px;
    object-fit: cover;
}

/* --- Conteúdo --- */
.post-content {
    padding: 1rem;
}

.post-description {
    font-size: 1rem;
    color: var(--text-dark);
    line-height: 1.4;
    margin-bottom: 1rem;
}

/* --- Tags --- */
.post-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 0.5rem; /* Espaçamento menor após tags */
}

.tag {
    background-color: var(--light-gray);
    color: var(--text-medium);
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: lowercase;
}

/* --- Ações (Rodapé) --- */
.post-actions {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-top: 1px solid var(--border-gray);
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    color: var(--text-medium);
    padding: 0.5rem;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
    font-size: 0.9rem;
}

.action-btn i {
    font-size: 1.1rem;
}

.action-btn:hover {
    color: var(--primary-color); /* Cor principal no hover */
}
</style>