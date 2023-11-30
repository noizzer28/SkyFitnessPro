import styled from 'styled-components'
import { ButtonPurple } from '../../App.styles'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  margin-bottom: 50px;
`
export const HeaderLogo = styled.div`
  display: flex;
  cursor: pointer;
`
export const HeaderLogoText = styled.p`
  color: #000;
  font-size: 30px;
  font-weight: 600;
`
export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const HeaderUserLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgb(165, 163, 163);
`
export const HeaderUserImg = styled.img`
  width: 50px;
  height: 50px;
`
export const HeaderName = styled.p`
  margin-left: 15px;
  font-size: 24px;
  margin-right: 12px;
`
export const HeaderButton = styled.div`
  position: relative;
`
export const EnterButton = styled(ButtonPurple)`
  width: 77px;
  height: 36px;
  font-size: 16px;
  background: #140d40;
  &:hover {
    background: #2d1f79;
  }
  &:active {
    background: #3b29a1;
  }
`
export const Dropdown = styled.nav`
  position: absolute;
`
export const DropdownMenu = styled.ul`
  position: relative;
  padding: 0 30px 20px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 200px;
  right: -80px;
  top: 80px;
  z-index: 3;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: 0.5s;

  ${(props) =>
    props.open &&
    `
	   opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    `};
`
export const DropdownMenuItem = styled.li`
  padding-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`
