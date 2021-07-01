import React, { useState} from "react";

export default function Home(props) {
  const [photos, setPhotos] = useState({ data: [] });

  const onSearchChange = (e) => {
    setPhotos({ ...photos, query: e.target.value });
  };

  const onSearch = (e) => {


    var q=photos.query;

    if(q==null || q==''){
        return;
    }

    setPhotos({...photos,data:[],status:'loading'})

    fetch('https://jsonplaceholder.typicode.com/albums/'+q+'/photos').then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        // This is the JSON from response
        setPhotos({data:data,status:'success'})
        
    }).catch(function (err) {
        // There was an error loading photos
        setPhotos({data:[],status:"error"})
    });
    
  };

  return (
    <div className="app">
      <div className="search-wrapper">
        <input
          type="text"
          className="search"
          placeholder="Search by album ID"
          onChange={onSearchChange}
        />
        <button onClick={onSearch}>Get photos</button>
      </div>

      <div className="list-wrapper">
        {photos.status == null ? (
          <p>Write album ID and click the button to get all album photos</p>
        ):photos.status == 'loading'?<p>Loading album photos, please wait...</p> :photos.status == 'error'?<p>There is an error while loading album photos, try search again</p>: photos.data.length==0?<p>No photos found for your album ID, try another ID</p>: (
          <div className="container">
            {photos.data.map((photo) => (
              <PhotoItem title={photo.title} url={photo.url} key={photo.id}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PhotoItem(props) {
  const { title, url } = props;

  return (
    <div className="album-wrapper">
      <img
        className="album-image"
        src={url}
        alt={title}
      />
      <p>{title}</p>
    </div>
  );
}
