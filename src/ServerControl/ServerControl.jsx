import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";

const ServerControl = () => {
    const [errorMesage, setErrorMessage] = useState('');

    const [getImageData, setImageData] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-seven.vercel.app/banner_image').then(res => res.json()).then(data => setImageData(data));
    }, []);


    const handleFormSubmit = event => {
        setErrorMessage('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const image_url = form.image.value;
        const imageData = { name, image_url, category };
        // console.log(imageData);


        fetch('https://bistro-boss-server-seven.vercel.app/banner_image', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(imageData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('data is posted successfully');
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            });
    };




    return (
        <div className="w-full border border-blue-500">

            <Link to={'/'}><button className="btn">Go to Home</button></Link>


            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-400 mx-auto">
                <form onSubmit={handleFormSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label" htmlFor="name">Image Name:</label>
                        <input className="input input-bordered" type="text" name="name" id="name" placeholder="Image Name" required />
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="image">Image URL:</label>
                        <input className="input input-bordered" type="url" name="image" id="image" placeholder="Image URl" required />
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="image">Image Category:</label>
                        <select name="category" className="select w-full" required>
                            <option disabled>Select a Category</option>
                            <option>Menu</option>
                            <option>Banner</option>
                            <option>Category</option>
                            <option>others</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                    <h1 className="text-red-600 text-xl font-bold">{errorMesage}</h1>
                </form>
            </div>














            <div className="flex flex-wrap gap-4">
                {
                    getImageData.map(pd => <ImageCard key={pd._id} image={pd}></ImageCard>)
                }
            </div>

        </div >
    );
};

export default ServerControl;