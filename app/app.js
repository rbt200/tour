import express from 'express';
import chalk from 'chalk';
import reload from 'reload';
import dataFile from './data/db.json';
import dataBlog from './data/blog.json';
const io = require('socket.io')();

const app = express();

app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('appData', dataFile);
app.set('blogData', dataBlog);

app.locals.siteTitle = 'Tour';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/login'));
app.use(require('./routes/blog'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

const server = app.listen(app.get('port'), function() {
    console.log(chalk.green(`Go to http://localhost:${app.get("port")}`)); // eslint-disable-line no-console
});

io.attach(server);
io.on('connection', function(socket) {
    socket.on('postMessage', function(data) {
        io.emit('updateMessages', data);
    });
});

reload(server, app);