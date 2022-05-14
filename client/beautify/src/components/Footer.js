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
                <h3>Foolish Developer</h3>
                <p>Foolish Developer ---  source code.</p>
                <ul class="socials">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                </ul>
                <div class="footer-bottom">
                    adjkf'aljg;akl
                </div>
                <p>copyright &copy;2021 <a href="#">foolishdeveloper</a>  </p>
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
