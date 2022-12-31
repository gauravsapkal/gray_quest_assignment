import Pagebutton from "../../atoms/pagination_button/Pagebutton";


const Pagination = ({ myclass, myfun, page }) => {

    return (
        <div className={myclass}>
            <Pagebutton
                myfun={() => { myfun(-1) }}
                name="prev"
                page={page}
                limit={1}
            />
            <Pagebutton name={page} page={page} />
            <Pagebutton
                myfun={() => { myfun(1) }}
                name="next"
                page={page}
                limit={3}
            />
        </div>
    )
}

export default Pagination;