import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../../Redux/LoadingSlice";
import Button from "../../atoms/button/Button";
import Userimage from "../../atoms/userimage/Userimage";
import Body from "../../molecules/body/Body";
import Heading from "../../molecules/heading/Heading";


const Card = ({ myclass, elem }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className={myclass}>

                <div className="carddata">

                    <Userimage myclass="user_image"
                        name1={elem.name.split(" ")[0] === 'Mrs.' || elem.name.split(" ")[0] === 'Mr.' ? elem.name.split(" ")[1][0] : elem.name.split(" ")[0][0]}
                        name2={elem.name.split(" ")[0] === 'Mrs.' || elem.name.split(" ")[0] === 'Mr.' ? elem.name.split(" ")[2][0] : elem.name.split(" ")[1][0]}
                    />

                    <div className="user_details">

                        <Heading myclass="heading" elem={elem} />

                        <Body myclass="body" elem={elem} />

                        <Button
                            myfun={() => { 
                                dispatch(setLoading(true));
                                navigate(`/${elem.id}`) }}
                            icon_name={<i className="fa-solid fa-circle-info"></i>}
                            name="More Details.."
                            myclass="more_details_button"
                        />
                    </div>
                </div>
            </div>
    )
}


export default Card;