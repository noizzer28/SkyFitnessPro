import styled from 'styled-components'
import { ButtonPurple } from '../../App.styles'

export const Modal = styled.form`
  position: relative;
  padding: 30px 40px 50px;
  width: 366px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  z-index: 2;
`
export const ModalHeader = styled.h2`
  text-align: left;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export const ModalLines = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`

export const ModalImg = styled.img`
  //   width: 220px;
  //   height: 35px;
  //   margin-bottom: 38px;
`
export const ModalButton = styled.button`
  position: absolute;
  border: none;
  background: none;
  color: #909090;
  top: 13px;
  right: 20px;
  font-size: 30px;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    color: #606060;
    background: none;
  }
`

export const SendButton = styled(ButtonPurple)`
  margin-top: 50px;
`
export const LogoText = styled.p`
  color: #000;
  font-size: 30px;
  font-weight: 600;
`
export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 38px;
  background-color: transparent;
`
