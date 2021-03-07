const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        let newCollection = []
        newCollection.push(collection.forEach( c => {callback(c)}))
      } else {
        let newCollection = {}
        newCollection.push(collection.forEach( c => {callback(c)}))
      }
      return collection
    },

    map: function(collection, callback) {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
