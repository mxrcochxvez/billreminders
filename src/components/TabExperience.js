import React, {useState} from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Tab = styled.div`
  text-align: center;
  color: ${props => props.selected === true ? `#63ff73` : null};
  width: 50vw;
  display: block;
  padding: 15px 10px;
  background-color: ${props => props.selected === true ? `#616161` : null};
  
  transition: all;
  transition-duration: .5s;
`

const TabExperience = () => {
    const [tabSelected, setTabSelected] = useState(1);

    return(
        <div>
            <TabContainer>
                <Tab onClick={() => setTabSelected(1)} selected={tabSelected === 1}>
                    Ordrslip
                </Tab>
                <Tab onClick={() => setTabSelected(2)} selected={tabSelected === 2}>
                    Woz U
                </Tab>
            </TabContainer>
            {tabSelected === 1 ?
                <div style={{ margin: "0 5px" }}>
                    <h4>Contract Software Developer</h4>
                    <p>Nov. 2020 - Sept. 2021</p>
                    <p>While working with Ordrslip, I had the opportunity to work on SAAS applications that provided services for clients. I quickly became a valued member of the team and contributed to both JavaScript and Python applications. In my experience with Ordrslip, I was able to learn and grow within their application suite by assisting in making improvements to both their workflow and client-side applications. I worked with various different APIs and displayed the data received in a meaningful way for both our clients and clients' customers. I was also able to pioneer new features in version releases creating code that interacted with new data by quickly adapting to the nomenclature and architecture of the applications.</p>
                </div>:
                <div style={{ margin: "0 5px" }}>
                    <h4>Mentor</h4>
                    <p>Oct. 2019 - Jan. 2021</p>
                    <p>Regularly refresh my recollection on in-demand frameworks and libraries for JavaScript, Java, and C# to guide students to be job-ready once they graduate. Communicate with students on a daily basis on topics between the subject matter, project planning, and time management helping them simulate being in a job position. Continuously identify and execute new opportunities for growth so I can execute my job more efficiently with better pass rates for my students. Help in troubleshooting problems while teaching students how to debug - a skill that students will always use in their tech career. Managed 20 to 50 students at a time by motivating them to pass their classes and work on personal projects so they can have a portfolio ready so they can enter the workforce.</p>
                </div>
            }
        </div>
    )
}

export default TabExperience;