if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb+srv://juanmillord:Jabanico17@vidjot-dev-urdvw.mongodb.net/test?retryWrites=true&w=majority'
  }
} else {
  module.exports = {mongoURI: "mongodb://localhost/vidjot-dev"}
}
