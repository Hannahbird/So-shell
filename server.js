const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:admin@hashslash.jxy2xxo.mongodb.net/so-shell', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose
    .set('debug', true)
    .set('toJSON', {virtuals: true, getters: true});

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
