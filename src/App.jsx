import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import AppLayout from './component/layout/AppLayout';
import Home from './component/page/Home';
import Product from './component/page/Product';
import Card from './component/page/Card';
import Contact from './component/page/Contact';

function App() {
  const routerList = createBrowserRouter ([
    {
      element : <AppLayout />,
      children : [
        {
          path    : '/',
          element : <Home />
        },{
          path    : '/product',
          element : <Product />
        },{
          path    : '/card',
          element : <Card />
        },{
          path    : '/contact',
          element : <Contact />
        }
      ]
    }
  ])

  return (
    <>
      <div>
        <RouterProvider router={routerList}/>
      </div>
    </>
  )
}

export default App;
