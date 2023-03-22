import React from "react";
import Card from './Card';

function Gallery() {

    const projects = [
        {
            title: 'a website i designed',
            description: 'this is a website i designed',
            image: 'this is an image',
            link: 'link to the application'
        }
    ]
    return(
        <section id="gallery">
            <h2>Gallery</h2>
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