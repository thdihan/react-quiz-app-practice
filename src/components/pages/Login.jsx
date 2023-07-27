import { Link } from "react-router-dom";
import classes from "../../styles/Login.module.css";
import Form from "../Form";
import Button from "../FormComponents/Button";
import TextInput from "../FormComponents/TextInput";
import Illustration from "../Illustration";
export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={classes.login}>
                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                    />

                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon="lock"
                    />
                    <Button>
                        <span>Submit now</span>
                    </Button>

                    <div className="info">
                        Don&apos;t have an account?{" "}
                        <Link to="/signup">Signup</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
