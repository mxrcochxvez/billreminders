import React from 'react'
import {AboutContainer, AboutMeContainer, AboutTitleContainer} from "./styles/AboutStyles";
import SectionHeader from "./SectionHeader";
import TabExperience from "./TabExperience";

export default function About() {
    return (
        <AboutContainer id="#about">
            <AboutTitleContainer>
                <SectionHeader title="About Me" />
            </AboutTitleContainer>
            <AboutMeContainer>
                <p>I am a Software Developer based out of Fresno, CA. I work primarily with Frontend Frameworks and Libraries such as</p>
                <ul style={{ margin: 0 }}>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Mobx</li>
                    <li>Redux</li>
                </ul>
                <p>As well as styling libraries like</p>
                <ul style={{ margin: 0 }}>
                    <li>Material UI</li>
                    <li>Tailwind CSS</li>
                    <li>Ant Design</li>
                    <li>Bootstrap</li>
                </ul>
            </AboutMeContainer>
            <SectionHeader title="Experience" />
            <TabExperience />
        </AboutContainer>
    )
}
