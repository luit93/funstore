import {
  createBrowserRouter,RouterProvider,Outlet
} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Categories from "./pages/Categories/Categories";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import "./App.scss"
const Layout = ()=> {
  return (
    <div className="app">
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
      {
      path:"/categories/:id",
      element:<Categories/>
      },
      {
      path:"/products/:id",
      element:<Product/>
      },
    ]

  },


])

function App() {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
