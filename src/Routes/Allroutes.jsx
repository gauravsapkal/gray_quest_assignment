import { Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Allroutes = ()=>{

    return(
        <Routes>
            <Route  path="/" element={<Home />}></Route>

            <Route  path="/details" element={<Details />}></Route>

        </Routes>
    )
}

export default Allroutes;