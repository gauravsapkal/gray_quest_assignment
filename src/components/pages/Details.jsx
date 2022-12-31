import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setuserdetails } from "../../Redux/userListSlice";
import { Atom } from "react-loading-indicators";
import Errorpage from "./Errorpage";
import { setLoading } from "../../Redux/LoadingSlice";

const Details = () => {
    const { id } = useParams();

    const userDetails = useSelector((state) => state.users.userDetails)
    const loading = useSelector((state) => state.loader.loading)
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getdata = () => {
            dispatch(setLoading(true));
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response) => {
                    dispatch(setuserdetails(response.data));
                })
                .catch((error) => {
                    console.log(error);
                    setError(true);
                })
                .then(() => {
                    dispatch(setLoading(false));
                });
        }
        getdata();
        // eslint-disable-next-line
    }, [])

    
    if(id < 1 || id > 10)
    return <Errorpage/>


    if(error)
    return <Errorpage/>

    return (

        <div className="details_homepage">
            {
                loading ? <div className="loading"><Atom size="large" color='#eaffea'/></div> : <div className="main_detail_parent">


                    <div className="user_heading">

                        <div className="user-heading_image">
                            {userDetails.name.split(" ")[0] === 'Mrs.' || userDetails.name.split(" ")[0] === 'Mr.' ? userDetails.name.split(" ")[1][0] : userDetails.name.split(" ")[0][0]}
                            {userDetails.name.split(" ")[0] === 'Mrs.' || userDetails.name.split(" ")[0] === 'Mr.' ? userDetails.name.split(" ")[2][0] : userDetails.name.split(" ")[1][0]}
                        </div>


                        <h1 className="user_heading_name">Welcome, {userDetails.name}</h1>

                        <div className="details_username_email">
                            <p><i className="fa-regular fa-user"></i> {userDetails.username}</p>
                            <p><i className="fa-regular fa-envelope"></i> {userDetails.email}</p>
                            <p><i className="fa-solid fa-phone"></i> {userDetails.phone}</p>
                        </div>

                        <div className="address_details">
                            <p><i className="fa-solid fa-city"></i> {userDetails.address.street}, {userDetails.address.suite}, {userDetails.address.city},
                                zip - {userDetails.address.zipcode}
                            </p>
                        </div>
                    </div>


                    <div className="company_details">
                        <h3>- Compant Details -</h3>
                        <p><i className="fa-solid fa-industry"></i> {userDetails.company.name}</p>
                        <p>" {userDetails.company.catchPhrase} "</p>
                        <p>" {userDetails.company.bs} "</p>
                        {/* eslint-disable-next-line */}
                        <p>Website - <a href="#">{userDetails.website}</a></p>
                    </div>

                    <button className="goto_user_page" onClick={()=>{navigate('/')}}
                    ><i className="fa-solid fa-backward"></i> Back</button>
                </div>
            }
        </div>
    )
}

export default Details;