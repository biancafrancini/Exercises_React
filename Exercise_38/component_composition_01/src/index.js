import ReactDom from 'react-dom/client';
import { App } from './App';

const Container = <App />;

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(Container);