<template>
    <b-container fluid>
        <b-row id="contact" class="bg-light">
            <b-col lg="6" class="left-col flex-centered">
                <div class="content-padding">
                    <div class="title-wrap left--line">
                        <h2>{{ section_title }}</h2>
                    </div> <!-- ./div -->
                    <p>
                        {{ section_content }}
                    </p>
                    <ul>
                        <li v-for="contact_item in contact_items" :key="contact_item.id">
                            <span :class="contact_item.icon"></span>
                            <a :href="contact_item.url">{{ contact_item.text }}</a>
                        </li> <!-- ./li -->
                    </ul> <!-- ./ul -->
                </div> <!-- ./div -->
            </b-col> <!-- ./b-col -->
            <b-col lg="6" class="right-col">
                <figure class="figure position-relative img-padding-relative p-0">
                    <div class="overlay"></div>
                    <b-img fluid src="../assets/images/img-02.jpg"  class="w-100 h-100" alt="About Us"></b-img>
                </figure> <!-- ./figure -->
            </b-col> <!-- ./b-col -->
        </b-row> <!-- ./b-row -->
    </b-container> <!-- ./b-container -->
</template> <!-- ./template -->

<script>
    export default {
        data () {
            return {
                section_title: 'Would you like to know about work, products or just know us over cofee :)?',
                section_content: 'We strive to be innovative and competitive always in this digital era. For comments or queries\ ,kindly reach us using the contacts below.',
                contact_items: [
                    { 
                        id:'1', 
                        icon: 'icon-phone', 
                        url: 'tel:+254720801001',
                        text: '254 720 80 10 01',
                    },
                    { 
                        id:'2', 
                        icon: 'icon-social-github', 
                        url: 'http://github.com/jooti-tech',
                        text: '@Jooti-tech',
                    },
                    { 
                        id:'3', 
                        icon: 'icon-envelope', 
                        url: 'mailto:jack.otieno@ymail.com',
                        text: 'jack.otieno@ymail.com',
                    },
                ],
            }
        }
    }
</script>