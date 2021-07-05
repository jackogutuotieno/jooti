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
                id,
                url
            }
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