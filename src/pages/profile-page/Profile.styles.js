import { styled } from 'styled-components'
import { ButtonPurple } from '../../App.styles'

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 40px;
  margin-bottom: 75px;
`

export const Line = styled.p`
  color: #000;
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

export const ProfileButton = styled(ButtonPurple)`
  width: 275px;
`

export const CardPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: 48px;
  line-height: 56px;
`

export const CardList = styled.ul`
  display: grid;
  grid-template: auto/ repeat(3, 360px);
  justify-content: space-between;
  row-gap: 44px;
  margin-top: 20px;
`

export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 3;
`

export const inputChange = styled.input`
  width: 278px;
  height: 35px;
  border: none;
  border-bottom: 1px solid #d0cece;
  fill: none;
  outline: none;
  background: transparent;
  font-size: 18px;
`
export const ModalTitle = styled.h3`
  color: #000;
  font-size: 32px;
  line-height: 125%;
  margin-bottom: 40px;
`

export const ModalList = styled.ul`
  width: 278px;
`
export const ModalListItem = styled.li`
  position: relative;

  width: 100%;
  height: 76px;
  padding: 11px;
  border-radius: 26px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
export const TrainingItem = styled.h5`
  color: #000;
  text-align: center;
  font-size: 20px;
  line-height: 115%;
  letter-spacing: -0.05px;
  margin-bottom: 6px;
`
// export const TrainingName = styled.p`
//   color: #000;
//   text-align: center;
//   font-size: 16px;
//   line-height: 112.5%;
//   letter-spacing: 0.016px;
// `
export const TrainingDone = styled.div`
  width: 27px;
  height: 25px;
  position: absolute;
  top: 12px;
  right: 12px;
`
