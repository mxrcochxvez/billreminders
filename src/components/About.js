import React from 'react'

export default function About() {
    return (
        <div className="about_card" id="#about" style={{ paddingTop: '40px', fontSize: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
                <h1 style={{ textAlign: 'center', borderBottom: '5px solid white', width: '90%', paddingBottom: '10px', marginBottom: 0 }}>About me</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px' }}>
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
                <p>I have worked professionally as a Contract Software Developer for nearly a year now at a company called <a href="https://ordrslip.com/" target="_blank" rel="noreferrer">OrdrSlip</a>.</p>
                <p>As a Contract Software Developer I worked on various projects that involved both Python and JavaScript including</p>
                <ul style={{ margin: 0 }}>
                    <li>Updating component styles to meet design specs.</li>
                    <li>Performing OTA updates to devices for testing.</li>
                    <li>Implementing new client features.</li>
                </ul>
            </div>
        </div>
    )
}
