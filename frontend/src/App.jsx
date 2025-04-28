import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {Navbar,Home,Job,Blog,About,Login,Signup} from './components/index.js'


function App() {

  const userRouter = createBrowserRouter([
    {
      path: "/",
      element: (<Home />),
    },
    {
      path: "/job",
      element: (<Job />),
    },
    {
      path: "/blog",
      element: (<Blog />),
    },
    {
      path: "/about",
      element: (<About />),
    },
    {
      path: "/login",
      element: (<Login />),
    },
    {
      path: "/signup",
      element: (<Signup />),
    },

  ])




  return (
    <>
        <RouterProvider router={userRouter} />
    </>
  )
}

export default App
