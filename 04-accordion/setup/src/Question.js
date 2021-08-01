import React, { useState } from 'react';

// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  // const [mydata, setmydata] = useState(data);
  const [infos, setInfos] = useState(false);
 
  return <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=>setInfos(!infos)}>
          {infos?'close':'open'}
          </button>
      </header>
      {infos && <p>{info}</p>}
    </article>
};

export default Question;
