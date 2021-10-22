import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
ReactDOM.render(
    <>
    <h1 className="heading_style">List of Top Netflix Series</h1>
    <App/>
    </>
,document.getElementById('root'));

// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./Card";
// import Sdata from "./Sdata";




// ReactDOM.render( 
//     <>
//     <Card
//     imgsrc={Sdata[0].imgscr}
//     title={Sdata[0].title}
//     sname={Sdata[0].sname}
//     link={Sdata[0].links}
//     />
//     <Card
    
//     imgsrc={Sdata[1].imgscr}
//     title={Sdata[1].title}
//     sname={Sdata[1].sname}
//     link={Sdata[1].links}
//     />
//     <Card
    
//     imgsrc={Sdata[2].imgscr}
//     title={Sdata[2].title}
//     sname={Sdata[2].sname}
//     link={Sdata[2].links}
//     />
//     <Card
    
//     imgsrc={Sdata[3].imgscr}
//     title={Sdata[3].title}
//     sname={Sdata[3].sname}
//     link={Sdata[3].links}
//     />
//     </>,

//     document.getElementById('root')
// );