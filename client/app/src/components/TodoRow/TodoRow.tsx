import React, { FC } from 'react'
import { ITodo } from '../../models/ITodo'
import { api } from '../../api'

const TodoRow: FC<{ item: ITodo, getTodos: Function }> = ({ item, getTodos }) => {
    async function complatedTodo() {
        try {
            await api.editTodo({ _id: item._id })
        } catch (error) {
            throw new Error('error updating')
        } finally {
            getTodos()
        }
    }
    return (

        <tr className="bg-white border-b hover:bg-gray-50 ">
            <td className="px-6 py-4">
                {item.description}
            </td>
            <td className="px-6 py-4">
                {item?.created_at}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    <div className={item.completed ? "h-2.5 w-2.5 rounded-full bg-green-500 me-2" : "h-2.5 w-2.5 rounded-full bg-red-500 me-2"}></div>
                    {item.completed ? 'Готово' : 'В Архиве'}
                </div>
            </td>

            <td className="px-6 py-4">
                <button onClick={complatedTodo} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">    {!item.completed ? 'Готово' : 'В Архив'}</button>

            </td>
        </tr>

    )
}

export default TodoRow
