import axios from 'axios';
import React, { FC, useState } from 'react'
import { api } from '../../api';
interface Props {
    setIsModalOpen: Function,
    getTodos: Function
}
const AddTodo: FC<Props> = ({ setIsModalOpen, getTodos }) => {
    const [task, setTask] = useState('')
    async function addTodo() {
        try {
            const res = await api.createTodo({ description: task })
        } catch (error) {
            console.error('Error making POST request:', error);
        } finally {
            setIsModalOpen(false);
            getTodos()
        }
    }
    return (
        <>
            <h2 className="text-xl font-bold mb-4">add task</h2>
            <div className="mb-6">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Default input</label>
                <input onChange={(e) => setTask(e.target.value)} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500" />
            </div>
            <button
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
                onClick={() => setIsModalOpen(false)}
            >
                Close
            </button>
            <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={addTodo}
            >
                Create
            </button>
        </>
    )
}

export default AddTodo
