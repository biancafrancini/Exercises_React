import ReactDOM from 'react-dom/client';
import { App } from './App';

const todosComponent = <App />;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(todosComponent);

