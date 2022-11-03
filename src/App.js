import Navbar from './Navbar';
import Home from './Home';
import { createBrowserRouter,RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <RouterProvider router={router} />
      </div>
      
    </div>
  );
}

export default App;
