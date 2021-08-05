import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleSubmit = (e) =>{
    e.preventDefault();
    setText(data.slice(0,count));
  }
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        Enter number of paragraphs: <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} />
        <button type="submit">Generate</button>
      </form>
      <article>
        {
          text.map((item)=>{
            return(
              <p>
                {item}
              </p>
            )
          })
        }
      </article>
    </section>
    )
}

export default App;
