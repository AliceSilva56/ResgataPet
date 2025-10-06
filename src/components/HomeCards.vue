<script setup>
import { ref } from 'vue';
import ReportCard from '../components/ReportCard.vue'; // Ajuste o caminho se necessário

const reportList = ref([
    {
        id: 1,
        user: 'Anônimo', 
        type: 'Cachorro', 
        status: 'Perdido',
        location: 'Parque da Cidade, Feira de Santana - BA', 
        time: 'Há 2 horas',
        mainImage: '/img/cachorro.png', 
        description: 'Encontrei este cachorro perdido perto do parquinho. Ele está com coleira azul, mas sem identificação. Muito dócil e brincalhão.',
        tags: ['perdido', 'cachorro', 'parquedacidade']
    },
    {
        id: 2,
        user: 'Alice S.',
        type: 'Gato',
        status: 'Ferido (Grave)',
        location: 'Av. Brasil, Ponto 12, Feira de Santana - BA',
        time: 'Há 15 minutos',
        mainImage: '/img/gato.png',
        description: 'Gato Preto e Branco encontrado com a pata machucada. Está assustado e precisa de resgate urgente!',
        tags: ['gato', 'urgente', 'ferido']
    },
    {
        id: 3,
        user: 'Mário Silva',
        type: 'Cachorro',
        status: 'Encontrado',
        location: 'Praia do Forte, Feira de Santana - BA',
        time: 'Há 1 dia',
        mainImage: '/img/cachorro2.png',
        description: 'Cachorro lindo e brincalhão encontrado na praia. Parece bem cuidado e está sem coleira.',
        tags: ['cachorro', 'encontrado', 'praia', 'dócil']
    }
]);


const handleHelp = (id) => {
    console.log(`Ação "Ajudar" acionada para o report ID: ${id}`);
};

const handleViewMap = (location) => {
    console.log(`Ação "Ver no Mapa" acionada para: ${location}`);
};

const handleReportFalse = (id) => {
    console.log(`Ação "Reportar Falso" acionada para o report ID: ${id}`);
};
</script>

<template>
  
<main class="main-content">
        <h1 class="feed-title">Feed de Reports</h1>
        
        <div class="feed-container" id="feed">
            <ReportCard 
                v-for="report in reportList" 
                :key="report.id" 
                :reportData="report"
                @help="handleHelp"
                @view-map="handleViewMap"
                @report-false="handleReportFalse"
            />
        </div>
    </main>
</template>

<style scoped>

.main-content {
    max-width: 600px; 
    /* 🚨 CORREÇÃO AQUI: Damos o espaço necessário no topo para o Navbar fixo */
    margin: 100px auto 20px auto; 
    /* ^ Altere a linha acima (o 'margin: 20px auto;' original) */
    
    padding: 0 16px;
}
.feed-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: var(--dark-gray); 
}

.feed-container {
    display: flex;
    flex-direction: column;
    gap: 20px; 
}


body {
    background-color: #F0F2F5; 
}
</style>