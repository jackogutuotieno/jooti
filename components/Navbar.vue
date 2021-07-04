<template>
    <div id="navigation">
        <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
            <!-- <b-navbar-brand :href="logo_url">
                <strong>{{ logo_text }}</strong>
            </b-navbar-brand> -->
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ms-auto">
                    <b-nav-item v-for="menu in mainMenus" v-bind:key="menu.id" :to="menu.menuUrl">
                        <span>{{ menu.menuText }}</span>
                    </b-nav-item> <!-- ./b-nav-item -->
                </b-navbar-nav> <!-- ./b-navbar-nav -->
            </b-collapse> <!-- ./b-collapse -->
        </b-navbar> <!-- ./b-navbar -->
    </div> <!-- ./div -->
</template> <!-- ./template -->

<script>
    import { menuQuery } from '~/graphql/query'
    export default {
        data () {
            return {
                //logo_url: '/#',
                //logo_text: 'Jooti Digital',
                mainMenus: [],
            }
        },
        apollo: {
            mainMenus: {
                prefetch: true,
                query: menuQuery,
            }
        }
    }
</script>