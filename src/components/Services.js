import React from "react";
import Card from './Card';

function Services() {

    const services = [
        {
            title: 'New Website Development with a Website Builder',
            description: 'Looking to create a website from scratch on a web-based platform such as Wix, Squarespace, Weebly, etc? I will help you choose the right platform for your business, get you up and running, and then hand it over to you for ongoing content maintenance. ', 
            highlights: ['New website on a website building platform', 'Optional functions include blogs & online storefronts', 'Connection to a custom domain', 'A complete site where you can easily edit your own content'],
            priceRange: '$$$',
            price: 'Please contact for full pricing details.'
        },
        {
            title: 'Existing Website Maintenance',
            description: "Looking to freshen up an existing website? Let's chat about what needs freshening up, whether it's content or structure. I'll help you (& your clients) fall in love with your website again!", 
            highlights: ['Adding new features', 'Revamping old content', 'Minor adjustments to the flow of the site'],
            priceRange: '$$',
            price: 'Please contact for full pricing details.'
        },
        {
            title: 'New Website Development (Full Javascript/React from Scratch)',
            description: 'Looking for more options than are provided by drag & drop platforms? I will work with you to design and build a completely customized site to fit your exact needs.', 
            highlights: ['Total customization of layout and styling', 'Future changes & maintenance handled at an hourly rate'],
            priceRange: '$$$$',
            price: 'Please contact for full pricing details.'
        },
        {
            title: 'Small Business Management Tools',
            description: 'Custom designed spreadsheets and tracking systems for you and your business.', 
            highlights: ['Written in your desired platform (Google Sheets, MS Excel, Notion)', 'Client & Sales tracking', 'Income & Expense tracking', 'Implementation of Calendly, Mailchimp, or other automated features'],
            priceRange: '$',
            price: 'Please contact for full pricing details.'
        }

    ]

    return(
        <section id="services">
            <h2>Services</h2>
            {
                services.map(service => {
                    return (
                        <Card services="true" title={service.title} description={service.description} highlights={service.highlights} range={service.priceRange} price={service.price}></Card>
                    )
                })
            }
        </section>
    )
}

export default Services;