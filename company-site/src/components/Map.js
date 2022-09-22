import React from 'react'

function Location () {
    return (
    <>
    <img 
alt="our location" 
className="w3-image w3-greyscale-min" style={{"width":"100%"}} 
src="https://images.unsplash.com/photo-1584972191378-d70853fc47fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

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