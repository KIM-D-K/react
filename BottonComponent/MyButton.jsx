const MyButton = (props) => {

    const shape = {
        hard: "0px",
        smooth: "5px",
        round: "45px"
    }

    const state = {
        primary: {
            backgroundColor: "#205BF3",
            color: "white",
            border: "none"
        },
        hover: {
            backgroundColor: "#4780F5",
            color: "white",
            border: "none"
        },
        secondary: {
            backgroundColor: "transparent",
            color: "black",
            border: "1px solid #205BF3"
        },
        deactive: {
            backgroundColor: "#979797",
            color: "E8E8E8",
            border: "none"
        }
    }

    const buttonStyle = {
        padding: "10px 45px",
        backgroundColor: "#205BF3",
        color: "white",
        fontSize: "32px",
        border: props.border,
        borderRadius: shape[props.shape],
        ...state[props.state] // ...연산자: 오브젝트 껍데기를 벗김
    }
    return <button style={buttonStyle}>Button</button>
}

export default MyButton;