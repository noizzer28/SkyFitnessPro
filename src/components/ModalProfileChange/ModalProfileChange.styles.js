import styled from 'styled-components'
import { ButtonPurple } from '../../App.styles'

export const ModalForm = styled.div``
export const ModalHeader = styled.h2`
  text-align: left;
  font-size: 22px;
  line-height: 133.333%;
  letter-spacing: -0.05px;
  color: #000;
  margin-bottom: 20px;
`

export const InputChange = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  fill: none;
  outline: none;
  background: transparent;
  font-size: 22px;
  padding: 8px 1px;
  margin-bottom: 22px;
  &::placeholder {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`
export const ModalErrorText = styled.p`
  color: red;
  font-size: 18px;
  width: 100%;
  flex-grow: 1;
  position: absolute;
  bottom: 110px;
  left: 50px;
`
export const SendButton = styled(ButtonPurple)`
  margin-top: 28px;
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
