import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routesApp } from "./Routes";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);


const Index: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      setIsAuth(true);
    }
  }, []);
  
  const router = createBrowserRouter(routesApp(isAuth));

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

container.render(<Index />);