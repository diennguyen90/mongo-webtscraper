
module.exports = (Schema, model) => model('Article', new Schema({
    title: {
        type: String
      },
    link: {
      type: String
    }
}))