import { useSelector } from "react-redux";
import H1tag from "../../atoms/h1tag/H1tag";
import Para from "../../atoms/para/Para";
import Userimage from "../../atoms/userimage/Userimage";


const Detailsheading = ({ myclass }) => {
    const userDetails = useSelector((state) => state.users.userDetails)

    return (
        <div className={myclass}>

            <Userimage myclass="user-heading_image"
                name1={userDetails.name.split(" ")[0] === 'Mrs.' || userDetails.name.split(" ")[0] === 'Mr.' ? userDetails.name.split(" ")[1][0] : userDetails.name.split(" ")[0][0]}
                name2={userDetails.name.split(" ")[0] === 'Mrs.' || userDetails.name.split(" ")[0] === 'Mr.' ? userDetails.name.split(" ")[2][0] : userDetails.name.split(" ")[1][0]}
            />

            <H1tag myclass="user_heading_name" name={`Welcome, ${userDetails.name}`}/>

            <div className="details_username_email">
                <Para icon_name={<i className="fa-regular fa-user"></i>} name={userDetails.username}/>
                <Para icon_name={<i className="fa-regular fa-envelope"></i>} name={userDetails.email}/>
                <Para icon_name={<i className="fa-solid fa-phone"></i>} name={userDetails.phone}/>
            </div>

            <div className="address_details">
                <Para icon_name={<i className="fa-solid fa-city"></i>} 
                name={`${userDetails.address.street}, ${userDetails.address.suite}, ${userDetails.address.city},
                zip - ${userDetails.address.zipcode}`}/>
            </div>

        </div>
    )
}

export default Detailsheading;
