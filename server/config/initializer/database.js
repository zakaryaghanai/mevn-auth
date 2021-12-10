const mongoose = require('mongoose');

const url = `mongodb+srv://zakariyacluster.qxbbl.mongodb.net/testdb?retryWrites=true&w=majority`;

//const url = `mongodb+srv://zakariyaghanai:<password>@zakariyacluster.qxbbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


const db_configuration = {
  dbName: 'testdb',
  user: 'zakariyaghanai',
  pass: 'mqf5ceMoyDVEwcOQ',
  useUnifiedTopology: true, 
  useNewUrlParser: true
}
mongoose.connect(url, db_configuration);

const db = mongoose.connection;

module.exports = db;