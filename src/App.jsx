// import React, { useEffect, useState } from 'react'
// import Rana from './Rana'

// const App = () => {
//   const [count , setCount ] = useState(0);

//   useEffect(()=>{
//     alert("You have change the count" + count)
//   },[count])

// return(
//   <div>
//     <button onClick={()=>setCount(count+1)}>+</button>
//     <h2>{count}</h2>
//     <button onClick={()=>setCount(count-1)}>-</button>
//   </div>
// )
// }


// export default App







import React, { useEffect, useState } from 'react'
import './App.css';
import './search.svg';
import MovieCart from './MovieCart';
// a31644fe

const API_URL = 'http://www.omdbapi.com?apikey=a31644fe'
const App = () => {
 const[movies,setMovies] = useState([]);
 const[searchTerm, setSearchTerm] = useState("");
  const searchMovie = async(title)=>{
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();

setMovies(data.Search);
  }
  useEffect(()=>{
searchMovie('Spiderman');
  },[])
  return (
    <div className='app'>
     <h1>MovieLand</h1>
     <div className='search'>
      <input  placeholder='Search for movies'
       value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      <div className='searchbar' onClick={()=>(searchMovie(searchTerm))}>🔍</div>
     </div>

     {movies?.length>0?(
      <div className='container'>{movies.map((movie)=>(
        <MovieCart movie={movie}/>
      ))}
      </div>
     ):(
      <div className='empty'>
        <h2>NO! movie found</h2>
        </div>
     )}
     
     </div>
  );
}

export default App