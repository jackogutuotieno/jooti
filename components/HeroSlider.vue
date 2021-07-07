<template>
    <header>
        <div class="default-slider">
            <carousel v-if="heroSliders.length > 0" :items="1" :dots="false" :autoplay="true" :responsive="{0:{nav:false,dots:true}, 992:{nav:true,dots:false}}">
                <div class="slide" v-for="slide in heroSliders" :key="slide.id">
                    <b-img :src="slide.slideImage.url" :alt="slide.slideImageAlt"></b-img>
                    <div class="main-wrap">
                        <div class="text-wrap">
                            <h2>{{ slide.slideTitle }}</h2>
                            <p>{{ slide.slideCaption.text }}</p>
                            <p><a href="/#services" class="btn btn-primary">
                                <span>Read more</span>
                                <svg 
                                    version="1.1" 
                                    id="Layer_1" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                                    x="0px" 
                                    y="0px" 
                                    width="64px" 
                                    height="64px" 
                                    viewBox="0 0 64 64" 
                                    enable-background="new 0 0 64 64" 
                                    xml:space="preserve"
                                >
                                <g>
                                    <line 
                                        fill="none" 
                                        stroke="#ffffff" 
                                        stroke-width="1" 
                                        stroke-miterlimit="10" 
                                        x1="50" 
                                        y1="32" 
                                        x2="1" 
                                        y2="32"
                                    />
                                </g>
                                <polyline 
                                    fill="none" 
                                    stroke="#ffffff" 
                                    stroke-width="1" 
                                    stroke-linejoin="bevel" 
                                    stroke-miterlimit="10" points="10,23 1,32 10,41 "
                                />
                                </svg>
                                </a></p>
                        </div> <!-- ./div -->
                    </div> <!-- ./div -->
                </div> <!-- ./div -->
            </carousel> <!-- ./carousel -->
        </div> <!-- ./div -->
    </header> <!-- ./header -->
</template> <!-- ./template -->

<script>
    import { herosliderQuery } from '~/graphql/query'
    export default {
        data () {
            return {
                heroSliders: [],
            }
        },
        apollo: {
            heroSliders: {
                prefetch: true,
                query: herosliderQuery,
            }
        }
    }
</script>