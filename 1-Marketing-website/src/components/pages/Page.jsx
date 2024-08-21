import "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/Page.css"
import image from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/images/fone4.jpg"

function Page() {
    return(
        <div className="Page">
            <div className="Textos">
                <h3>First page</h3>
                <h5>Track trends in your wellness</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sint quam sed illum aut. Dignissimos dolorum pariatur, provident quos voluptatibus aspernatur iure vel harum magni, commodi corrupti dolores perferendis tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas officiis dolorem quae magnam voluptates ipsam et doloribus voluptatibus delectus! Aliquid quo alias cumque commodi aliquam, blanditiis eaque earum fugit!</p>
            </div>
            <img src={image} alt="" />
        </div>
    )
}
export default Page