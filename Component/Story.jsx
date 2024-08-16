import StoryPhoto from "../PhotoComponent/StoryPhoto"

const Story = (props) => {
    return(
        <div className="w-full h-20 flex  flex-col  gap-3 overflow-x-clip items-center ">
            <StoryPhoto />
            <span className="text-xs font-semibold">
                {props.name || "Your Story"}
            </span>
        </div>
    )
}
export default Story