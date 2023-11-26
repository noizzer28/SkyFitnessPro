import { styled, keyframes } from 'styled-components'
import { ButtonPurple } from '../../App.styles'

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -40px;
  margin-bottom: 52px;
`
export const TitleBlockContent = styled.div`
  width: 830px;
`
export const TitleBlockTitle = styled.h3`
  color: var(--monochrome-white-20);
  font-size: 20px;
  font-weight: 400;
  line-height: 115%;
  letter-spacing: -0.05px;
  opacity: 0.5;
  margin-bottom: 17px;
`
export const TitleBlockSlogan = styled.h1`
  color: #f4f4ff;
  font-size: 60px;
  line-height: 91.5%;
  letter-spacing: -1.169px;
`
export const SaleSticker = styled.div`
  position: relative;
  width: 212.27px;
  height: 151.741px;
  transform: rotate(15.957deg);
  top: 23px;
  right: -50px;
`

export const SaleStickerText = styled.p`
  position: absolute;
  color: #ff8071;
  text-align: center;
  font-size: 20px;
  line-height: 90%;
  letter-spacing: -0.15px;
  left: 18%;
  top: 38%;
`
export const MainList = styled.ul`
  display: grid;
  grid-template: auto/ repeat(3, 360px);
  justify-content: space-between;
  row-gap: 44px;
  margin-bottom: 34px;
`
export const MainFooter = styled.div`
  display: flex;
  justify-content: center;
`
export const BlockError = styled.div`
  color: var(--orange-90);
  font-size: 30px;
`
export const MainButton = styled(ButtonPurple)`
  width: 147px;
  height: 48px;
  margin-bottom: 60px;
  border-radius: 46px;
  background: #c7e957;
  color: #000;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.1px;
  &:hover {
    background: #daf289;
  }
  & active {
    background: #ebffab;
  }
`
const moveY = keyframes`
0% , 100% {top: 10%}
45% , 55% {top: 59%}
60% {top: 40%}	    
`
const rotate = keyframes`
0% { transform: translate(-50%, -100%) rotate(0deg) scale(1 , 1)}
 25%{ transform: translate(-50%, 0%) rotate(180deg) scale(1 , 1)}
 45% , 55%{ transform: translate(-50%, 100%) rotate(180deg) scale(3 , 0.5)}
 60%{ transform: translate(-50%, 100%) rotate(180deg) scale(1, 1)}
 75%{ transform: translate(-50%, 0%) rotate(270deg) scale(1 , 1)}
 100%{ transform: translate(-50%, -100%) rotate(360deg) scale(1 , 1)}	    
`
export const Loader = styled.div`
  position: relative;
  top: 10vh;
  left: calc(50% - 50px);
  width: 164px;
  height: 164px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #00c1ff;
    left: 50%;
    top: 50%;
    animation: ${rotate} 1s ease-in infinite;
  }
  &::after {
    width: 20px;
    height: 20px;
    background-color: #bcec30;
    animation:
      ${rotate} 1s ease-in infinite,
      ${moveY} 1s ease-in infinite;
  }
`
