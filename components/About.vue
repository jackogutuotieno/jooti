<template>
    <div id="about">
        <b-container>
            <b-row id="about" class="bg-light">
                <b-col lg="6" class="left-col">
                    <b-img fluid :src="about_banner_img" alt="About Us"></b-img>
                </b-col>
                <b-col lg="6" class="right-col flex-centered">
                    <div class="title-wrap left--line">
                        <h2>{{ about_title }}</h2>
                    </div>
                    <div class="content-padded">
                        <p>
                            {{ about_text }}
                        </p>
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
                about_banner_img: require("../assets/images/img-01.jpg"),
                about_title: 'about Us',
                about_text: 'Jooti Digital is a fast rising digital agency that seeks to\
                            set the trend in creation of products for web and mobile technologies that impact\
                            businesses across the private and public space.\
                            We don\'t just create designs for the sake of it. We believe in products that leave a lasting impression and\
                            indellible marks in the hearts of our clients',
            }
        }
    }
</script>