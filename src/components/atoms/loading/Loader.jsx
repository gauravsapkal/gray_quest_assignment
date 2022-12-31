import { Atom } from "react-loading-indicators";

const Loader = ({ myclass })=>{

    return(
        <div className={myclass}>
            <Atom size="large" color='#eaffea' />
        </div>
    )
}

export default Loader;