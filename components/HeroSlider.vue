<template>
    <header>
        <div class="default-slider">
            <carousel :items="1" :dots="false" :autoplay="true" :responsive="{0:{nav:false,dots:true}, 992:{nav:true,dots:false}}">
                <div class="slide" v-for="slide in slides" :key="slide.id">
                    <b-img :src="slide.img_src" :alt="slide.alt"></b-img>
                    <div class="main-wrap">
                        <div class="text-wrap">
                            <h2>{{ slide.title }}</h2>
                            <p>{{ slide.caption }}</p>
                            <p><a :href="slide.link" class="btn btn-primary">view all services</a></p>
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
                        img_src: require("../assets/images/slides/erp-system.jpg"), 
                        alt: 'ERP Customization',
                        title: 'ERP Customization',
                        caption: 'We customize, design and deploy ERP systems that are scalable and match organizational needs.',
                        link: '/#services'
                    },
                    { 
                        id:'2', 
                        img_src: require("../assets/images/slides/web-development.jpg"),
                        alt: 'Web Development',
                        title: 'Web Development',
                        caption: 'We develop bespoke websites ad web apps as per your specifications.',
                        link: '/#services'
                    },
                    { 
                        id:'3', 
                        img_src: require("../assets/images/slides/mobile-development.jpg"),
                        alt: 'Mobile Development',
                        title: 'Mobile Development',
                        caption: 'We develop bespoke mobile apps/progressive web apps as per your specifications.',
                        link: '/#services'
                    },
                    { 
                        id:'4', 
                        img_src: require("../assets/images/slides/usability-research.jpg"),
                        alt: 'Usability Research & Audit',
                        title: 'Usability Research & Audit',
                        caption: 'We invest in researching UI/UX best practices to make your products stand out.',
                        link: '/#services'
                    },
                    { 
                        id:'5', 
                        img_src: require("../assets/images/slides/social-media.jpg"),
                        alt: 'Social Media Management',
                        title: 'Social Media Management',
                        caption: 'We will create and manage your social media pages to enable your organization, brand or campaign stand out',
                        link: '/#services'
                    },
                    { 
                        id:'6', 
                        img_src: require("../assets/images/slides/seo.jpg"),
                        alt: 'SEO & Analytics',
                        title: 'SEO & Analytics',
                        caption: 'We work hard to leverege better page ranks for your online presence and analytics for better decision making',
                        link: '/#services'
                    },
                ],
            }
        }
    }
</script>