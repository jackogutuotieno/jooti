<template>
    <div id="services">
        <b-container>
            <div class="title-wrap center--line">
                <h2>our services</h2>
            </div>
            <div class="text-center w-50 m-auto mb-5 font-bigger-lighter">
                <p>
                    Amazing services we offer our clients.
                </p>
            </div>
            <b-row>
                <b-col lg="6" v-for="service in servicesSections" :key="service.id">
                    <div class="content-wrap">
                        <div class="icon-box">
                            <span :class="service.serviceIconClass"></span>
                        </div>
                        <h4>{{ service.serviceTitle }}</h4>
                        <p>{{ service.serviceExcerpt.text }}</p>
                    </div> <!-- ./div -->
                </b-col> <!-- ./b-col -->
            </b-row> <!-- ./b-row -->
        </b-container> <!-- ./b-container -->
    </div> <!-- ./div -->
</template> <!-- ./template -->

<script>
    import { servicesQuery } from '~/graphql/query'
    export default {
        data () {
            return {
                servicesSections: [],
            }
        },
        apollo: {
            servicesSections: {
                prefetch: true,
                query: servicesQuery,
            },
        }
    }
</script>