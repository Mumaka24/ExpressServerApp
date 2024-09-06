import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import names from './routes/names.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

//set up static folder
app.use(express.static(path.join(__dirname, 'public')));


//ROUTES
app.use('/api/names', names);

app.use((req, res, next) => {
    const error = newError('Not Found');
    error.status = 404;
    next(error);
});

// Error handler
app.use(errorHandler);
app.use(notFound);
app.listen(port, () => console.log(`Server is running on port ${port}`));