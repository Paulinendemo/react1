import React from 'react'

function Location () {
    return (
    <>
    <img 
alt="our location" 
className="w3-image w3-greyscale-min" style={{"width":"100%"}} 
src="https://i.pinimg.com/564x/f6/2d/0a/f62d0a0cce0adac82b1e54443c78115c.jpg" />

    </>
        
)
}

const Map = () => {
  return (
    <div>
        <Location />
    </div>
  )
}

export default Map