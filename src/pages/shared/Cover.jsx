import './Cover.css';

const Cover = ({ img, title }) => {
    return (
        <>
            <div className={`h-screen bg-cover bg-fixed flex justify-center items-center`} style={{backgroundImage: `url(${img})`}}>
                <div className='flex w-2/3 h-2/3 text-white justify-center items-center bg-black bg-opacity-60'>
                    <h1 className="mb-5 text-5xl font-bold uppercase text-center">{title}</h1>
                </div>
            </div>
        </>
    );
};

export default Cover;