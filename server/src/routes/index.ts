import { Router } from 'express';

import appointmentsRouters from './appointments.routes';
import usersRouters from './users.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouters);
routes.use('/users', usersRouters);
routes.use('/sessions', sessionsRoutes);

export default routes;
