import React from 'react'
import "../App.css"
import About from "../assets/abaut_as.png" 
import Preuzimanje from '../assets/preuzimanje.png'
const Comp1 = () => {
  return (
    <div>
      <section className="aboutus pb-5 mb-5">
      <div className="container mt-5 d-lg-flex">
        <div>
          <img className="img fluid" src={About} alt="" />
        </div>
        <div className="mx-5">
          <p className="arrow">
            About Us <img className="slika" src={Preuzimanje} alt="" />
          </p>
          <h1 className="text">
            We Learn Smart <br />
            Way To Build Bright <br />
            Futute For Your <br />
            Children
          </h1>
          <p className="lorems lead">
            Amet consectetur adipiscin elitsed eiusmod tempor <br />
            incididunt labore et dolore magna aliqua. Quis <br />
            ipsum suspendisse ultrices gravida. Risus <br />
            commodo maecenas accumsan <br /><br />

            Quis autem vel eum iure reprehenderit quiin ea <br />
            voluptate velit esse quam nihil molestiae <br />
            consequatur velillum
          </p>

          <button type="button" className="btn btn-warning btn-lg mt-2" href="#">
            <span className="learn">LEARN MORE US ➔</span>
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Comp1
