import logo from './logo.svg';
import './App.css';
import MovieList from './composants/MovieList';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Description from './composants/Description';

function App() {

  const [movie,setMovie] = useState([
    {id:Math.random(),
      title:'Cinderella' ,
     description:'disney' , 
      posterURL:'https://lumiere-a.akamaihd.net/v1/images/p_cinderella_20490_a7c83808.jpeg' ,
     rating: 3 },

     {id:Math.random(),
      title:'Hunter' ,
     description:'série' , 
      posterURL:'https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg' ,
     rating: 4 },

     {id:Math.random(),
      title:'Harry Potter' ,
     description:'série' , 
      posterURL:'https://static.posters.cz/image/1300/affiches-et-posters/harry-potter-a-l-ecole-des-sorciers-i104639.jpg' ,
     rating: 5 } ,

     {id:Math.random(),
      title:'Conan' ,
     description:'série' , 
      posterURL:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/052728A803CAD614AAE1619687F69947015DBAD1E08AA06989E8BCEF05AB2D7E/scale?width=506&aspectRatio=2.00&format=jpeg' ,
     rating: 5 } ,
  ])
  return (
    <div className="App">
       {/* <MovieList test={movie} /> */}
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieList test={movie} />} />
      <Route path="/movie/:id" element={<Description des={movie} />} />
        
        </Routes>
        </BrowserRouter>
    </div>        
  );
}

export default App;
