import { useState } from "react";
import { Link } from "react-router-dom";

const PassTest = () => {

    const [passValue, setPassValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [passLength, setPassLength] = useState(false);
    const [passNumber, setPassNumber] = useState(false);
    const [passAlphabet, setPassAlphabet] = useState(false);
    const [passUppercase, setPassUppercase] = useState(false);
    const [passLowercase, setPassLowercase] = useState(false);

    const handlePass = event => {
        event.preventDefault();
        setErrorMessage('');

        const password = event.target.password.value;
        /(?=.*[A-Z])(?=.*[a-z])(?=^.{8,}$)(?=.*\d)/.test(password) ? setPassValue(event.target.password.value) : setPassValue('');
    };

    const handlePassTest = event => {
        event.preventDefault();
        const password = event.target.value;
        /(?=.*[a-zA-Z])/.test(password) ? setPassAlphabet(true) : setPassAlphabet(false);
        /(?=.*[A-Z])/.test(password) ? setPassUppercase(true) : setPassUppercase(false);
        /(?=.*[a-z])/.test(password) ? setPassLowercase(true) : setPassLowercase(false);
        /(?=^.{8,}$)/.test(password) ? setPassLength(true) : setPassLength(false);
        /(?=.*\d)/.test(password) ? setPassNumber(true) : setPassNumber(false);
    };




    return (
        <>
            <Link to={'/'}><button className="btn btn-primary">Home</button></Link>
            <div className="flex justify-center">
                <form onSubmit={handlePass} className="border-4 p-5 shadow-xl rounded-lg md:w-1/2 border-sky-600 flex flex-col justify-center">
                    <input onChange={handlePassTest} className="border-2 border-black rounded-xl p-5" type="text" placeholder="password" name="password" id="password" />
                    <br />
                    <div>
                        <h1 className="text-xl font-bold text-center">{passValue}</h1>
                        <h1>{errorMessage}</h1>
                    </div>
                    <div className="my-5 text-center text-red-500">
                        <h1 className="font-bold" style={{ color: `${passAlphabet ? "green" : "red"}` }}>Alphabet: {passAlphabet ? "Ok" : "Not Ok"} </h1>
                        <h1 className="font-bold" style={{ color: `${passUppercase ? "green" : "red"}` }}>UpperCase: {passUppercase ? "Ok" : "Not Ok"} </h1>
                        <h1 className="font-bold" style={{ color: `${passLowercase ? "green" : "red"}` }}>LowerCase: {passLowercase ? "Ok" : "Not Ok"}</h1>
                        <h1 className="font-bold" style={{ color: `${passNumber ? "green" : "red"}` }}>Number: {passNumber ? "Ok" : "Not Ok"}</h1>
                        <h1 className="font-bold" style={{ color: `${passLength ? "green" : "red"}` }}>Pass Length 8 Characture: {passLength ? "Ok" : "Not Ok"}</h1>
                    </div>
                    <input className="btn btn-primary" type="submit" value="submit" />
                </form>

            </div>
        </>
    );
};

export default PassTest;