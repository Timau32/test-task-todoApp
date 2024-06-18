import { CancelToken } from "axios";

import { instance } from ".";
import { IEditTodo, ITodo, ITodoDto } from "../models/ITodo";

const getTodo = (sourceToken?: CancelToken) => {
    return instance.get<ITodo[]>(`/getTasks`, { cancelToken: sourceToken })
}

const createTodo = (data: ITodoDto, sourceToken?: CancelToken) => {
    return instance.post(`/addTask`, { ...data }, { cancelToken: sourceToken })
}
const editTodo = (data: IEditTodo, sourceToken?: CancelToken) => {
    return instance.patch(`/completed`, { ...data }, { cancelToken: sourceToken })
}
const endpoints = {
    createTodo,
    getTodo,
    editTodo
};


export default endpoints;
