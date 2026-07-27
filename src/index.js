import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import img1 from "./assets/images/godfather.webp"
import img2 from "./assets/images/scarface.webp"
import img3 from "./assets/images/knight.jpg"
import img4 from "./assets/images/leo.jpg"
import img5 from "./assets/images/mankantha.webp"
import img6 from "./assets/images/inception.webp"
import img7 from "./assets/images/avengers.jpg"
import img8 from "./assets/images/club.jpg"
import img9 from "./assets/images/batman.webp"
import img10 from "./assets/images/inglourious.webp"
import img11 from "./assets/images/lotd.webp"
import img12 from "./assets/images/got.jpg"

function Head() {
  return (
    <div className='container '>
      <div className='con1'>
        <h1>DYNAMIC IMAGE GALLERY</h1>
        <h3>MOVIES POSTERS</h3>
      </div>
    </div>
  )
}
function Mid(props) {
  return (
    <div className='con-2'>
      <div className='movies'>
        <img src={props.myimg} alt="image-1" />
        <h1>{props.mname}</h1>
        <p>{props.mrate}</p>
      </div>
    </div>
  )
}
var movies = [
  {
    name: "THE GODFATHER",
    desc: "IMDB-9.3",
    img: img1

  },
  {
    name: "SCARFACE",
    desc: "IMDB-8.7",
    img: img2
  },
  {
    name: "THE DARK KNIGHT",
    desc: "IMDB-9.0"
    ,
    img: img3
  },
  {
    name: "LEO",
    desc: "IMDB-8.0"
    ,
    img: img4
  },
  {
    name: "MANKATHA",
    desc: "IMDB-9.0"
    ,
    img: img5
  },
  {
    name: "INCEPTION",
    desc: "IMDB-8.7"
    ,
    img: img6
  },
  {
    name: "AVENGERS",
    desc: "IMDB-8.0"
    ,
    img: img7
  },
  {
    name: "FIGHTCLUB",
    desc: "IMDB-8.7"
    ,
    img: img8
  },
  {
    name: "THE BATMAN",
    desc: "IMDB-8.9"
    ,
    img: img9
  },
  {
    name: "INGLORIOUS BASTARDS",
    desc: "IMDB-8.0"
    ,
    img: img10
  },
   {
    name: "LORD OF THE RINGS",
    desc: "IMDB-8.0"
    ,
    img: img11
  },
   {
    name: "GAME OF THRONES",
    desc: "IMDB-8.0"
    ,
    img: img12
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main'>
    <Head></Head>
    {
      movies.map(function(data){
        return<Mid mname={data.name} mrate={data.desc} myimg={data.img}></Mid>
      })
    }
  </div>
  
);

