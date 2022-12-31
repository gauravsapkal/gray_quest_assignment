import H1tag from "../../atoms/h1tag/H1tag";
import Para from "../../atoms/para/Para";


const Heading = ({ myclass, elem }) => {

    return (
        <div className={myclass}>
            <H1tag name={elem.name} />

            <div className="username_email">
                <Para icon_name={<i className="fa-regular fa-user"></i>}
                    name={elem.username}
                />
                <Para icon_name={<i className="fa-regular fa-envelope"></i>}
                    name={elem.email}
                />
            </div>
        </div>
    )
}

export default Heading;