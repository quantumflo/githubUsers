import React from 'react';
import './searchBox.css'
const Searchbox=({inputChange})=>{
  return (<div  >
    <input className='search' onChange={inputChange} type='search' placeholder ='SEARCH GITHUB USERS FROM BANGALORE' />
    </div>
  )
}

export default Searchbox;
