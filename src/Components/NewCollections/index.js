import React, { useEffect, useState } from 'react';
import Item from '../Item';
import './index.css';

function NewCollections() {

  const [new_collection, setNewCollectios] = useState([])
  useEffect(()=>{
    fetch('https://ec-backend-hvjp.onrender.com/newcollections')
    .then((response)=> response.json())
    .then((responseData)=>setNewCollectios(responseData))
  },[])

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item) => (
          <Item key={item.id} itemDetails={item} />
        ))}
      </div>
    </div>
  );
}

export default NewCollections;
