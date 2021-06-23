<template>
    <div id="navigation">
        <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
            <b-navbar-brand href="#"><strong>Jooti</strong>Digital</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ms-auto">
                    <b-nav-item v-for="menu in menus" :key="menu.id" :to="menu.url">{{ menu.text }}</b-nav-item>
                </b-navbar-nav> <!-- ./b-navbar-nav -->
            </b-collapse> <!-- ./b-collapse -->
        </b-navbar> <!-- ./b-navbar -->
    </div> <!-- ./div -->
</template> <!-- ./template -->

<script>
    export default {
        data () {
            return {
                menus: [
                    { 
                        url: '/',
                        text: 'Home'
                    },
                    { 
                        url: '/#about',
                        text: 'About'
                    },
                    { 
                        url: '/#services',
                        text: 'Services'
                    },
                    { 
                        url: '/#portfolio',
                        text: 'Portfolio'
                    },
                    { 
                        url: '/#contact',
                        text: 'Contact'
                    },
                ],
            }
        }
    }
</script>