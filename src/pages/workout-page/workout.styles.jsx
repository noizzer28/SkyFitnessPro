import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 1160px;
`
export const Center = styled.div`
  padding-top: 75px;
`
export const CenterHeader = styled.h1`
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 30px;
`
export const Video = styled.div`
  margin-top: 40px;
`
export const BreadCrumps = styled.ul`
  font-size: 32px;
  line-height: 40px;
  display: flex;
`
export const BreadCrumpsItem = styled.li`
  position: relative;
  margin-right: 30px;
  &:not(:first-child)::before {
    content: ' / ';
    position: absolute;
    left: -20px;
  }
  &:hover {
    text-decoration: underline;
  }
`
export const CenterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
`
export const Exercises = styled.div``
export const ExercisesHeader = styled.h3`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 30px;
`
export const ExercisesList = styled.ul`
  margin-left: 40px;
  margin-bottom: 40px;
`
export const ExercisesListItem = styled.li`
  font-size: 24px;
  line-height: 32px;
  list-style-type: disc;
  max-width: 380px;
`
export const ProgressButton = styled.button`
  width: 275px;
  height: 52px;
`

export const Progress = styled.div`
  width: 638px;
  height: 336px;
  border-radius: 30px;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProgressHeader = styled.div`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 40px;
`
export const ProgressCenter = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const ProgressFlex = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ProgressText = styled.p`
  max-width: 220px;
  font-size: 24px;
  line-height: 32px;
`
export const ProgressBar = styled.div`
  width: 278px;
  height: 36px;
  border-radius: 22px;
  border: 2px solid #565eef;
  background: #edecff;
  overflow: hidden;
`
export const ProgressBarOne = styled(ProgressBar)`
  border: 2px solid #565eef;
  background: #edecff;
`
export const ProgressBarTwo = styled(ProgressBar)`
  border: 2px solid var(--orange-90, #ff6d00);
  background: var(--orange-10, #fff2e0);
`
export const ProgressBarThree = styled(ProgressBar)`
  border: 2px solid var(--palette-purple-80, #9a48f1);
  background: var(--violet-10, #f9ebff);
`
export const ProgressBarTop = styled.div`
  height: 36px;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`

export const ProgressBarTopOne = styled(ProgressBarTop)`
  width: ${(props) => props.width || '0'}%;
  background-color: #565eef;
`
export const ProgressBarTopTwo = styled(ProgressBarTop)`
  width: ${(props) => props.width || '0'}%;
  background-color: #ff6d00;
`
export const ProgressBarTopThree = styled(ProgressBarTop)`
  width: ${(props) => props.width || '0'}%;
  background-color: #9a48f1;
`
export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`
export const ModalProgress = styled.div`
  width: 444px;
  height: 544px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  gap: 30px;
`
export const Modaltext = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
`
export const ModalHeader = styled.h2`
  font-size: 32px;
  line-height: 40px;
  margin-top: 30px;
`
export const ModalInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid #d0cece;
  padding: 5px;
  width: 100%;
  margin-top: 20px;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const ModalBlock = styled.div`
  width: 361px;
`
export const ModalButton = styled.button`
  width: 278px;
  height: 52px;
`
