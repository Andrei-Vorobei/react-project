import { FunctionComponent, JSX } from "react";
import { App } from "./components/App";
import { About } from "./pages/About";
import { Posts } from "./pages/Posts";
// import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { PostPage } from "./pages/PostPage";
import { Login } from "./pages/Login";

type RoutType = {
  path: string;
  element: JSX.Element;
  ErrorBoundary?: FunctionComponent;
  children?: RoutType[];
}

const privateRoutes = [
  {
    path: 'posts/:id',
    element: <PostPage />,
  },
  {
    path: 'posts',
    element: <Posts />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: '*',
    element: <Posts />
  },
];

const publicRoutes = [
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Login />
  },
];

export const routesApp = (isAuth: boolean) => {

  const routes: RoutType[] = [
    {
      path: "/",
      element: <App />,
      ErrorBoundary: Error,
      children: []
    },
  ];

  if (isAuth) {
    routes[0].children.unshift(...privateRoutes);
  } else {
    routes[0].children.unshift(...publicRoutes);
  }

  
  return routes;
};