import styled from 'styled-components';
import fresno from '../../assets/downtownfresno.jpeg';

export const HeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  color: var(--white);
  height: 100vh;
  width: 100vw;

  background-image: url(${fresno});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const HeroInner = styled.div`
  margin-top: 30px;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #FFFFFF, 0 0 40px #FFFFFF, 0 0 50px #FFFFFF, 0 0 60px #FFFFFF, 0 0 70px #FFFFFF;
`

export const HeroInnerTitle = styled.h1`
  font-size: 3em;
  margin: 3rem 0 0 0;
  color: #754800;
`

export const HeroDescription = styled.p`
  text-align: center;
  color: #4d3800;
`

export const ScrollDown = styled.span`
  position: absolute;
  bottom: 20px;
  font-size: 2rem;

  animation-name: fadeIn;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`