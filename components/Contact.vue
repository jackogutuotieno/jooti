<template>
    <b-container fluid>
        <b-row id="contact" class="bg-light" v-for="contact in contactSections" :key="contact.id">
            <b-col lg="6" class="left-col flex-centered">
                <div class="content-padding font-bigger-lighter">
                    <div class="title-wrap left--line">
                        <h2>{{ contact.contactTitle }}</h2>
                    </div> <!-- ./div -->
                    <p>
                        {{ contact.contactExcerpt.text }}
                    </p>
                    <ul>
                        <li v-for="contactObject in contactObjects" :key="contactObject.id">
                            <span :class="contactObject.contactObjecIcon"></span>
                            <a :href="contactObject.contactObjecUrl" target="_blank">{{ contactObject.contactObjecText }}</a>
                        </li> <!-- ./li -->
                    </ul> <!-- ./ul -->
                </div> <!-- ./div -->
            </b-col> <!-- ./b-col -->
            <b-col lg="6" class="right-col">
                <figure class="figure position-relative img-padding-relative p-0">
                    <div class="overlay"></div>
                    <b-img fluid :src="contact.contactImageBanner.url"  class="w-100 h-100" :alt="contact.contactImageBannerAlt"></b-img>
                </figure> <!-- ./figure -->
            </b-col> <!-- ./b-col -->
        </b-row> <!-- ./b-row -->
    </b-container> <!-- ./b-container -->
</template> <!-- ./template -->

<script>
    import { contactsQuery, contactObjectQuery } from '~/graphql/query'
    export default {
        data () {
            return {
                contactSections: [],
                contactObjects: [],
            }
        },
        apollo: {
            contactSections: {
                prefetch: true,
                query: contactsQuery,
            },
            contactObjects: {
                prefetch: true,
                query: contactObjectQuery,
            },
        }
    }
</script>