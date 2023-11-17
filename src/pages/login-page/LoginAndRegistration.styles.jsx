import styled from 'styled-components'
import { ButtonPurple } from '../../App.styles'

export const PageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background: #271a58;
`

export const ModalForm = styled.div`
  --modal-width: 366px;
  --modal-height: 439px;

  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
`
export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 38px;
  background-color: transparent;
`

export const ModalLogoImage = styled.img`
  width: 220px;
  height: 35px;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 100%;
`

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
`

export const PrimaryButton = styled(ButtonPurple)``

export const SecondaryButton = styled(ButtonPurple)`
  color: #000000;
  background-color: transparent;
  border: 1px solid #d0cece;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`
