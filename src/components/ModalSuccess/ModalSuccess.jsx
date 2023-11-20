import * as S from './ModalSuccess.styles'

export const ModalSuccess = ({ setSuccessWindow, text }) => {
  const handleChangeOpen = () => {
    setSuccessWindow((isSuccessWindow) => !isSuccessWindow)
  }
  return (
    <S.ModalSuccess>
      <S.ModalSuccessHeader>{text}</S.ModalSuccessHeader>
      <S.ModalSuccessPicture>
        <S.ModalSuccessImg src="/img/progressOk.png" />
      </S.ModalSuccessPicture>
      <S.ModalSuccessButton onClick={handleChangeOpen}>X</S.ModalSuccessButton>
    </S.ModalSuccess>
  )
}
