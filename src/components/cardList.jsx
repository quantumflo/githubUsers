import React from 'react';
import Card from './card';


const Cardlist = ({list}) =>{

  const cards =list.map((item,i) =>{
    return <Card key={i} name={item.login} img={item.avatar_url} /> })
  return(<div>
    {cards}
    </div>);
}
export default Cardlist;
