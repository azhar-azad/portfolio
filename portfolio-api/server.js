const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const bioRouter = require('./routes/bio.router');
const educationRouter = require('./routes/education.router');
const recommendationRouter = require('./routes/recommendation.router');
const skillRouter = require('./routes/skill.router');
const socialLinkRouter = require('./routes/socialLink.router');
const workExperienceRouter = require('./routes/workExperience.router');

// const db_url = process.env.MONGO_URL_ATLAS;
const db_url = process.env.MONGO_URL_LOCAL;
mongoose.connect(db_url, {
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully!');
});

const app = express();
const APP_URL = process.env.APP_URL_LOCAL || 'localhost';
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('backend-api is online');
});

app.use('/bios', bioRouter);
app.use('/educations', educationRouter);
app.use('/recommendations', recommendationRouter);
app.use('/skills', skillRouter);
app.use('/socialLinks', socialLinkRouter);
app.use('/workExperiences', workExperienceRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://${APP_URL}:${PORT}`);
});
