

const Pagebutton = ({myfun, name, page, limit})=>{

    return(
        <button disabled={page===limit} onClick={myfun ? myfun : ""} >{name}</button>
    )
}

export default Pagebutton;