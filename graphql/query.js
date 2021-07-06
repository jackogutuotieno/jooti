import gql from 'graphql-tag';

// Branding Query
export const brandingQuery = gql`
    query brandingQuery {
        brandings {
            id,
            brandingUrl,
            brandingImage {
                url
            },
            brandingImageAlt
        }
    }
`

// Menu Query
export const menuQuery = gql`
    query menuQuery {
        mainMenus {
            id,
            menuUrl,
            menuText
        }
    }
`

// Hero Slider Query
export const herosliderQuery = gql`
    query herosliderQuery {
        heroSliders {
            id,
            slideImage {
                url
            },
            slideTitle,
            slideCaption {
                text
            }
        }
    }
`

// About Query
export const aboutQuery = gql`
    query aboutQuery {
        aboutSections {
            id,
            aboutTitle,
            aboutExcerpt {
                text,
            },
            aboutHeroImage {
                url
            },
            aboutHeroImageAlt,
        }
    }
`

// Logo Query
export const logoQuery = gql`
    query logoQuery{
        logo {
            id,
            Logo
        }
    }   
`

// Services Query
export const servicesQuery = gql`
    query servicesQuery {
        servicesSections {
            id,
            serviceIconClass,
            serviceTitle,
            serviceExcerpt {
                text,
            }
        }
    }   
`

// Contacts Query
export const contactsQuery = gql`
    query contactsQuery {
        contactSections {
            id,
            contactTitle,
            contactExcerpt {
                text,
            },
            contactImageBanner {
                url
            },
            contactImageBannerAlt,
        }
    }   
`

// Contacts Objects Query
export const contactObjectQuery = gql`
    query contactObjectQuery {
        contactObjects {
            id,
            contactObjecIcon,
            contactObjecUrl,
            contactObjecText
        }
    }   
`