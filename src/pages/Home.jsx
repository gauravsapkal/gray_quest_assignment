import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuserlist } from "../Redux/userListSlice";
import axios from 'axios' ;
import { useState } from "react";

const Home = () => {
    const userList = useSelector((state) => state.users.userList)
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const getdata = () => {
            setLoading(true);
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response)=> {
                    dispatch(getuserlist(response.data));
                })
                .catch((error)=>{
                    console.log(error);
                    setError(true);
                })
                .then(()=>{
                    setLoading(false);
                });
        }
        getdata();
    }, [])

    return (
        <div>
            <h1>Home Page</h1>

            <div>
                {
                    userList.map((elem)=>(
                        <h1 key={elem.id}>
                            {elem.name}
                        </h1>
                    ))
                }
            </div>

        </div>
    )
}

export default Home;