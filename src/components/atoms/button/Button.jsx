

const Button = ({myfun, icon_name, name, myclass})=>{
    
    return(
        <button onClick={myfun ? myfun : ""} className={myclass ? myclass : ""}>{ icon_name ? icon_name : "" } {name}</button>
    )
}

export default Button;