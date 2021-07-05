import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

//Replace this with your project's endpoint
const GRAPHCMS_API = "https://api-us-east-1.graphcms.com/v2/ckqmpafqa59cq01z1ceunctss/master"


export default () => ({
    link: new HttpLink({ uri: GRAPHCMS_API }),
    cache: new InMemoryCache()
})