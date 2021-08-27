import React from 'react'
import {HeroContainer, HeroDescription, HeroInner, HeroInnerTitle, ScrollDown} from "./styles/HeroStyles";

export default function Hero() {
    return (
        <HeroContainer>
            <HeroInner>
                <HeroInnerTitle>Marco Chavez</HeroInnerTitle>
                <HeroDescription>Software Developer</HeroDescription>
            </HeroInner>
            <ScrollDown className="scroll_down">Scroll Down</ScrollDown>
        </HeroContainer>
    )
}
