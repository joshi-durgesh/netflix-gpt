import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

export default App;
