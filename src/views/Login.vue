<template>
  <div class="page-root">
    <div class="layout">
      <!-- Left: Card de login -->
      <div class="card-wrap" role="main" aria-labelledby="login-title">
        <header class="card-header">
          <div class="logo">
            <!-- Simples logotipo textual, troque por imagem se tiver -->
            <strong>Resgata<span class="accent">Pet</span></strong>
          </div>
          <p class="subtitle">Entre para ajudar animais a encontrarem um lar 🐾</p>
        </header>

        <form class="card" @submit.prevent="submit">
          <h2 id="login-title" class="card-title">User Login</h2>

          <label class="input-group" :class="{ error: errors.username }">
            <span class="icon" aria-hidden="true" v-html="userIcon"></span>
            <input
              v-model="form.username"
              type="text"
              placeholder="Username"
              aria-label="username"
            />
          </label>
          <div v-if="errors.username" class="field-error">{{ errors.username }}</div>

          <label class="input-group" :class="{ error: errors.password }">
            <span class="icon" aria-hidden="true" v-html="lockIcon"></span>
            <input
              v-model="form.password"
              type="password"
              placeholder="Password"
              aria-label="password"
            />
          </label>
          <div v-if="errors.password" class="field-error">{{ errors.password }}</div>

          <div class="row small">
            <label class="checkbox">
              <input type="checkbox" v-model="form.remember" />
              <span>Remember</span>
            </label>
            <a class="forgot" href="#" @click.prevent="forgotPassword">Forgot password?</a>
          </div>

          <button class="btn-login" type="submit" :disabled="loading">
            <span v-if="!loading">Login</span>
            <span v-else>Entrando...</span>
          </button>

          <p class="signup">
            Não tem conta?
            <a href="#" @click.prevent="$emit('go-signup')">Criar conta</a>
          </p>
        </form>
      </div>

      <!-- Right: Ilustração (pets) -->
      <aside class="illustration" aria-hidden="true">
        <!-- Um SVG simples com cachorro e gato estilizados -->
        <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="furGrad" x1="0" x2="1">
              <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
              <stop offset="1" stop-color="#ffe9e9" stop-opacity="0.6"/>
            </linearGradient>
            <linearGradient id="bgSpot" x1="0" x2="1">
              <stop offset="0" stop-color="#ffffff" stop-opacity="0.06"/>
              <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
            </linearGradient>
          </defs>

          <!-- background soft shapes -->
          <rect x="0" y="0" width="600" height="600" fill="url(#bgSpot)"/>
          <g transform="translate(60,60) scale(0.8)">
            <!-- cachorro -->
            <g transform="translate(60,150)">
              <ellipse cx="150" cy="160" rx="120" ry="80" fill="#fff9f9" opacity="0.9"/>
              <path d="M70 160 Q150 30 230 160 L210 190 Q150 150 90 190 Z" fill="#ffffff" stroke="#f3d6d6" stroke-width="2"/>
              <circle cx="140" cy="100" r="50" fill="#fff" stroke="#f3b3b3" stroke-width="3"/>
              <circle cx="126" cy="90" r="8" fill="#333"/>
              <circle cx="154" cy="90" r="8" fill="#333"/>
              <path d="M128 117 Q140 128 152 117" stroke="#d97a7a" stroke-width="3" fill="none" stroke-linecap="round"/>
              <rect x="80" y="120" width="36" height="36" rx="6" fill="#f8b0b0"/>
            </g>

            <!-- gato sentado -->
            <g transform="translate(280,120) scale(0.9)">
              <ellipse cx="80" cy="220" rx="70" ry="45" fill="#fff9f9" />
              <path d="M60 170 Q80 100 120 170 L110 200 Q80 160 60 200 Z" fill="#fff" stroke="#f3d6d6" stroke-width="2"/>
              <circle cx="95" cy="130" r="36" fill="#fff"/>
              <circle cx="88" cy="125" r="6" fill="#333"/>
              <circle cx="102" cy="125" r="6" fill="#333"/>
              <path d="M90 146 Q95 156 100 146" stroke="#d97a7a" stroke-width="2" fill="none" stroke-linecap="round"/>
              <path d="M40 200 C55 180 120 180 135 200" stroke="#f3c2c2" stroke-width="6" fill="none" opacity="0.9" stroke-linecap="round"/>
            </g>

            <!-- small heart -->
            <g transform="translate(300,20) scale(0.8)">
              <path d="M10 30 A20 20 0 0 1 50 30 L30 60 Z" fill="#ff6b6b" transform="rotate(-20 30 30)"/>
            </g>
          </g>
        </svg>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  emits: ["login-success", "go-signup"],
  data() {
    return {
      form: {
        username: "",
        password: "",
        remember: false,
      },
      errors: {},
      loading: false,
      userIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 21a9 9 0 0 1 18 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      lockIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`
    };
  },
  methods: {
    validate() {
      this.errors = {};
      if (!this.form.username || this.form.username.trim().length < 3) {
        this.errors.username = "Informe um usuário (mín. 3 caracteres).";
      }
      if (!this.form.password || this.form.password.length < 6) {
        this.errors.password = "Senha muito curta (mín. 6 caracteres).";
      }
      return Object.keys(this.errors).length === 0;
    },
    async submit() {
      if (!this.validate()) return;
      this.loading = true;
      try {
        // Simulação: aqui você chamaria sua API (ex.: axios.post('/auth/login', this.form))
        await new Promise((r) => setTimeout(r, 900));
        // Em caso de sucesso:
        this.$emit("login-success", { username: this.form.username, remember: this.form.remember });
      } catch (err) {
        // tratar erro real
        this.errors.form = "Falha ao autenticar. Tente novamente.";
      } finally {
        this.loading = false;
      }
    },
    forgotPassword() {
      // ação de esqueci senha — pode abrir modal ou navegar
      this.$emit("forgot-password");
    }
  }
};
</script>

<style scoped>

/* Reset pequeno e tipografia */

* { box-sizing: border-box; }
.page-root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial;
  background: linear-gradient(180deg, #D32F2F 0%, #F57C00 100%);
  padding: 32px;
}

/* Layout central com duas colunas */
.layout {
  width: 1100px;
  max-width: 96%;
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  border-radius: 14px;
  box-shadow: 0 20px 60px rgba(16,24,40,0.35);
  display: grid;
  grid-template-columns: 1fr 460px;
  overflow: hidden;
}

/* Card de login container */
.card-wrap {
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Header com logo e subtítulo */
.card-header .logo {
  font-size: 28px;
  color: #fff;
  letter-spacing: -0.5px;
}
.card-header .logo .accent {
  color: #fff;
  background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  padding: 6px 8px;
  margin-left: 6px;
  border-radius: 6px;
  color: #fff;
}
.subtitle {
  margin-top: 10px;
  color: rgba(255,255,255,0.95);
  opacity: 0.95;
  font-size: 14px;
}

/* Card branco dentro do layout */
.card {
  margin-top: 28px;
  background: #ffffff;
  border-radius: 10px;
  padding: 32px;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 10px 30px rgba(8, 20, 40, 0.08);
}

/* título do card */
.card-title {
  text-align: center;
  margin: 0 0 18px;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: #212121;
}

/* input grupos */
.input-group {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f7f7f7;
  padding: 12px 14px;
  border-radius: 999px;
  margin-bottom: 12px;
  border: 1px solid rgba(0,0,0,0.02);
}
.input-group .icon { color: #616161; width: 20px; display: inline-flex; align-items: center; justify-content: center; }
.input-group input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 15px;
  flex: 1;
}

/* error */
.input-group.error { border-color: #ffb4b4; box-shadow: 0 0 0 4px rgba(255,178,178,0.06); }
.field-error { color: #d32f2f; font-size: 13px; margin: -6px 0 10px 12px; }

/* row pequeno */
.row.small {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0 18px;
  font-size: 13px;
  color: #616161;
}
.checkbox { display: flex; gap: 8px; align-items: center; color: #616161; }
.checkbox input { width: 16px; height: 16px; }

/* forgot link */
.forgot {
  color: #616161;
  text-decoration: underline;
  text-underline-offset: 3px;
  font-size: 13px;
}

/* botão de login */
.btn-login {
  margin-top: 8px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: #fff;
  background: linear-gradient(90deg, #D32F2F 0%, #E64A1A 60%);
  box-shadow: 0 8px 18px rgba(211,47,47,0.28);
  transition: transform .12s ease, box-shadow .12s ease;
}
.btn-login:active { transform: translateY(1px); }
.btn-login:disabled { opacity: .7; cursor: not-allowed; }

/* signup link */
.signup {
  margin-top: 14px;
  text-align: center;
  font-size: 13px;
  color: #616161;
}
.signup a { color: #D32F2F; text-decoration: none; font-weight: 600; }

/* Ilustração lateral */
.illustration {
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px;
}
.illustration svg { width: 100%; height: 100%; max-width: 420px; }

/* responsividade */
@media (max-width: 980px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .illustration { display: none; } /* esconde a ilustração em telas pequenas */
  .card-wrap { padding: 28px; }
  .card { max-width: 100%; padding: 26px; }
}

@media (max-width: 520px) {
  .page-root { padding: 20px; }
  .card { padding: 18px; }
  .card-title { font-size: 18px; }
}
</style>