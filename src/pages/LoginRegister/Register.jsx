import { faEye, faEyeSlash, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import GoogleButton from "./GoogleButton";

const Register = () => {

    const [showHide, setShowHide] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const handleShowPass = () => setShowHide(!showHide);
    // const [passLength, setPassLength] = useState('');
    // const [passNumber, setPassNumber] = useState('');
    // const [passAlphabate, setPassAlphabate] = useState('');
    // const [passUppercase, setPassUppercase] = useState('');
    // const [passLowercase, setPassLowercase] = useState('');

    const captchaRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleCaptcha = () => {
        const value = captchaRef.current.value;
        validateCaptcha(value) ? setDisabled(false) : setDisabled(true);
    };


    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const rePassword = form.rePassword.value;
        const imageUrl = form.imageUrl.value;

        if (password !== rePassword) {
            alert('Password is not matched');
            return;
        } else if (password.length < 8) {
            alert('password must be atleast 8 character');
            return;
        } else if (!/(?=.*[A-Z].*[a-z])/.test(password)) {
            alert('atleast one UpperCase and one LowerCase Letter');
            return;
        }

        // /(?=.*[A-Z].*[a-z])/.test(password)?



        // password === rePassword ? console.log(true) : console.log(false);



        const formData = { name, email, password, imageUrl, rePassword };
        console.log(formData);
    };


    return (
        <div>
            <div>
                <Link to={'/'} className="btn">Home</Link>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid md:grid-cols-3 justify-center items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="max-w-xl w-full mx-auto col-span-2">
                        <div className="card w-full shadow-2xl bg-sky-300">


                            {/* form start */}
                            <form onSubmit={handleForm} className="card-body md:grid md:grid-cols-2">


                                {/* name */}
                                <div className="form-control">
                                    <label className="label" htmlFor="name">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Full Name" name="name" id="name" className="input input-bordered" required />
                                </div>



                                {/* email */}
                                <div className="form-control">
                                    <label className="label" htmlFor="email">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" placeholder="example@domain.com" name="email" id="email" className="input input-bordered" required />
                                </div>



                                {/* Image URL */}
                                <div className="form-control md:col-span-2">
                                    <label className="label" htmlFor="imageUrl">
                                        <span className="label-text">Upload your image URL</span>
                                    </label>
                                    <input type="url" placeholder="https://example.com" name="imageUrl" id="imageUrl" className="input input-bordered" required />
                                </div>



                                {/* password */}
                                <div className="form-control">
                                    <label className="label" htmlFor="password">
                                        <span className="label-text">Password</span><span><FontAwesomeIcon icon={showHide ? faEye : faEyeSlash} /></span>
                                    </label>
                                    <input type={showHide ? "text" : "password"} autoComplete="new-password" placeholder="Min 8 Character" name="password" id="password" className="input input-bordered" required />
                                </div>



                                {/* re-type password */}
                                <div className="form-control">
                                    <label className="label" htmlFor="rePassword">
                                        <span className="label-text">Re Type Your Password</span><span><FontAwesomeIcon icon={showHide ? faEye : faEyeSlash} /></span>
                                    </label>
                                    <input type={showHide ? "text" : "password"} placeholder="Same as above password" name="rePassword" id="rePassword" className="input input-bordered" required />
                                </div>

                                {/* show password */}
                                <div className="form-control mt-3 col-span-2">
                                    <label className="cursor-pointer flex gap-3 items-center">
                                        <input type="checkbox" onClick={handleShowPass} className="checkbox checkbox-primary" />
                                        <span className="label-text">Show the Password</span>
                                    </label>
                                </div>


                                {/* Captcha */}
                                <div className="form-control">
                                    <label className="label" htmlFor="captcha">
                                        <LoadCanvasTemplate />
                                    </label>
                                </div>
                                <div className="flex">
                                    <input type="text" ref={captchaRef} placeholder="Type Captcha Here" name="captcha" id="captcha" className="input input-bordered" required />
                                    <div onClick={handleCaptcha} className="btn btn-square"><FontAwesomeIcon icon={faSync} /></div>
                                </div>


                                {/* error message */}
                                <div className="md:col-span-2">
                                    <h1>{disabled ? "Captcha is not matched" : "matched"}</h1>
                                </div>



                                {/* submit button */}
                                <div className="form-control mt-6 md:col-span-2">
                                    <input type="submit" className="btn btn-primary" value={'Submit'} disabled={disabled} />
                                </div>

                            </form>

                            {/* google login */}
                            <div>
                                <GoogleButton></GoogleButton>
                            </div>



                            {/* login link */}
                            <div className="w-full flex justify-center">
                                <Link to={'/login'} className="mx-auto hover:underline hover:text-blue-800 text-lg font-bold p-3">Already Registered? Go to Log In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;