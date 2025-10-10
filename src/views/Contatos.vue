<template>
  <div class="contatos-container">
    <transition name="fade">
      <div v-if="!expandedCard" class="cards">
        <!-- Card Email -->
        <div class="card" @click="expandCard('email')">
          <img src="@/assets/img/email.png" alt="Email">
          <h3>E-mail</h3>
          <p>resgatapet@gmail.com</p>
        </div>

        <!-- Card Telefone -->
        <div class="card" @click="expandCard('telefone')">
          <img src="@/assets/img/telefone.png" alt="Telefone">
          <h3>Telefone</h3>
          <p>(11) 1234-5678</p>
        </div>

        <!-- Card Endereço -->
        <div class="card" @click="expandCard('endereco')">
          <img src="@/assets/img/localizacao.png" alt="Localização">
          <h3>Endereço</h3>
          <p>Rua dos Animais, 123 - São Paulo, SP</p>
        </div>
      </div>
    </transition>

    <!-- Card Expandido -->
    <transition name="slide">
      <div v-if="expandedCard" class="card-expandido">
        <button class="fechar" @click="expandedCard = null">X</button>

        <div class="card-conteudo">
          <!-- Lado Esquerdo (Imagem) -->
          <div class="card-img">
            <img v-if="expandedCard === 'email'" src="@/assets/img/email.png" alt="Email">
            <img v-if="expandedCard === 'telefone'" src="@/assets/img/telefone.png" alt="Telefone">
            <img v-if="expandedCard === 'endereco'" src="@/assets/img/localizacao.png" alt="Localização">
          </div>

          <!-- Lado Direito (Form/Conteúdo) -->
          <div class="card-info">
            <div v-if="expandedCard === 'email'">
              <h2>Entre em contato por E-mail</h2>
              <p>Nosso e-mail: <b>resgatapet@gmail.com</b></p>
              <form>
                <label>Seu e-mail:</label>
                <input type="email" placeholder="Digite seu e-mail">
                
                <label>Mensagem:</label><br>
                <textarea placeholder="Digite sua mensagem"></textarea><br>
                
                <button type="submit" class="btn">Enviar</button>
              </form>
            </div>

            <div v-if="expandedCard === 'telefone'">
              <h2>Contato por Telefone</h2>
              <p>Número: <b>(11) 1234-5678</b></p>
              <p>Ligue diretamente ou peça para retornarmos sua ligação:</p>
              <form>
                <label>Seu nome:</label>
                <input type="text" placeholder="Digite seu nome">
                
                <label>Telefone para retorno:</label>
                <input type="tel" placeholder="Digite seu telefone">
                
                <button type="submit" class="btn">Solicitar retorno</button>
              </form>
            </div>

            <div v-if="expandedCard === 'endereco'">
              <h2>Venha nos visitar 🐾</h2>
              <p><b>Rua dos Animais, 123 - São Paulo, SP</b></p>
              <iframe 
                width="100%" 
                height="250" 
                frameborder="0" 
                style="border:0" 
                :src="mapUrl" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Contatos",
  data() {
    return {
      expandedCard: null,
      mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-46.633%2C-23.550%2C-46.620%2C-23.540"
    }
  },
  methods: {
    expandCard(tipo) {
      this.expandedCard = tipo;
    }
  }
}
</script>

<style scoped>
/* Inputs e textarea */
textarea, input[type="email"], input[type="text"], input[type="tel"] {
  width: 80%;
  max-width: 500px;
  height: 50px;
  resize: none;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: #fafafa;
}

.contatos-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
}

/* Cards */
.cards {
  margin-top: 100px;
  display: flex;
  gap: 2rem;
}
.card {
  background: var(--cor-branco);
  color: var(--cor-cinza-escuro);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  width: 300px;
  height: 400px;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
}
.cards img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-bottom: 50px;
}

/* Card expandido */
.card-expandido {
  position: relative;
  background: var(--cor-branco);
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}
.card-conteudo {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}
.card-img img {
  width: 200px;
  height: auto;
  object-fit: contain;
}
.card-info {
  flex: 1;
}
.card-expandido h2 {
  color: var(--cor-primaria);
}
.card-expandido .btn {
  background: var(--cor-primaria);
  color: var(--cor-branco);
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
.card-expandido .btn:hover {
  background: var(--cor-secundaria);
}
.fechar {
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--cor-primaria);
  color: var(--cor-branco);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
}

/* Animações */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}

/* RESPONSIVO - Empilha cards e card expandido */
@media (max-width: 768px) {
  .cards {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .card {
    width: 90%;
    height: auto;
    padding: 1.5rem;
  }

  .cards img {
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
  }

  .card-conteudo {
    flex-direction: column;
    gap: 1.5rem;
  }

  .card-img img {
    width: 100%;
    max-width: 200px;
    height: auto;
  }
}
</style>
