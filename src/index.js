
import ReactDOM from 'react-dom/client';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home'
import "./index.css"
import BlogView from './views/ProductView/ProductView';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/product/:id',
        element:<BlogView/>
    }
    
])
root.render(<h1>Blog App</h1>);
root.render(<RouterProvider router={router}/>);


