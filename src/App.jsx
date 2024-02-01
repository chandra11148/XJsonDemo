import React,{useState,useEffect} from 'react'
import Card from './Component/Card';
import { fetchSongs } from './Api/Api';
import "./App.css"

function App() {
  const [data,setData] = useState([]);
  const generateData=(key,source)=>{
    source().then((data)=>{
      setData(data)
    })
  }
  useEffect(()=>{
    // (async function(){
    //   await axios.get("https://qtify-backend-labs.crio.do/albums/top").then((data)=>{
    //     setAlbum(data.data);
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    // })();
    
    generateData("songs",fetchSongs);
    // generateData("genres",fetchFilters);

  },[]);
  return (
    <>
      <div className='container'>
        {data.map((song)=><Card key={song.id} data={song}/>)}
      </div>
    </>
  )
}

export default App