
import Server from './http/server/index.mjs';
import UserRouter from './http/router/user.mjs';

const app = new Server();
app.use('/api', UserRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listen port ${port}, CTRL + C to shutdown.`);
});
