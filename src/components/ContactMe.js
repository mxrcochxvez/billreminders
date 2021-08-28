import React from 'react';
import {ContactContainer} from "./styles/ContactStyles";
import SectionHeader from "./SectionHeader";

const ContactMe = () => {
    const [socials, setSocials] = React.useState([
        {
            name: "twitter",
            href: "https://twitter.com/marcode_chavez/"
        },
        {
            name: "instagram",
            href: "https://instagram.com/marcode_chavez"
        },
        {
            name: "github",
            href: "https://github.com/mxrcochxvez"
        },
        {
            name: "codepen",
            href: "https://codepen.io/mxrcochxvez"
        }
    ]);

    return (
        <ContactContainer>
            <SectionHeader title="Contact Me"/>
        </ContactContainer>
    )
}

export default ContactMe;