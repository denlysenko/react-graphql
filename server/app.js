const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb://admin:password@ds021016.mlab.com:21016/graphql-playlist');
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Express listening on port 4000');
})