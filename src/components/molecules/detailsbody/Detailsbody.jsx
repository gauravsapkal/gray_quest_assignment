import { useSelector } from "react-redux";
import Para from "../../atoms/para/Para";


const Detailsbody = ({ myclass }) => {
    const userDetails = useSelector((state) => state.users.userDetails)

    return (
        <div className={myclass}>
            <h3>- Compant Details -</h3>
            <Para icon_name={<i className="fa-solid fa-industry"></i>} name={userDetails.company.name}/>
            <Para name={`" ${userDetails.company.catchPhrase} "`}/>
            <Para name={`" ${userDetails.company.bs} "`}/>
            {/* eslint-disable-next-line */}
            <p>Website - <a href="#">{userDetails.website}</a></p>
        </div>
    )
}

export default Detailsbody;