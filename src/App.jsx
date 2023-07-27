import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./styles/App.css";

// Import Pages
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Signup from "./components/pages/Signup";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </Layout>
    );
}

export default App;
