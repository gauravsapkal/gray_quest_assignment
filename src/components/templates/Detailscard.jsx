import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setLoading } from "../../Redux/LoadingSlice";
import Errorpage from "../pages/Errorpage";
import { setuserdetails } from "../../Redux/userListSlice";
import Detailsheading from "../molecules/detailsheading/Detailsheading";
import Detailsbody from "../molecules/detailsbody/Detailsbody";
import Button from "../atoms/button/Button";
import Loader from "../atoms/loading/Loader";


const Detailscard = ({ myclass }) => {
    const { id } = useParams();
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

    if (error || id < 1 || id > 10)
        return <Errorpage />


    return (
        <div className={myclass}>
            
            {
                loading ? <Loader myclass="loading"/> : <div className="main_detail_parent">


                    <Detailsheading myclass="user_heading" />

                    <Detailsbody myclass="company_details"/>

                    <Button myclass="goto_user_page" name="Back"
                    myfun={() => { navigate('/') }}
                    icon_name={<i className="fa-solid fa-backward"></i>}
                    />
                </div>
            }

        </div>
    )
}

export default Detailscard;