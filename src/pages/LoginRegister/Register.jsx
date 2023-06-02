import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div>
                <Link to={'/'} className="btn">Home</Link>
            </div>
            this is register form
            <div>
                <Link to={'/login'} className="">Already have an Id, Login plz</Link>
            </div>
        </div>
    );
};

export default Register;