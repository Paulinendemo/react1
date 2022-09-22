import React from 'react'

function Portfolioinfo(){
    return(
        <>
  <div id="portfolio" class="container-fluid text-center bg-grey">
  <h2>Portfolio</h2><br/>
  <h4>What we have created</h4>
  <div class="row text-center slide">
    <div class="col-sm-4">
      <div class="thumbnail">
        <img style ={{"width":"400px", "height":"600px"}} src="https://i.pinimg.com/564x/0a/ee/68/0aee68e5e233cad0c948e3789d08f085.jpg" alt="Paris" />
        <p><strong>Paris</strong></p>
        <p>Yes, we built Paris</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img style ={{"width":"400px", "height":"600px"}} alt="New York"  src="https://i.pinimg.com/564x/27/9c/9e/279c9e4d93759d24b989d262894910f8.jpg"/>
        <p><strong>New York</strong></p>
        <p>We built New York</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img style ={{"width":"400px", "height":"600px"}} alt="San Francisco" src="https://i.pinimg.com/564x/bc/12/16/bc121649fc523a1da2199df9017cb5e0.jpg"/>
        <p><strong>San Francisco</strong></p>
        <p>Yes, San Fran is ours</p>
      </div>
    </div>
  </div><br/>
  
  <h2>What our customers say</h2>
  <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
    
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

   
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <h4>"This company is the best. I am so happy with the result!"<br/><span>Michael Roe, Vice President, Comment Box</span></h4>
      </div>
      <div class="item">
        <h4>"One word... WOW!!"<br/><span>John Doe, Salesman, Rep Inc</span></h4>
      </div>
      <div class="item">
        <h4>"Could I... BE any more happy with this company?"<br/><span>Chandler Bing, Actor, FriendsAlot</span></h4>
      </div>
    </div>

   
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
 
        </>
    )
}


const Portfolio = () => {
    return (
      <div>
          <Portfolioinfo/>
      </div>
    )
  }
  
  export default Portfolio