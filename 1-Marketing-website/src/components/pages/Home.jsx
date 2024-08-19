import "./Home.css"
import home from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/images/fonebranco.png"
function Home() {
    return(
        <div className="Home" >
            <h1>BASEUS New Era Baro-50</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo sint atque sapiente vitae suscipit illo voluptate reiciendis fugiat, tenetur nesciunt commodi aut eveniet cupiditate ea. Totam fuga expedita ut dolore!</p>
            <button>Learn More</button>
            <img src={home} alt="" />

        </div>
    )
}
export default Home