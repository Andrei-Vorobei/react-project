import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import { App } from "@/components/App";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { RoutesApp } from "./Routes";

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'posts',
        element: <Posts />,
      },
      {
        path: 'about',
        element: <About />
      },
    ]
  },
]);

// container.render(
//   <BrowserRouter>
//     <RoutesApp />
//   </BrowserRouter>
// );
container.render(<RouterProvider router={router} />);