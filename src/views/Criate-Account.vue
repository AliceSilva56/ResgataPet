<template>
  <div class="signup-container">
    <!-- Card de criação de conta -->
    <div class="signup-card">
      <h1 class="logo">🐾 ResgataPet</h1>
      <p class="subtitle">Crie sua conta e ajude animais a encontrarem um lar 🐶🐱</p>

      <form @submit.prevent="register">
        <input type="text" v-model="name" placeholder="Nome completo" required />
        <input type="email" v-model="email" placeholder="E-mail" required />
        <input type="password" v-model="password" placeholder="Senha" required />
        <input type="password" v-model="confirmPassword" placeholder="Confirmar senha" required />

        <button type="submit" class="btn-primary">Criar Conta</button>
      </form>

      <p class="alt-option">
        Já tem uma conta?
        <a href="/login">Entrar</a>
      </p>

      <p class="alt-option">
        Ou <a href="/home">navegar como anônimo</a>
      </p>
    </div>

    <!-- Ilustração lateral -->
    <div class="illustration">
      <img src="@/assets/img/CriarConta.png" alt="Pets" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CriaConta",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        alert("As senhas não coincidem!");
        return;
      }
      console.log("Nova conta:", this.name, this.email);
      alert("Conta criada com sucesso!");
      // Aqui você faria a chamada para o backend (API Nest.js)
    }
  }
};
</script>

<style scoped>
.signup-container {
  position: fixed;  /* 🔥 ocupa todo o viewport */
  inset: 0;         /* top:0; right:0; bottom:0; left:0 */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background: linear-gradient(135deg, #D32F2F, #F57C00);
  padding: 20px;
  overflow: auto; /* evita cortes em telas pequenas */
}

.signup-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  width: 350px;
  max-width: 90%;
  text-align: center;
  animation: fadeInUp 0.6s ease;
}

.logo {
  font-size: 28px;
  margin-bottom: 10px;
  color: #D32F2F;
}

.subtitle {
  font-size: 14px;
  margin-bottom: 20px;
  color: #616161;
}

.signup-card input {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
}

.btn-primary {
  background-color: #D32F2F;
  color: white;
  border: none;
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-primary:hover {
  background-color: #b71c1c;
}

.alt-option {
  font-size: 14px;
  margin-top: 15px;
  color: #616161;
}

.alt-option a {
  color: #D32F2F;
  text-decoration: none;
  font-weight: bold;
}

.illustration img {
  max-width: 300px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
  animation: float 3s ease-in-out infinite;
}

/* 🔄 Responsividade */
@media (max-width: 900px) {
  .signup-container {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  .illustration img {
    max-width: 180px;
  }
}

/* ✨ Animações suaves */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
</style>
