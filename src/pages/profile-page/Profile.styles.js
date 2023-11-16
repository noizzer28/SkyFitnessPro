import { styled } from 'styled-components';

export const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  export const Container = styled.div`
    /* padding-left: 140px;
    padding-right: 140px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1160px;
    gap: 75px;
  `

  export const ProfileInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 40px;
  `

  export const Line = styled.p`
    color: #000;
    font-family: StratosSkyeng;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  `

  export const AllButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
  `

  export const AllLines = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `

  export const ProfileButton = styled.button`
    width: 275px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 46px;
    background: #580EA2;
    color: #FFF;
    font-family: StratosSkyeng;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    letter-spacing: -0.05px;
    border: 0;
  `

  export const CardPart = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `

  export const Header = styled.h2`
    color: #000;
    font-family: StratosSkyeng;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px; 
  `

  export const CardList = styled.div`
    display: grid;
    grid-template-columns: 360px 360px 360px;
  `

  export const Card = styled.div`
    position: relative;
  `

  export const Image = styled.img`
    width: 360px;
    height: 480px;
  `

  export const RedirectButton = styled.button`
    height: 43px;
    width: 136px;
    position: absolute;
    left: 50px;
    bottom: 50px;
    display: inline-flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 80px;
    background: #C7E957;
    border: 0;
    &:hover {
        background-color: #DAF289;
      }
  `

  export const TitleCard = styled.p`
    position: absolute;
    left: 50px;
    top: 50px;
    color: #000;
    font-family: Abhaya Libre ExtraBold;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%; 
    letter-spacing: -0.5px;
  `
