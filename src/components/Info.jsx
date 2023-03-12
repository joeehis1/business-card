
import { SocialButton, EmailButton } from "./Button"
import profileImage from "../assets/self.png"

export function Info(){
    return (
        <section className="section--info">
            <img src={profileImage}/>
            <div className="info">
                <h2 className="name">Joseph Ehigiator</h2>
                <h3 className="job-title">Frontend Developer</h3>
                <address>https://github.com/joeehis1</address>
            </div>
            <div className="buttons">
                <EmailButton /> 
                <SocialButton />
                
            </div>
        </section>
    )
}