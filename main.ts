import express from "express";

const app = express();
const port = 1234;

const quotes = [
  {
    id: 1,
    quote: "This above all: to thine own self be true.",
    author: "William Shakespeare",
    age: 100,
  },
  {
    id: 2,
    quote: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill",
    age: 100,
  },
  {
    id: 3,
    quote:
      "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    age: 100,
    
  },
  {
    id: 4,
    quote: "We must not allow other peoples limited perceptions to define us.",
    author: "Virginia Satir",
    age: 100,
  },
  {
    id: 5,
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
    age: 100,
  },
  {
    id: 6,
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    age: 100,
  },
]; 
app.get('/', (_req, res) => {
    res.send('Check the /quotes endpoint')
  })

app.get('/quotes', (_req, res) => {
    res.send(quotes)
  })

app.listen(port, () => {
  console.log(`Yeapyyy! http://localhost:${port}`);
});