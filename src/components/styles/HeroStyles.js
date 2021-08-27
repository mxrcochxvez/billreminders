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
  padding: 5px 40px;

  border-radius: 32px;
  background: rgba(0,0,0,.4);
  box-shadow: 5px 5px 15px rgba(0,0,0,.4);
`

export const HeroInnerTitle = styled.h1``

export const HeroDescription = styled.p`
  text-align: center;
`

export const ScrollDown = styled.span`
  position: absolute;
  bottom: 20px;
  font-size: 2rem;

  animation-name: fadeIn;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`