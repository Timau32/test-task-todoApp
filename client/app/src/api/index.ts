import axios from "axios";
import todos from './todos'

const instance = axios.create({
    // @ts-ignore
    baseURL: window.REACT_APP_SERVER_API !== 'REPLACE_REACT_APP_SERVER_API' ? window.REACT_APP_SERVER_API : process.env.REACT_APP_SERVER_API || 'http://localhost:8000/api',

})
const api = {
    ...todos
}
export { instance, api }