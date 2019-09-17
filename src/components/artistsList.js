import React from 'react';
import { Link } from 'react-router-dom';


const ArtistsList = (props) =>{

   const list = ({allArtists}) => {
       if(allArtists){
            return allArtists.map((item)=>{
                
            
                return (
                     
                    <Link key={item.id} to={`/artist/${item.id}`} className="artist_item">
                        <div>
                        <img  alt="" src={item.cover}
                        style={{ maxHeight: "25rem" }}
                        className="artist_item"
                        />               
                        <div>
                        {item.name}
                        </div>
                        </div>
                    </Link>
                )
            })
       }
   }

    return(
        <div className="artists_list">
            <h4>Browse the artists</h4>
            {list(props)}
        </div>
    )
}

export default ArtistsList;