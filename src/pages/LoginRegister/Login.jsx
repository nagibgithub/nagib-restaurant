import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div>
                <Link to={'/'} className="btn">Home</Link>
            </div>
            <div>
                this is login form
            </div>
            <div>
                <Link to={'/register'} className="">If you have no ID, Creat in ID</Link>
            </div>
        </div>
    );
};

export default Login;