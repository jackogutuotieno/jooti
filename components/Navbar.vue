<template>
    <div id="navigation">
        <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
            <b-navbar-brand :href="logo_url"><strong>{{ logo_text }}</strong></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ms-auto">
                    <b-nav-item v-for="menu in menus" :key="menu.id" :to="menu.url"><span>{{ menu.text }}</span></b-nav-item>
                </b-navbar-nav> <!-- ./b-navbar-nav -->
            </b-collapse> <!-- ./b-collapse -->
        </b-navbar> <!-- ./b-navbar -->
    </div> <!-- ./div -->
</template> <!-- ./template -->

<script>
    export default {
        data () {
            return {
                logo_url: '/#',
                logo_text: 'Jooti Digital',
                menu: [

                ],
                menus: [
                    { 
                        url: '/#',
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