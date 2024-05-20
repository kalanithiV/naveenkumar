import "../Home/TopHeader.css"
import  HouseLayout from "../../images/integrate.png"
import Starttrail from "../../components/Button/Starttrail"
import SocialMedia from "../../components/Button/socialMedia"

export default function() {

  return (

    <div className="Main_content">
        <div className="Banner_section">
            <p>Integrate Your <br></br>
            stack - automate <br></br>your work</p>
            <small>Evolve at the speed and scale of your business<br></br>with the leader in low-code automation</small>
            <Starttrail />
            <SocialMedia />
        </div>

        <div className="Rightside_Logo">
               <img src={HouseLayout} /> 
        </div>

    </div>
  )
}
