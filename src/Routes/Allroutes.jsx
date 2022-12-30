import { Route, Routes } from "react-router-dom";
import Details from "../components/pages/Details";
import Home from "../components/pages/Home";

const Allroutes = ()=>{

    return(
        <Routes>
            <Route  path="/" element={<Home />}></Route>

            <Route  path="/:id" element={<Details />}></Route>

        </Routes>
    )
}

export default Allroutes;