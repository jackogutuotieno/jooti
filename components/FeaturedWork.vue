<template>
    <div id="featured-work" class="default-slider">
        <div class="title-wrap center--line">
            <h2>featured projects</h2>
        </div>
        <div class="text-center w-50 m-auto mb-3">
            <p>
                Ahis is Photoshop's version of Lorem Ipsum. Proin gravidavelvsauctor. aliquet. 
                Aenean sollicitudin, lorem quis bibend um auctor, nisi elequat ipsum,
            </p>
        </div>
        <carousel :items="2" :center="true" :loop="true" :margin="10" :dots="false" :autoplay="true">
            <div class="slide" v-for="slide in slides" :key="slide.id">
                <img :src="slide.url" :alt="slide.alt"/>
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
                slides: [
                    { 
                        id:'1', 
                        url: 'https://placeimg.com/1920/800/any?1', 
                        alt: 'Lontels Sacco',
                        title: 'Lontels Sacco',
                        caption: 'Precision Joomla Integration - 2013'
                    },
                    { 
                        id:'2', 
                        url: 'https://placeimg.com/1920/800/any?2', 
                        alt: 'Moveon Telecoms',
                        title: 'Moveon Telecoms',
                        caption: 'Precision WordPress Integration - 2020'
                    },
                    { 
                        id:'3', 
                        url: 'https://placeimg.com/1920/800/any?2', 
                        alt: 'Destiny Women',
                        title: 'Destiny Women',
                        caption: 'Precision WordPress Integration - 2019',
                    },
                ],
            }
        }
    }
</script>