import BlueBox from "./BlueBox";
import GreenBox from "./GreenBox";
import RedCircle from "./RedCircle";
import YellowCircle from "./YellowCircle";

const Box = () => {
    // 1. css를 js화 할 때는 중괄호 2개 필요
    const boxStyle = {width: "100px", height: "100px", border: "1px solid black"}

    return <>   
            <div style={boxStyle}></div>
                <BlueBox></BlueBox>
                <YellowCircle></YellowCircle>
                <GreenBox></GreenBox>
                <RedCircle></RedCircle>
            </>
}
export default Box;