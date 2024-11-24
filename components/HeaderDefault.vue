<template>
    <div>
        <HeaderBrand />
        <header>
            <nav class="flex flex-row space-between">
                <nuxt-link to="/">Party-on</nuxt-link>
                <ul class="flex flex-row">
                    <li><nuxt-link to="/Event">Evenement</nuxt-link></li>
                    <li><nuxt-link to="/About">A Propos</nuxt-link></li>
                    <li><nuxt-link to="/Contact">Contact</nuxt-link></li>
                </ul>
                <nuxt-link to="/Signin">Connectez-vous</nuxt-link>
            </nav>
        </header>
    </div>
</template>