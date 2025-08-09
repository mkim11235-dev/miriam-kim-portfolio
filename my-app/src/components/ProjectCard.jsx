


export default function ProjectCard({title, imgSrc, description}){
    return(
        <section id = "project-card">
            <div id = "project-image">
                <img src = {imgSrc} alt = {title} />

            </div>
            <div id = "project-description">
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </section>
    )
    
}