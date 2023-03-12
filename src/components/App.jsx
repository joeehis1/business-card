
import { SocialButton, EmailButton } from "./Button"
import BioSection from "./BioSection"
import { Info } from "./Info"
import Footer from "./Footer"

export default function App(){
    return (
        <>
            <div className="container">
                <main>
                    <Info />
                    <BioSection />
                    <Footer />
                </main>
            </div>
        </>
    )
}