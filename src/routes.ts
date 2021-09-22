import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createAuthenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentController = new ListUserSendComplimentsController();
const listUserReceiveComplimentController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

//Posts e auth
router.post("/users", createUserController.handle); //passa direto o controller e não request/response (MVC = DDD)
router.post("/tags", ensureAuthenticate, ensureAdmin, createTagController.handle); //passa o middleware entre as rotas
router.post("/login", createAuthenticateUserController.handle);
router.post("/compliments", ensureAuthenticate, createComplimentController.handle);

//Getters
router.get("/users/compliments/send", ensureAuthenticate,listUserSendComplimentController.handle)
router.get("/users/compliments/receive",ensureAuthenticate , listUserReceiveComplimentController.handle)

router.get("/tags",ensureAuthenticate, listTagsController.handle)

router.get("/users",ensureAuthenticate, listUsersController.handle)

//Ordem do middleware primeiro tem de verificar se o usuário está logado (válido)
//Depois verificar se é um admin

export { router }