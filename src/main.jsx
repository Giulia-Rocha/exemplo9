import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Produto from './routes/Produto/Produto.jsx'

const router = createBrowserRouter([{

  path: "/", element: <App/>,

  children:[
    {path:"/", element:<Home/>},
    {path:"/produtos", element:<Produto/>}
  ]
  
}]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
