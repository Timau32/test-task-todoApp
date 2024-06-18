import { useEffect, useState } from 'react';
import { api } from './api';
import { AddTodo, Modal, TodoRow } from './components';
import { ITodo } from './models/ITodo';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTodos = async () => {
    try {
      const response = await api.getTodo();
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  //vcv
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => setIsModalOpen(true)}>
        add task
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddTodo getTodos={getTodos} setIsModalOpen={setIsModalOpen} />
      </Modal>
      <br /> <br />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 :text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                Todo
              </th>
              <th scope="col" className="px-6 py-3">
                date
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                edit
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoRow getTodos={getTodos} item={todo} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
