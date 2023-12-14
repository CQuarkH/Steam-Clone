import "./App.css";
import { adminRoutes, userRoutes } from "./routes/routes.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Router>
        <Layout>
          <Routes>
            {adminRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}

            {userRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
