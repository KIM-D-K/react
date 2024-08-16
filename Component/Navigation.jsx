import { CiSquarePlus } from "react-icons/ci"
import { FaRegHeart } from "react-icons/fa"
import { GoSearch } from "react-icons/go"
import { PiHouseFill } from "react-icons/pi"
import Icon from "./Icon"
import Photo from "../PhotoComponent/Photo"

const Navigation = () => {
    return (

        <footer 
        style={{backgroundColor: "#FAFAFA"}}
        className="fixed flex bottom-0 max-w-sm w-full m-auto justify-around items-center">
            <Icon  IconComponent={CiSquarePlus} />
            <Icon  IconComponent={FaRegHeart} />
            <Icon  IconComponent={GoSearch} />
            <Icon  IconComponent={PiHouseFill} />
            <Photo size="small" />
        </footer>
    )
}
export default Navigation