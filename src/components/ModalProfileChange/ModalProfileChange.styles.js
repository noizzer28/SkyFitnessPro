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
    width: 220px;
    height: 35px;
    margin-bottom: 38px;
`
export const ModalButton = styled.button`
  position: absolute;
  border: none;
  background: none;
  color:#909090;
  top: 15px;
  right: 15px;
  font-size: 30px;
  line-height: 40px;

  &:hover {
    color:#606060;
    background: none;
  }
`

export const SendButton = styled(ButtonPurple)`
    margin-top: 50px;
`