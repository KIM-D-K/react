import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";

const Heart = () => {
    const[heart, setHeart] = useState(false)
    const changeHeart = () => {
        setHeart(!heart)
    }

    return <div onClick={changeHeart}>{heart ? <FaHeart /> : <IoHeartOutline />}</div>
}
export default Heart;