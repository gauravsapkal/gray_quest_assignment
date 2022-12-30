import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setuserlist } from "../../Redux/userListSlice";
import axios from 'axios';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Atom } from "react-loading-indicators";
import Errorpage from "./Errorpage";
import Button from "../atoms/button/Button";
import Pagebutton from "../atoms/pagination_button/Pagebutton";


const Home = () => {
    const userList = useSelector((state) => state.users.userList)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const getdata = () => {
            setLoading(true);
            axios.get('https://jsonplaceholder.typicode.com/users',
                { params: { _page: page, _limit: 4 } }
            )
                .then((response) => {
                    dispatch(setuserlist(response.data));
                })
                .catch((error) => {
                    console.log(error);
                    setError(true);
                })
                .then(() => {
                    setLoading(false);
                });
        }
        getdata();
    }, [page])

    const pagechange = (data) => {
        setPage((prev) => prev + data)
    }

    if (error)
        return <Errorpage />

    return (
        <div className="main_parent">
            <h1 className="page_heading">Users</h1>

            {
                loading ? <div className="loading"><Atom size="large" color='#eaffea' /></div> : <div className="parent">
                    {
                        userList.map((elem) => (
                            <div className="main_card" key={elem.id}>
                                <div className="header">
                                    <div className="user_image">
                                        {elem.name.split(" ")[0] === 'Mrs.' || elem.name.split(" ")[0] === 'Mr.' ? elem.name.split(" ")[1][0] : elem.name.split(" ")[0][0]}
                                        {elem.name.split(" ")[0] === 'Mrs.' || elem.name.split(" ")[0] === 'Mr.' ? elem.name.split(" ")[2][0] : elem.name.split(" ")[1][0]}
                                    </div>

                                    <div className="name_details">
                                        <h1>{elem.name}</h1>

                                        <div className="username_email">
                                            <p><i className="fa-regular fa-user"></i> {elem.username}</p>
                                            <p><i className="fa-regular fa-envelope"></i> {elem.email}</p>
                                        </div>

                                        <p className="mobile"><i className="fa-solid fa-phone"></i> {elem.phone}</p>
                                        <p className="city"><i className="fa-solid fa-city"></i> {elem.address.city}</p>

                                        {/* <button className="more_details_button" onClick={() => { navigate(`/${elem.id}`) }}
                                        ><i className="fa-solid fa-circle-info"></i> More Details..</button> */}

                                        <Button
                                            myfun={() => { navigate(`/${elem.id}`) }}
                                            icon_name={<i className="fa-solid fa-circle-info"></i>}
                                            name="More Details.."
                                            myclass="more_details_button"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            <div className="pagination">
                <Pagebutton
                    myfun={() => { pagechange(-1) }}
                    name="prev"
                    page={page}
                    limit={1}
                />
                <Pagebutton name={page} page={page}/>
                <Pagebutton
                    myfun={() => { pagechange(1) }}
                    name="next"
                    page={page}
                    limit={3}
                />
                {/* <button disabled={page === 1} onClick={}>prev</button>
                <button>{page}</button>
                <button disabled={page === 3} onClick={() => { pagechange(1) }}>next</button> */}
            </div>

        </div>
    )
}

export default Home;