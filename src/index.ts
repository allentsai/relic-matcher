import * as express from 'express';
const app = express()
const port = 3000

// View Engine Setup - this is what allows views to "magically" work
app.set('views', './src/views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
