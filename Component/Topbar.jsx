import { FiCamera } from "react-icons/fi"
import { PiTelegramLogo, PiTelevisionSimple } from "react-icons/pi"

const Topbar = () => {
    return (
        <div className="w-full flex justify-between items-center">
        <FiCamera />
        <div style={{ width: "105px", height: "30px"}}>
            <img 
            className="w-full h-full object-cover"
            src="https://static.fontget.com/i/n/instagram/preview@2x.png"
            alt="" />
        </div>
        <div className="flex items-center">
            <PiTelevisionSimple />
            <PiTelegramLogo />
        </div>
    </div>
    )
}
export default Topbar