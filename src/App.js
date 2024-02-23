import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      <Body />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default App;
