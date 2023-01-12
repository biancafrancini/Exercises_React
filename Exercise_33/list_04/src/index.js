import ReactDOM from 'react-dom/client';
import { TodoList} from './TodoList';

const todosComponent = <TodoList />;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(todosComponent);

