import profilePicture from '../assets/headshot_2.jpg';
import '../App.css'

export default function Profile({aboutMe}){
    return(
        <section id = "about">
            <div id = "profile-picture">
                <img src={profilePicture} alt="profile picture" />
            </div>
            <div id = "text-overlay">
                <h1>
                    Miriam Kim
                </h1>
                <p>
                    {aboutMe}
                    
                </p>
            </div>
        </section>

    )
    

}