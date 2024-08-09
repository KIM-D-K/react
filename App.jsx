// import Box from "./BoxComponent/Box.jsx";
// import Circle from "./BoxComponent/Circle.jsx";
// import Profile from "./Component/Profile.jsx";

import MyButton from "./BottonComponent/MyButton.jsx";

function App() {
  const style = {display: "grid", gridTemplateColumns: "repeat(3, 0fr)"}
  const stateArray = ['primary', 'hover', 'secondary', 'deactive']
  const shapeArray = ["round", "smooth", "hard"]
   

    return (
      <div>
        {stateArray.map((v) => {
          return shapeArray.map((x) => {
            return <MyButton shape={x} state={v}></MyButton>
          })
        })}
      </div>
    )
}

export default App;
