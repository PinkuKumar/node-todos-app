const mongoose = require('mongoose')

//connect to db
mongoose.connect('mongodb://localhost:27017/TodoApp');
//tell mongoose which Promise lib to use - here we are using the one that comes wuth the language
mongoose.Promise = global.Promise;

// syntax in long version
// module.exports = {
//   mongoose: mongoose     //mongoose propery is exporting the mongoose const set up here)
// };

//ES6 syntax - declaring a mongoose property that is being exported.
module.exports = {mongoose};
