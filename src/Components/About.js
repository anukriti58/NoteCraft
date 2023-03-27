import React from 'react'
import './about.css'

export default function About(props) {
  return (
    <div className='container' 
    style={{background: props.mode === 'dark'?'black':'white', 
    color: props.mode==='dark'?'white':'black'}}>
        <h3>About</h3>
      <div className="accordion accordion-flush" 
             
            id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    style={{background: props.mode === 'dark'?'black':'white', 
                    color: props.mode==='dark'?'white':'black'}}
                    data-bs-target="#flush-collapseOne" 
                    aria-expanded="false" 
                    aria-controls="flush-collapseOne">
                    Description
                  </button>
                </h2>
              <div id="flush-collapseOne"  
                className="accordion-collapse collapse" 
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" 
                  style={{background: props.mode === 'dark'?'#343a40':'white', 
                      color: props.mode==='dark'?'white':'black'}}>
                        NoteCraft is a tool that enables users to manipulate and modify their text as per their requirements. It provides a range of features that can be used to
transform text in various ways. Users can take advantage of these features to restructure and modify their text to achieve their desired outcomes.
</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" 
                  style={{background: props.mode === 'dark'?'black':'white', 
                  color: props.mode==='dark'?'white':'black'}} 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#flush-collapseTwo" 
                  aria-expanded="false" 
                  aria-controls="flush-collapseTwo">
                      About Developer
                  </button>
                </h2>
                <div id="flush-collapseTwo" 
                className="accordion-collapse collapse" 
                data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body" 
                  style={{background: props.mode === 'dark'?'#343a40':'white', 
                  color: props.mode==='dark'?'white':'black'}}>
                    Anukriti Shrivastava</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" 
                    style={{background: props.mode === 'dark'?'black':'white', 
                    color: props.mode==='dark'?'white':'black'}}
                    type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      What's coming?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" 
                  className="accordion-collapse collapse" 
                  data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" 
                    style={{background: props.mode === 'dark'?'#343a40':'white', 
                    color: props.mode==='dark'?'white':'black'}}>
                      Coming soon!</div>
                  </div>
                </div>
              </div>
    </div>
  )
}
