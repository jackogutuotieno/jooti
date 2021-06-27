<template>
    <div id="portfolio" class="default-slider" :responsive="{0:{nav:false,dots:true}, 992:{nav:true,dots:false}}">
        <div class="title-wrap center--line">
            <h2> {{ section_title }}</h2>
        </div>
        <div class="text-center w-50 m-auto mb-3">
            <p>
                {{ section_content }}
            </p>
        </div>
        <carousel :items="2" :center="true" :loop="true" :margin="10" :dots="false" :autoplay="true">
            <div class="slide" v-for="slide in slides" :key="slide.id">
                <img :src="slide.img_src" :alt="slide.alt"/>
                <div class="main-wrap">
                    <div class="text-wrap">
                        <h2>{{ slide.title }}</h2>
                        <p>{{ slide.caption }}</p>
                    </div> <!-- ./div -->
                </div> <!-- ./div -->
            </div> <!-- ./div -->
        </carousel> <!-- ./carousel -->
    </div> <!-- ./div -->
</template> <!-- ./template -->

<script>
    export default {
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
    }
</script>