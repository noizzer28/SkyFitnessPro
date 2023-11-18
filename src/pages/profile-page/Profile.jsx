import * as S from './Profile.styles'
export const Profile = () => {

  return (
    <S.Section>
      <S.Container>
          <S.ProfileInfo>
            <S.Header>Мой профиль</S.Header>
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
          <S.Header>Мои курсы</S.Header>
          <S.CardList>
            <S.Card>
              <S.Image  src="/workoutcard2.png"></S.Image>
              <S.RedirectButton>Перейти {'->'}</S.RedirectButton>
              <S.TitleCard>Йога</S.TitleCard>
            </S.Card>
            <S.Card>
              <S.Image src="/workoutcard3.png"></S.Image>
              <S.RedirectButton>Перейти {'->'}</S.RedirectButton>
              <S.TitleCard>Стречинг</S.TitleCard>
            </S.Card>
            <S.Card>
              <S.Image src="/profcard30.png"></S.Image>
              <S.RedirectButton>Перейти {'->'}</S.RedirectButton>
              <S.TitleCard>Бодифлекс</S.TitleCard>
            </S.Card>
          </S.CardList>
        </S.CardPart>
      </S.Container>
    </S.Section>
  )
}
