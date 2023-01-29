import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
];

const App = () => {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
