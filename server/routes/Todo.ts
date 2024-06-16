import { Router } from 'express';
import TodoController from '../controllers';

const todoRouter = Router();

todoRouter.post('/addTask', TodoController.addTodo);
todoRouter.get('/getTasks', TodoController.getTodo);
todoRouter.patch('/completed', TodoController.setCompleteTodo);

export default todoRouter;
