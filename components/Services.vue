<template>
    <div id="services">
        <b-container>
            <div class="title-wrap center--line">
                <h2>our services</h2>
            </div>
            <div class="text-center w-50 m-auto mb-3">
                <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravidavelvsauctor. aliquet. 
                    Aenean sollicitudin, lorem quis bibend um auctor, nisi elequat ipsum,
                </p>
            </div>
            <b-row>
                <b-col lg="4" v-for="service in services" :key="service.id">
                    <div class="content-wrap">
                        <div class="icon-box"><span :class="service.icon"></span></div>
                        <h4>{{ service.title }}</h4>
                        <p>{{ service.text }}</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data () {
            return {
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