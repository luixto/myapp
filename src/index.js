const express = require('express');
const morgan =  require('morgan');
const exphbs =  require('express-handlebars');
const path =    require('path');
//Initializations
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultlayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), 
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');


//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global Variables
app.use((req, res, next) => {

    next()
});

//Routes
app.use(requiere('./routes'));
app.use(requiere('./routes/authentication'));
app.use('links', requiere('./routes/links'));


//Public

//Sarting the server
app.listen(app.get('port'), () => {
 console.log('Server is Working NOW', app.get('port'));
});
