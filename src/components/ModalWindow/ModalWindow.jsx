import * as S from './ModalWindow.styles'

export const ModalWindow = ({ setSuccessWindow, childComponent }) => {
  const handleChangeOpen = () => {
    setSuccessWindow((isSuccessWindow) => !isSuccessWindow)
  }
  return (
    <S.ModalBackground>
      <S.ModalContent>
        {childComponent}
        <S.ModalCloseButton onClick={handleChangeOpen}>X</S.ModalCloseButton>
      </S.ModalContent>
    </S.ModalBackground>
  )
}

export const ModalSuccess = ({ text }) => {
  return (
    <>
      <S.ModalSuccessHeader>{text}</S.ModalSuccessHeader>
      <S.ModalSuccessPicture>
        <S.ModalSuccessImg src="/img/progressOk.png" />
      </S.ModalSuccessPicture>
    </>
  )
}
