import React from "react";
import Card from './Card';

function Services() {

    const services = [
        {
            title: 'my service',
            description: 'my service description', 
            price: '$$$'
        }
    ]

    return(
        <section id="services">
            <h2>Services</h2>
            {
                services.map(service => {
                    return (
                        <Card services="true" title={service.title} description={service.description} price={service.price}></Card>
                    )
                })
            }
        </section>
    )
}

export default Services;