import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Login.module.css";
import Form from "./Form";
import Button from "./FormComponents/Button";
import TextInput from "./FormComponents/TextInput";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login.");
        }
    }
    return (
        <Form className={classes.login} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />

            <TextInput
                type="password"
                placeholder="Enter password"
                icon="lock"
                required
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <Button type="submit" disabled={loading}>
                <span>Submit now</span>
            </Button>
            {error && <p className="error">{error}</p>}
            <div className="info">
                Don&apos;t have an account? <Link to="/signup">Signup</Link>{" "}
                instead.
            </div>
        </Form>
    );
}
