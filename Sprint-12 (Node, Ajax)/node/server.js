import express from 'express';
import moment from 'moment';

const app = express();
const PORT = process.env.PORT ?? 3000;
const args = process.argv;


app.get('/', (req, res) => {
  res.send()
});

app.listen(PORT, () => {
  console.log('Starting');
  console.log(`Server is listening on ${PORT}`);

  const getTime = setInterval(() => {
    let time = new Date();
    time = moment().format('DD.MM.YYYY, h:mm:ss');
    console.log(time);
  }, args[3]);

});