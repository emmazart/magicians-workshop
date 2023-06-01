import React from "react";
import Card from './Card';

function Gallery() {

    const projects = [
        {
            title: 'All Walks Dog Training site',
            description: 'This site was designed for a sole proprietor dog training business in 2021. Designed in Weebly/Square with a custom domain and online store capabilities for selling workshops & classes.',
            image: 'allwalks.png',
            link: 'https://www.allwalksdogtraining.com/'
        },
        {
            title: 'ArtMakers site',
            description: 'This site was designed for an arts nonprofit bringing together disabled adults & artists. Designed in Weebly/Square with a custom domain. Pages change frequently as new productions and projects come alive.',
            image: 'artmakers2.png',
            link: 'https://www.artmakersmn.org/'
        }

    ]
    return(
        <section id="work">
            <h2>My Work</h2>
            {projects.map(project => {
                return(
                <Card 
                    gallery="true"    
                    title={project.title} 
                    description={project.description}
                    image={project.image}
                    link={project.link}    
                ></Card>
                )
            })}
        </section>
    )
}

export default Gallery;