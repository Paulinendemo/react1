import React from 'react'

function Pagefooter(){
    return (
        <>
        <footer className="container-fluid text-center">
  <a href="#myPage" title="To Top">
    <span className="glyphicon glyphicon-chevron-up"></span>
  </a>
  <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" title="Visit w3schools">www.w3schools.com</a></p>
</footer>
        </>
    )
}

const Footer = () => {
  return (
    <div>
        <Pagefooter />
    </div>
  )
}

export default Footer