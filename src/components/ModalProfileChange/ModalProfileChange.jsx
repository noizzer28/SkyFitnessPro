import * as S from './ModalProfileChange.styles'



export const ModalProfileChange = ({ onSubmit, children, toggleOpen, text }) => {
  const handleChangeOpen = () => {
    toggleOpen((isOpen) => !isOpen)
  }
  return (
    <S.Modal onSubmit={onSubmit}>
            <S.ModalImg src="/img/logo_modal.png" />
        <S.ModalLines>
            <S.ModalHeader>{text}</S.ModalHeader>
            {children}
      </S.ModalLines>
      <S.ModalButton onClick={handleChangeOpen}>X</S.ModalButton>
      <S.SendButton>Отправить</S.SendButton>
    </S.Modal>
  )
}
