
import './App.css';
import { RouterProvider } from 'react-router-dom'
import Routes from './router/index'

export default function App() {
  return (
    <div>
      <RouterProvider router={Routes} />
    </div>
  );
}
