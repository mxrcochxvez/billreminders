import React from 'react'
import {HeroContainer, HeroDescription, HeroInner, ScrollDown} from "./styles/HeroStyles";

export default function Hero() {
    return (
        <HeroContainer>
            <HeroInner>
                <h1 className="hero_inner_title">Marco Chavez</h1>
                <HeroDescription className="hero_inner_description">Software Developer</HeroDescription>
            </HeroInner>
            <ScrollDown className="scroll_down">Scroll Down</ScrollDown>
        </HeroContainer>
    )
}
