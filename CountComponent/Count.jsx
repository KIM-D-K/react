import { useState } from "react";

const Count = () => {
    // react : props + state(상태)
    // userState(초깃값)
    const [num, setnum] = useState(0)
    const [fruits, setFruits] = useState("🍒")
    const changeFruits = () => {
        if (fruits == "🍓") {
            setFruits("🍒")
        }else if(fruits == "🍒") {
        setFruits("🍓")
        }
    }
    const upNumber = () => {
        setnum(num+1)
    }

    return (
        <>
            <div onClick={upNumber}>{num}</div>
            <div onClick={changeFruits}>{fruits}</div>
        </>
    )
}
export default Count;