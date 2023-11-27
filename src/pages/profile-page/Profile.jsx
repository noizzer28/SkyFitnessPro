import { Header } from '../../components/header/header'
import { ModalProfileChange } from '../../components/ModalProfileChange/ModalProfileChange'
import { useState } from 'react'

export const Profile = () => {
  const [loginChange, setLoginChange] = useState(false)
  const [passwordChange, setPasswordChange] = useState(false)

  return (
    <S.Container>
      <Header></Header>
      <S.ProfileInfo>
        <S.Title>Мой профиль</S.Title>
        <S.AllLines>
          <S.Line>Логин: sergey.petrov96</S.Line>
          <S.Line>Пароль: 4fkhdj880d</S.Line>
        </S.AllLines>
        <S.AllButtons>
          <S.ProfileButton onClick={() => setLoginChange(true)}>
            Редактировать логин
          </S.ProfileButton>
          <S.ProfileButton onClick={() => setPasswordChange(true)}>
            Редактировать пароль
          </S.ProfileButton>
        </S.AllButtons>
      </S.ProfileInfo>
      <S.CardPart>
        <S.Title>Мои курсы</S.Title>
        <S.CardList>
          <S.Card>
            <S.Image src="/img/cardBG_1.png"></S.Image>
            <S.RedirectButton>Перейти →</S.RedirectButton>
            <S.TitleCard>Йога</S.TitleCard>
          </S.Card>
          <S.Card>
            <S.Image src="/img/cardBG_2.png"></S.Image>
            <S.RedirectButton>Перейти →</S.RedirectButton>
            <S.TitleCard>Стречинг</S.TitleCard>
          </S.Card>
          <S.Card>
            <S.Image src="/img/cardBG_5.png"></S.Image>
            <S.RedirectButton>Перейти →</S.RedirectButton>
            <S.TitleCard>Бодифлекс</S.TitleCard>
          </S.Card>
        </S.CardList>
      </S.CardPart>
      {loginChange ? (
        <S.ModalBackground>
          <ModalProfileChange toggleOpen={setLoginChange} text={'Новый логин:'}>
            <S.inputChange placeholder="Логин"></S.inputChange>
          </ModalProfileChange>
        </S.ModalBackground>
      ) : (
        ''
      )}
      {passwordChange ? (
        <S.ModalBackground>
          <ModalProfileChange
            toggleOpen={setPasswordChange}
            text={'Новый пароль:'}
          >
            <S.inputChange placeholder="Пароль"></S.inputChange>
            <S.inputChange placeholder="Повторите пароль"></S.inputChange>
          </ModalProfileChange>
        </S.ModalBackground>
      ) : (
        ''
      )}
    </S.Container>
  )
}
