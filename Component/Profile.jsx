const Profile = (props) => {
    const style = {width: "500px", height: "70px", display: "flex"}
    const imgStyle = {width: "50px", height: "50px", borderRadius: "9999px", margin: "10px 0 10px 0"}

    return (
        <div style={style}>
            <img src={props.src} style={imgStyle}></img>
            <div>
                <span>{props.innerText}</span>
                <br/>
                <span>D-day</span>
            </div>
    
        </div>
    )
}
export default Profile;