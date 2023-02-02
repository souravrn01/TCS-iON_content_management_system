const mongoose = require('mongoose')
const schema = mongoose.Schema

const PostSchema = new schema({
      name: {
        type: String,
        default: "sample"
        },
       posts: [
              { 
                publishedby: {
                  type: String,
                  default: "sample"
              },
                date: {
                  type: Date,
                  default: ''
              },
                content: {
                  type: String,
                  default: "sample"
              },
                    headline: {
                    type: String,
                    default: "heading"
              }                   
              }
              ]        
})

let rootPosts = mongoose.model('root_user_posts', PostSchema)
module.exports = rootPosts