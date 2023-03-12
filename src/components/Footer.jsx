import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faDiscord } from "@fortawesome/free-brands-svg-icons"


export default function Footer(){
    return(
        <footer>
            <nav>
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faDiscord} /></a></li>
                </ul>
            </nav>
        </footer>
    )
}