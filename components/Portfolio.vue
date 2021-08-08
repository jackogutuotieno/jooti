<template>
    <div id="portfolio" class="default-slider">
        <div v-for="portfolioSecItem in portfolioSections" :key="portfolioSecItem.id">
            <div class="title-wrap center--line">
                <h2> {{ portfolioSecItem.portfolioTitle }}</h2>
            </div>
            <div class="text-center w-50 m-auto mb-3 font-bigger-lighter">
                <p>
                    {{ portfolioSecItem.portfolioExcerpt.text }}
                </p>
            </div>
        </div>
        <carousel v-if="portfolioItems.length > 0" :items="2" :center="true" :loop="true" :margin="10" :autoplay="true" :responsive="{0:{dots:false,nav:false,center:false,items:1}, 992:{nav:true,dots:false}}">
            <div class="slide mb-5" v-for="portfolioItem in portfolioItems" :key="portfolioItem.id">
                <img :src="portfolioItem.portfolioItemImage.url" />
                <div class="main-wrap">
                    <div class="text-wrap">
                        <h3>{{ portfolioItem.portfolioItemTitle }}</h3>
                        <p>{{ portfolioItem.portfolioItemCaption.text }}</p>
                        <p> <a :href="portfolioItem.portfolioItemLink"  target="_blank">Visit Website</a></p>
                    </div> <!-- ./div -->
                </div> <!-- ./div -->
            </div> <!-- ./div -->
        </carousel> <!-- ./carousel -->
    </div> <!-- ./div -->
</template> <!-- ./template -->

<script>
    /* export default {
        data () {
            return {
                section_title: 'Portfolio',
                section_content: 'some of our awesome works for our awesome clients',
                slides: [
                    { 
                        id:'1', 
                        img_src: require("../assets/images/portfolio/lontels.jpg"),
                        alt: 'Lontels Sacco',
                        title: 'Lontels Sacco',
                        caption: 'Precision Joomla Integration - 2013'
                    },
                    { 
                        id:'2', 
                        img_src: require("../assets/images/portfolio/moveon.jpg"), 
                        alt: 'Moveon Telecoms',
                        title: 'Moveon Telecoms',
                        caption: 'Precision WordPress Integration - 2020'
                    },
                ],
            }
        }
    } */
    import { portfolioQuery, portfolioItemsQuery } from '~/graphql/query'
    export default {
        data () {
            return {
                portfolioSections: [],
                portfolioItems: [],
            }
        },
        apollo: {
            portfolioSections: {
                prefetch: true,
                query: portfolioQuery,
            },
            portfolioItems: {
                prefetch: true,
                query: portfolioItemsQuery,
            }
        }
    }
</script>