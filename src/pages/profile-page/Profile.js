import { Header } from '../../components/header/header'
import * as S from './Profile.styles'
export const Profile = () => {
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
          <S.ProfileButton>Редактировать логин</S.ProfileButton>
          <S.ProfileButton>Редактировать пароль</S.ProfileButton>
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
    </S.Container>
  )
}
