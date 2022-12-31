

const Pagebutton = ({myfun, name, page, limit})=>{

    return(
        <button disabled={page===limit} onClick={myfun} >{name}</button>
    )
}

export default Pagebutton;