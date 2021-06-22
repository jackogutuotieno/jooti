<template>
    <div id="services">
        <b-container>
            <div class="title-wrap center--line">
                <h2>{{ section_title }}</h2>
            </div>
            <div class="text-center w-50 m-auto mb-3">
                <p>
                    {{ section_content }}
                </p>
            </div>
            <b-row>
                <b-col lg="4" v-for="service in services" :key="service.id">
                    <div class="content-wrap">
                        <div class="icon-box"><span :class="service.icon"></span></div>
                        <h4>{{ service.title }}</h4>
                        <p>{{ service.text }}</p>
                    </div> <!-- ./div -->
                </b-col> <!-- ./b-col -->
            </b-row> <!-- ./b-row -->
        </b-container> <!-- ./b-container -->
    </div> <!-- ./div -->
</template> <!-- ./template -->

<script>
    export default {
        data () {
            return {
                section_title: 'our services',
                section_content: 'What we do and how we create stuff.',
                services: [
                    { 
                        id:'1', 
                        icon: 'icon-settings',
                        title: 'ERP Integration',
                        text: 'Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz',
                    },
                    { 
                        id:'2', 
                        icon: 'icon-screen-smartphone',
                        title: 'Web Development',
                        text: 'Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz',
                    },
                    { 
                        id:'3', 
                        icon: 'icon-screen-desktop',
                        title: 'Mobile App Development',
                        text: 'Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz',
                    },
                    { 
                        id:'4', 
                        icon: 'icon-notebook',
                        title: 'Usability Research & Audit',
                        text: 'Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz',
                    },
                    { 
                        id:'5', 
                        icon: 'icon-note',
                        title: 'Social Media Management',
                        text: 'Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz',
                    },
                    { 
                        id:'6', 
                        icon: 'icon-eye',
                        title: 'Off/Online SEO',
                        text: 'Why I say old chap that is, spiffing tomfoolery lost the plot plastered starkers tosser, say no biggie brolly bleeding superhe full monty Eliz',
                    },
                ],
            }
        }
    }
</script>