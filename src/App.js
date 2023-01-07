import "./App.css";
import Login from "./components/login/Login";
import MainNav from "./components/MainNav";
import Header from "./components/User/Header";
import User from "./components/User/User";
import NewUsers from "./components/User/new-users/NewUsers";
import Slider from "./components/Carousel/Slider";
import MainSlider from "./components/Carousel/MainSlider";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainNav />}>
      <Route index element={<Navigate to={"/design-1"} />} />

      <Route path={"/design-1"} element={<Login />} />

      <Route path="/design-2/*" element={<User />}>
        {/* I make it instantly navigate the available route since there are no other route available :D */}
        <Route index element={<Navigate to={"new-users"} />} />
        <Route path="new-users" element={<NewUsers />} />
      </Route>
      <Route path="design-3" element={<MainSlider />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
