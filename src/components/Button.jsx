
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"



export function EmailButton(){
    return (
        <button className="btn btn-plain">
            <FontAwesomeIcon icon={faEnvelope}/>
            Email
        </button>
    )
}

export function SocialButton(){
    return (
        <button className="btn btn-colored">
            <FontAwesomeIcon icon={faLinkedin}/>
            LinkedIn
        </button>
    )
}