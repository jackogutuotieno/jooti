import gql from 'graphql-tag';

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

// Sliders Query
export const sliderQuery = gql`
    query sliderQuery {
        slides {
            id,
            slideImage {
                url,
            },
            slideTitle,
            slideCaption
        }
    }
`

// About Query
export const aboutQuery = gql`
    query aboutQuery{
        aboutSections {
            id,
            aboutTitle,
            aboutExcerpt,
            aboutHeroImage {
                url
            }
        }
    }
`