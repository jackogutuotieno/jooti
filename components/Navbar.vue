<template>
    <div id="navigation">
        <b-navbar v-b-scrollspy="{offset:50, method:'auto'}" toggleable="lg" type="light" variant="light" fixed="top">
            <div v-for="brandingItem in brandings" :key="brandingItem.id">
                <b-navbar-brand :href="brandingItem.brandingUrl">
                    <b-img :src="brandingItem.brandingImage.url" :alt="brandingItem.brandingImageAlt"></b-img>
                </b-navbar-brand>
            </div>
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
    import { brandingQuery ,menuQuery } from '~/graphql/query'
    export default {
        data () {
            return {
                //logo_url: '/#',
                //logo_text: 'Jooti Digital',
                mainMenus: [],
                brandings: [],
            }
        },
        apollo: {
            mainMenus: {
                prefetch: true,
                query: menuQuery,
            },
            brandings: {
                prefetch: true,
                query: brandingQuery,
            }
        }
    }
</script>