import express, { json } from 'express';
import morgan from 'morgan';

const app = express();

// importa rutas
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

// middlewares
//mostrar peticiones por consola
app.use(morgan('dev'));
// entender datos json
app.use(json());

// rutas
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;