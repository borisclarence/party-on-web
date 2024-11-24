<template>
    <div id="header-default">
        <div class="header-banner" :class="{'is-closed': isClosed}"> 
            <span>Bienvenue sur Party-on 2024</span>
            <span class="close" @click="closeBanner()">x</span>
        </div>
        <header class="header-nav">
            <nav class="header-nav-links">
                <NuxtLink class="nav-link-home" to="/" >Party-on</NuxtLink>
                <ul class="header-nav-list">
                    <li><NuxtLink to="/Event">Programmes</NuxtLink></li>
                    <li><NuxtLink to="/About">A Propos</NuxtLink></li>
                    
                    <!-- TODO: A rajouter -->
                    <li><NuxtLink to="/About">Nos Partenaires</NuxtLink></li> 
                    
                    <li><NuxtLink to="/Contact">Contact</NuxtLink></li>  
                </ul>

                <NuxtLink class="nav-link-signin" to="/Signin">Connectez-vous</NuxtLink>
            </nav>
        </header>
    </div>
</template>

<script lang="ts" setup>
// import HeaderBanner from './Headers/HeaderBanner.vue';

// const navbarLink = '';

const isClosed = ref(false);
 
function closeBanner() {
    isClosed.value = !isClosed.value;
}
</script>

<style lang="scss" scoped>
#header-default {
    flex-direction: column;
    
    
    .header-banner {
        background: var(--primary-color);
        padding: 16px 40px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        font-weight: 600;

        &.is-closed {
            display: none;
        }

        .close {
            cursor: pointer;
        }
    }
    .header-nav {
        background: #000;
        color: white;
        
        // justify-content: space-between;
    
        .header-nav-links {
            padding: 16px 40px; 
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 80px;

            .nav-link-home {
                padding: 5px 40px; 

                font-size: 32px;
                font-weight: 600;
            }

            .nav-link-signin {
                font-size: 20px;
                font-weight: 600;

                border: 1px solid #EE5007;
                background: #EE5007;

                &:hover {
                    border: 1px solid #EE5007;
                    background: #dc3545;
                }

                border-radius: 4px;
                padding: 5px 10px;
            }

            .header-nav-list {
                display: flex;
                flex-direction: row;
                gap: 30px;

                background: var(--dark-color);

                font-size: 24px;
                font-weight: 600;
            }
        }
    }
}
</style>