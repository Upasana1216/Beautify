import "./Company.css"
import img1 from "../img/salon/1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf
} from "@fortawesome/free-solid-svg-icons";

function Card() {
    return (
        <div>


            <div class="card">
                <div class="card-header">
                    <img src={img1} alt="rover" className="salonImg" />
                </div>
                <div class="card-body">
                    
                    <span class="tag tag-teal">
                    <FontAwesomeIcon icon={faStar} />
                   
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                    </span>
                    <p className="company">Hair Spa</p>
                    <p className="description">Lakme</p>
                    <button class="date"> Book your appointment  </button>
                </div>
            </div>
        </div>

    );
}

export default Card;
