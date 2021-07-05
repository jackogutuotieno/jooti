<template>
    <div id="about">
        <b-container>
            <b-row id="about" class="bg-light" v-for="about in aboutSections" :key="about.id">
                <b-col lg="6" class="left-col">
                    <b-img fluid src="../assets/images/img-01.jpg" alt="About Us"></b-img>
                </b-col>
                <b-col lg="6" class="right-col flex-centered">
                    <div class="title-wrap left--line">
                        <h2>{{ about.aboutTitle }}</h2>
                    </div>
                    <div class="content-padded">
                        <p>
                            {{ about.aboutExcerpt.text }}
                        </p>
                    </div> <!-- ./div -->
                </b-col> <!-- ./b-col -->
            </b-row> <!-- ./b-row -->
        </b-container> <!-- ./b-container -->
    </div> <!-- ./div -->
</template> <!-- ./template -->

<script>
    import { aboutQuery } from '~/graphql/query'
    export default {
        data () {
            return {
                aboutSections: [],
            }
        },
        apollo: {
            aboutSections: {
                prefetch: true,
                query: aboutQuery,
            }
        }
    }
</script>