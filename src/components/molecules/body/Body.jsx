import Para from "../../atoms/para/Para";


const Body = ({ myclass, elem }) => {

    return (
        <div className={myclass}>
            <Para myclass="mobile" icon_name={<i className="fa-solid fa-phone"></i>}
                name={elem.phone}
            />

            <Para myclass="city" icon_name={<i className="fa-solid fa-city"></i>}
                name={elem.address.city}
            />
        </div>
    )
}

export default Body;