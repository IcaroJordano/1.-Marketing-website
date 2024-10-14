import "./Home.css"
import home from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/images/fonebranco.png"
function Home() {
    return (
        <div className="Home" >
            <div className="text">
                <h1>BASEUS New Era Baro-50</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo sint atque sapiente vitae suscipit illo voluptate reiciendis fugiat, tenetur nesciunt commodi aut eveniet cupiditate ea. Totam fuga expedita ut dolore!</p>
                <p className="mais">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut, quisquam omnis eius cumque beatae animi quia tempore sint quibusdam eum totam rerum accusantium! Dolore nulla quia nostrum ut ullam.
                Reiciendis ratione expedita eaque eius iusto quaerat architecto! Placeat blanditiis illo eius reiciendis consequatur, cumque natus mollitia quibusdam, eum facilis hic a consequuntur repellat libero quia. Incidunt rerum rem deleniti.</p>
                <button>Learn More</button>
            </div>
            <img src={home} alt="" />
        </div>
    )
}
export default Home