import ReactDOM from 'react-dom/client';
import { LogicTodos } from './LogicTodos';

const todosComponent = <LogicTodos />;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(todosComponent);

