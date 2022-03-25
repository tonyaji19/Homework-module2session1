
import React from "react";

const Album = (props) => {
  return (
    <div className="songContent">
          <img className="album" id="albumImage" src={data.album.images[0].url} alt="albumImage"
          />
          <p className="sTitle">{data.name}</p>
          <p className="sArtist">{data.artists[0].name}</p>
         <button className="btn select">Select</button>
    </div>
  );
};

export default Albumcom;
