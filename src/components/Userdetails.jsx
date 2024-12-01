import { useLoaderData, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Userdetails = () => {
    const user = useLoaderData();

    //we can catch the params and use them though it is not necessary right in this project.
    const params = useParams();
    console.log(params);


    //note starts here
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
        //1 level pichone jaw
    };

    console.log(user);
    const {name, email, phone, website, username} = user; 
    return (
        <div className="w-6/12 mx-auto p-6 border border-red-500 rounded-lg mt-10">
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
            <h2>Website: {website}</h2>
            <h2>Username: {username}</h2>

            <button onClick={handleGoBack} className='bg-red-200 border rounded-md px-5 py-2 m-5 hover:shadow-lg hover:border-red-600'>Back</button>
        </div>
    );
};

export default Userdetails;