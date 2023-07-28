import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/App.css";

// Import Pages
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Signup from "./components/pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
    return (
        <AuthProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route
                        path="/signup"
                        element={
                            <PublicRoute>
                                <Signup />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/quiz"
                        element={
                            <PrivateRoute>
                                <Quiz />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/result"
                        element={
                            <PrivateRoute>
                                <Result />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Layout>
        </AuthProvider>
    );
}

export default App;
