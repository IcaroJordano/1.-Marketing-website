import '/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/Features1.css'
import { FaBluetooth } from "react-icons/fa";
import { GiBattery100 } from "react-icons/gi";
import { GoArrowSwitch } from "react-icons/go";
import { MdConnectWithoutContact } from "react-icons/md";


function Features1() {
    return (
        <div className="Features1" >
            <div className="Feature">
                <FaBluetooth />
                <h2>Bluetooth 5.3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatem. </p>
            </div>
            <div className="Feature">
                <GiBattery100 />
                <h2>Battery 400mph</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatem. </p>
            </div>
            <div className="Feature">
                <GoArrowSwitch />
                <h2>Range 10m </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatem. </p>
            </div>
            <div className="Feature">
                <MdConnectWithoutContact />
                <h2>Double Connection</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatem. </p>
            </div>
        </div>
    )
}
export default Features1