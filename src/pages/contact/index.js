import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/SEO/SEO';
import {
    contact,
    contactHeader,
    contactParagraph,
    contactInfo,
    textParagraphLink
} from "./contact.module.css"

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact Page">
            <Seo />
            <div className={contact}>
                <div className={contactInfo}>
                    <h2 className={contactHeader}>Lets get in touch!</h2>
                    <p className={contactParagraph}>@ jokerchocolate@gmail.com</p>
                    <p className={contactParagraph}><a href="https://github.com/Jatzek3"
                        className={textParagraphLink} target="blank">Github: https://github.com/Jatzek3</a></p>
                    <p className={contactParagraph}>Jacek Kawalec</p>
                </div>
            </div>

        </Layout>
    )
}

export default ContactPage