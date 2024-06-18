export interface ITodo {
    _id: string,
    description: string,
    completed: boolean,
    created_at: string,
}
export interface ITodoDto {
    description: string,
}
export interface IEditTodo {
    _id: string,
}