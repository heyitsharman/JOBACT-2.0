import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import User from './models/Users.js'; // Adjust path if needed
import bcrypt from 'bcrypt';



const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const jobs = JSON.parse(fs.readFileSync(path.join(__dirname, 'jobs.json'), 'utf8'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', { active: 'home' });
});

app.get('/jobs', (req, res) => {
  res.render('jobs', { active: 'jobs', jobs }); 
});

app.get('/signin', (req, res) => {
  res.render('signin', { isSignIn: true });
});

app.get('/register', (req, res) => {
  res.render('signin', { isSignIn: false });
});


app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.send("No such user found.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send("Incorrect password.");
    }

    // Optional: Set session or token here
    res.redirect('/');

  } catch (err) {
    console.error(err);
    res.status(500).send("Sign-in failed.");
  }
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.send("User already exists. Try logging in.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.redirect('/signin');

  } catch (err) {
    console.error(err);
    res.status(500).send("Registration failed.");
  }
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/home', (req, res) => {
  res.render('home', { companies, blogs });
});

app.get('/about', (req, res) => {
  res.render('about',{ active: 'about' });
});

app.use((req, res, next) => {
  res.status(404).render('404');
});

app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack);
  res.status(500).send('Something went wrong! Please try again later.');
});

mongoose.connect('mongodb://localhost:27017/usersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



