import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSocial,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
    return (
        <footer>
            <div class="footer-content">
                <h3>Beautify: Let's Salon</h3>
                <p>Beautify Gives you one stop solution !!</p>
                <ul class="socials">
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">Telegram</a></li>
                </ul>
                <div class="footer-bottom">
                Developers: Upasana Singh and Khushi Jain
                </div>
                <p>Follow us here: <a href="#">https://github.com/Upasana1216/Beautify</a>  </p>
                <div class="footer-menu">
                    <ul class="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
