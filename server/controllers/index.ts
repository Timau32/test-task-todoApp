import { NextFunction } from 'express';
import { ITodo, TypedRequest, TypedResponse } from '../interfaces';
import Todo from '../models';
import ApiError from '../error/ApiEror';

const addTodo = async (req: TypedRequest<ITodo>, res: TypedResponse, next: NextFunction) => {
  if (!req.body.description) {
    return next(ApiError.unprocessableEntity('Поле "description" не может быть пустым'));
  }
  const todoModel = new Todo(req.body);
  const todo = await todoModel.save();
  return res.json(todo);
};

const getTodo = async (req: TypedRequest<ITodo>, res: TypedResponse<ITodo[]>) => {
  const todos = await Todo.find<ITodo>({});
  return res.json(todos);
};

const setCompleteTodo = async (req: TypedRequest<{ _id: string }>, res: TypedResponse) => {
  const todoModel = await Todo.findById(req.body._id);
  todoModel!.completed = true;
  await todoModel?.save();
  return res.json(todoModel);
};

const TodoController = { addTodo, getTodo, setCompleteTodo };
export default TodoController;
