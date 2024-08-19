import "./Navbar.css"
import logo from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/images/logo.png"

function Navbar() {
    return(
        <div className={"Navbar"} >
            <img src={logo} alt="" />
            <div className="Links" >
                <a href="">Home</a>
                <a href="">Page</a>
                <a href="">Featers</a>
                <a href="">Contact Us</a>
                <a href=""></a>
        
            </div>
        </div>
    )
}
export default Navbar