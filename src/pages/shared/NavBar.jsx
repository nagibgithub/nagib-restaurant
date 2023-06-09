import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

    const { loading, user, logOut } = useContext(AuthContext);
    console.log(loading, user);

    const handleLogout = () => logOut();

    const navBars = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "Contact Us", path: "/contact" },
        { id: 3, title: "Dashboard", path: "/deshboard" },
        { id: 4, title: "Our Menu", path: "/menu" },
        { id: 5, title: "Our Shop", path: "/shop" }
    ];

    const navItems = <>
        {navBars.map(item => <NavLink className={({ isActive, isPending }) => isActive ? "activeNav" : isPending ? "pendingNav" : "in-active"} key={item.id} to={item.path}><li>{item.title}</li></NavLink>)}
    </>

    return (
        <>
            <nav className="navbar fixed z-10 bg-opacity-60 container bg-no-repeat mx-auto bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                {
                                    user.photoURL ?
                                        <>
                                        <img className="w-16 rounded-full border-4 border-sky-500" src={user.photoURL} alt="" />
                                        <button onClick={handleLogout} className="btn-n w-full flex justify-center">Log Out</button>
                                        </>
                                        :
                                        <><FontAwesomeIcon icon={faUser} /></>
                                }
                            </>
                            :
                            <>
                                <Link to={'/login'} className="btn">Login</Link>
                            </>
                    }
                </div>
            </nav >
        </>
    );
};

export default NavBar;