const express = require('express');
const morgan = require('morgan');

//Initializations
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));

//Global Variables

//Routes

//Public

//Sarting the server
app.listen(app.get('port'), () => {
 console.log('Server is Working NOW', app.get('port'));
});
