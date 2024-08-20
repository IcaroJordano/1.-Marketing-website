import "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/Features2.css"
import CardFeature2 from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/CardFeature2.jsx"
import gamer from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/images/gamer.webp"
import esportivo from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/images/esportivo.webp"
import extres from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/images/extres.jpeg"
import abafador from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/images/abafador.jpeg"

function Features2() {
    return(
        <div className="Features2 h2">
            <h2>Features and New Modes</h2>
            <CardFeature2 imagem={gamer} Titulo={'Game Mode'} ></CardFeature2>
            <CardFeature2 imagem={abafador} Titulo={'Noise cancellation'} height={`height45`} content={"content"}></CardFeature2>
            <CardFeature2 imagem={extres} Titulo={'De-stress Mode'} ></CardFeature2>
            <CardFeature2 imagem={esportivo} Titulo={'Sport Mode'} height={`height45`} content={"content"}></CardFeature2>
        </div>
    )
}
export default Features2