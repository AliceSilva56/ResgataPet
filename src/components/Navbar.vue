<script setup>
// 1. Importe seus componentes SVG
import IconHome from '../assets/icons/IconHome.vue';
import IconReport from '../assets/icons/IconReport.vue';
import IconAdotar from '../assets/icons/IconAdotar.vue';
import IconContact from '../assets/icons/IconContact.vue';
import IconDoar from '../assets/icons/IconDoar.vue';
import IconLogin from '../assets/icons/IconUser.vue';


const appName = 'ResgataPet'; 

</script>

<template> 
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo">
                <a href="#" class="logo-link">Resgata<span>Pet</span></a>
            </div>
            
            <ul class="nav-links">
                <li>
                    <a href="#inicio" class="nav-link active">
                        <IconHome class="nav-icon" /> Início
                    </a>
                </li>
                
                <li>
                    <a href="#report" class="nav-link">
                        <IconReport class="nav-icon" /> Reportar
                    </a>
                </li>

                <li>
                    <a href="#adotar" class="nav-link">
                        <IconAdotar class="nav-icon" /> Adotar
                    </a>
                </li>
                
                <li>
                    <a href="#contatos" class="nav-link">
                        <IconContact class="nav-icon" /> Contatos
                    </a>
                </li>

                <li>
                    <a href="#doar" class="nav-link">
                        <IconDoar class="nav-icon" /> Doar
                    </a>
                </li>

                <li>
                    <a href="#login" class="login-btn">
                        <IconLogin class="nav-icon" /> Entrar
                    </a>
                </li>
            </ul>

            <div class="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
</template>

<style scoped>

/* Variáveis de cores */

/* Reset e estilos base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}


/* Navbar */
.navbar {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

.navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #D32F2F;
    text-decoration: none;
}

.logo span {
    color: #F57C00;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
    color: #D32F2F;
}

.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #D32F2F;
    transition: width 0.3s;
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}

.login-btn {
    background-color: #D32F2F;
    color: #fff !important;
    padding: 0.5rem 1rem !important;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.login-btn:hover {
    background-color: #b71c1c;
}

.mobile-menu {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

</style>