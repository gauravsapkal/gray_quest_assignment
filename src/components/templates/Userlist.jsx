import { useDispatch, useSelector } from "react-redux";
import H1tag from "../atoms/h1tag/H1tag";
import Card from "../organisms/card/Card";
import Pagination from "../organisms/pagination/Pagenation";
import { setLoading } from "../../Redux/LoadingSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { setuserlist } from "../../Redux/userListSlice";
import Errorpage from "../pages/Errorpage";
import Loader from "../atoms/loading/Loader";

const Userlist = ({ myclass }) => {
    const loading = useSelector((state) => state.loader.loading)
    const userList = useSelector((state) => state.users.userList)
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getdata = () => {
            dispatch(setLoading(true));
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
                    dispatch(setLoading(false));
                });
        }
        getdata();
        // eslint-disable-next-line
    }, [page])

    const pagechange = (data) => {
        setPage((prev) => prev + data)
    }

    if (error)
    return <Errorpage />



    return (
        <div className={myclass}>
            <H1tag myclass="page_heading" name="Users" />

            {
                loading ? <Loader myclass="loading"/> : <div className="parent">
                    {
                        userList.map((elem) => (

                            <Card myclass="main_card" key={elem.id} elem={elem}/>
                            
                        ))
                    }
                </div>
            }

            <Pagination myclass="pagination" myfun={pagechange} page={page}/>
        </div>
    )
}

export default Userlist;