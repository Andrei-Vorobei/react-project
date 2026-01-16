import { Route, Routes } from "react-router";
import { App } from "./components/App";
import { About } from "./pages/About";
import { Posts } from "./pages/Posts";

export const RoutesApp = () => {
  
  return (
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Route>
    </Routes>
  );
};