import { styled } from 'styled-components'

export const Wrapper = styled.div`
  background: #271a58;
  height: 100vh;
  max-width: 1190px;
  padding: 0 15px;
  margin: 0 auto;
`
export const Header = styled.div`
  font-size: 50px;
  height: 100px;
  color: #fff;
`
export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
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
export const MainButton = styled.div`
  width: 200px;
  margin: 0 auto;
`
