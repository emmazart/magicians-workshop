import React from "react";
import Card from './Card';

function Gallery() {

    const projects = [
        {
            title: 'All Walks Dog Training site',
            description: 'This site was designed for a sole proprietor dog training business in 2021. Designed in Weebly/Squre with a custom domain and online store capabilities for selling workshops & classes.',
            image: 'allwalks.png',
            link: 'https://www.allwalksdogtraining.com/'
        },
        {
            title: 'All Walks Dog Training site',
            description: 'This site was designed for a sole proprietor dog training business in 2021. Designed in Weebly/Squre with a custom domain and online store capabilities for selling workshops & classes.',
            image: 'allwalks.png',
            link: 'https://www.allwalksdogtraining.com/'
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