import Navigation from "./Navigation"
import Storyboard from "./Storyboard"
import Topbar from "./Topbar"

const Instagram = () => {
    return(
        <div className="w-screen h-screen">
            <div className="w-full h-full max-w-sm m-auto">
                <Topbar></Topbar>
                    <Storyboard friends={5}/>
                <Navigation></Navigation>
            </div>
        </div>
    )
}
export default Instagram