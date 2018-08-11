import app from './app';

// app will listen on this port
const PORT = 3000;

// start application
app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
})
