<template>
    <div id="portfolio" class="default-slider" :responsive="{0:{items:1,nav:false,center:false}}">
        <div class="title-wrap center--line">
            <h2> {{ portfolio_title }}</h2>
        </div>
        <div class="text-center w-50 m-auto mb-3">
            <p>
                Ahis is Photoshop's version of Lorem Ipsum. Proin gravidavelvsauctor. aliquet. 
                Aenean sollicitudin, lorem quis bibend um auctor, nisi elequat ipsum,
            </p>
        </div>
        <carousel :items="2" :center="true" :loop="true" :margin="10" :dots="false" :autoplay="true">
            <div class="slide" v-for="slide in slides" :key="slide.id">
                <img :src="slide.img_src" :alt="slide.alt"/>
                <div class="main-wrap">
                    <div class="text-wrap">
                        <h2>{{ slide.title }}</h2>
                        <p>{{ slide.caption }}</p>
                    </div>
                </div>
            </div>
        </carousel>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                portfolio_title: 'Portfolio',
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
                    { 
                        id:'3', 
                        img_src: require("../assets/images/portfolio/lontels.jpg"),
                        alt: 'Destiny Women',
                        title: 'Destiny Women',
                        caption: 'Precision WordPress Integration - 2019',
                    },
                ],
            }
        }
    }
</script>