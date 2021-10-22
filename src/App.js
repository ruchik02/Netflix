import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
// function ncard(val){
//   console.log(val);
 
// }
function App() {
  return (
    <div>
      {/* const ncard= */}
     { Sdata.map((val,index)=>{
       console.log(index);
        return(
          <Card
              imgsrc={val.imgscr}
              title={val.title}
              name={val.sname}
              link={val.links}
            />
        );

     })}
    </div>
  );
}
export default App;
