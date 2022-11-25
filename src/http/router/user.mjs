
import Router from "../server/Router.mjs";
import UserController from "../controller/user.mjs";

const controller = new UserController();

const router = new Router();
router.get('/users/:id', controller.get.bind(controller));
router.get('/users', controller.list.bind(controller));
router.post('/users', controller.create.bind(controller));
router.put('/users/:id', controller.update.bind(controller));
router.delete('/users/:id', controller.delete.bind(controller));

export default router;
