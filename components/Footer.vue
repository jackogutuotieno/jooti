<template>
    <div id="footer">
        <div class="overlay type--two"></div>
        <b-img :src="footer_bg_url" alt="Jooti Digital" class="w-100"></b-img>
        <b-container>
            <b-row>
                <b-col md="6" lg="3">
                    <h3>{{footer_block_title}}</h3>
                    <div class="text-wrap">
                        <p>{{footer_block_text}}</p>
                    </div>
                </b-col>
                <b-col md="6" lg="3" v-for="block in footer_blocks.blocks" :key="block.id">
                    <h3>{{block.name}}</h3>
                    <ul v-for="item in block.items" :key="item.id">
                        <li> <a :href="item.url">{{item.text}}</a></li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                footer_bg_url: require("../assets/images/img-03.jpg"),
                footer_block_title: 'About US',
                footer_block_text: 'Jooti Digital is a fast rising digital agency that seeks to set the trend in creation of products for web and mobile technologies that impact businesses across the private and public space. We don\'t just create designs for the sake of it. We believe in products that leave a lasting impression and indellible marks in the hearts of our clients',
                footer_blocks: {
                    blocks : [{
                        name : 'Services',
                        items : [
                            { url: '#', text : 'ERP Integration' },
                            { url: '#', text : 'Web Development' },
                            { url: '#', text : 'Mobile App Development' },
                            { url: '#', text : 'Usability Research & Audit' },
                            { url: '#', text : 'Social Media Management' },
                            { url: '#', text : 'Off/Online SEO' },
                        ]
                        },
                        {
                        name : 'Quick Links',
                        items : [
                            { url: '#', text : 'Home' },
                            { url: '#', text : 'About Us' },
                            { url: '#', text : 'Services' },
                            { url: '#', text : 'Portfolio' },
                        ]
                        },
                        {
                        name : 'Find Us',
                        items : [
                            { url: '#', text : 'Facebook' },
                            { url: '#', text : 'Twitter' },
                            { url: '#', text : 'LinkedIn' },
                            { url: '#', text : 'Github' },
                        ]
                        },
                    ]
                }
            }
        }
    }
</script>