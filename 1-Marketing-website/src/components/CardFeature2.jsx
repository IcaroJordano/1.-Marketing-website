import "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/CardFeature2.css"
function CardFeature2({imagem,Titulo,height,content}) {
    return(
        <div className="CardFeature2 " id={content}>
            <img src={imagem} alt="" id={height}/>
            <h2 >{Titulo}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero minima excepturi culpa eaque.</p>
        </div>
    )
}
export default CardFeature2