import "./Company.css"
import img1 from "../img/salon/1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf
} from "@fortawesome/free-solid-svg-icons";
import { Img } from "./CardImg";
function Card() {

    function imgCall(props) {
        return (
            <div class="card">
                <div class="card-header">
                    <img src={props.img} alt="rover" className="salonImg" />
                </div>
                <div class="card-body">
                    
                    <span class="tag tag-teal">
                    <FontAwesomeIcon icon={faStar} />
                   
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                    </span>
                    <p className="company">{props.company}</p>
                    <p className="description">{props.description}</p>
                    <button class="date"> Book your appointment  </button>
                </div>
            </div>
        )
    }

    return (
        <div>
            {Img.map(imgCall)}
        </div>

    );
}

export default Card;
