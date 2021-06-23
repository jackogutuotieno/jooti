<template>
    <header>
        <div class="default-slider">
            <carousel :items="1" :dots="false" :autoplay="true">
                <div class="slide" v-for="slide in slides" :key="slide.id">
                    <b-img :src="slide.img_src" :alt="slide.alt"></b-img>
                    <div class="main-wrap">
                        <div class="text-wrap">
                            <h2>{{ slide.title }}</h2>
                            <p>{{ slide.caption }}</p>
                            <p><a :href="slide.link" class="btn btn-primary">more</a></p>
                        </div> <!-- ./div -->
                    </div> <!-- ./div -->
                </div> <!-- ./div -->
            </carousel> <!-- ./carousel -->
        </div> <!-- ./div -->
    </header> <!-- ./header -->
</template> <!-- ./template -->

<script>
    export default {
        data () {
            return {
                slides: [
                    { 
                        id:'1', 
                        img_src: require("../assets/images/slides/slide-01.jpg"), 
                        alt: 'Image one',
                        title: 'The standard Lorem Ipsum passage, used since the 1500s',
                        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        link: '/home'
                    },
                    { 
                        id:'2', 
                        img_src: require("../assets/images/slides/slide-02.jpg"),
                        alt: 'Image two',
                        title: 'Sed ut perspiciatis unde omnis iste natus error sit',
                        caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        link: '/about'
                    },
                ],
            }
        }
    }
</script>