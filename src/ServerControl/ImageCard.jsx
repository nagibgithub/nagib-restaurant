import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from 'sweetalert';

const ImageCard = ({ image }) => {



    const {
        _id,
        name,
        image_url,
        category
    } = image

    const handleDelete = id => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:3000/banner_image/${id}`, { method: 'DELETE' }).then(res => res.json()).then(data => {
                        console.log(data);
                    });
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });



    };

    return (
        <div className="mx-auto border pt-5 rounded-2xl shadow-xl shadow-[#000000]">
            <img className="w-32 mx-auto" src={image_url} alt="" />
            <div>
                <h1 className="text-center">{name}</h1>
                <h1 className="text-center">{category}</h1>
                <div>
                    <button className="m-3 btn btn-warning"><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button onClick={() => handleDelete(_id)} className="m-3 btn btn-error hover:bg-white btn-circle"><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;