import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home, Job, Blog, About, Login, Signup, Profile, JobDiscription, } from './components/index.js'



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
    {
      path: "/profile",
      element: (<Profile />),
    },
    {
      path: "/discription/:id",
      element: (<JobDiscription />),
    },

  ])




  return (
    <>
      <RouterProvider router={userRouter} />
    </>
  )
}

export default App
