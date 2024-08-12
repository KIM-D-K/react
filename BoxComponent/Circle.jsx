const Circle = (props) => {
    const CircleStyle = {width: "100px", height: "100px", borderRadius: "9999px", backgroundColor: props.backgroundColor}

    return <div style={CircleStyle}></div>
}
export default Circle;