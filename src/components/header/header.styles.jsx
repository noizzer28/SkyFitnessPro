import styled from 'styled-components'

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
`
export const HeaderUserLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(165, 163, 163);
`
export const HeaderName = styled.p`
  margin-left: 15px;
  font-size: 24px;
  margin-right: 12px;
`
export const HeaderButton = styled.div`
  cursor: pointer;
  position: relative;
`

export const EnterButton = styled.button`
  width: 77px;
  height: 36px;
  font-size: 16px;
  background-color: #140d40;
`
export const Dropdown = styled.div`
  position: relative;
`
export const DropdownMenu = styled.ul`
  position: absolute;
  width: 200px;
  left: -185px;
  top: 50px;
  background-color: #e9d4ff;
  border-radius: 10px;
  padding: 15px 35px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`
export const DropdownMenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    text-decoration: underline;
  }
`
