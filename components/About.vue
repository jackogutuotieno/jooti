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
                        We strive to go above and beyond for our clients, fostering aelationship built on trust, 
                        confidence and honesty. Maybe it's our family orientation, but we think the most satisfying 
                        part of what we do is that we get toork with so many wonderful people. We're proud that we're 
                        a 10omen-ned business certified by the Women's Business velopment Center (WBDC). We're also 
                        proud that we put people first,ith monthly reward grams and team-building activities throughout 
                        the year. We strive to go above and beyond for our clients.
                        </p>
                        <p>
                        Maybe it’s our family orientation, but we think the most satisfying part of what we do 
                        is that. building activities throughout the year. We strive to go above and bond for our 
                        clients, fostering a relationship built on trust, confidence and nestyaybe it’s  fostering a 
                        relationship our.
                        </p>
                    </div> <!-- ./div -->
                </b-col> <!-- ./b-col -->
            </b-row> <!-- ./b-row -->
        </b-container> <!-- ./b-container -->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                about_banner_img: require("../assets/images/img-01.jpg"),
                about_title: 'about Us',
            }
        }
    }
</script>