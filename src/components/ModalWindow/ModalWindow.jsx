import * as S from './ModalWindow.styles'

export const ModalWindow = ({ setOpenModalWindow, childComponent, width }) => {
  const handleChangeOpen = () => {
    setOpenModalWindow((isOpenModalWindow) => !isOpenModalWindow)
  }
  return (
    <S.ModalBackground>
      <S.ModalContent style={{ width: `${width}px` }}>
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
