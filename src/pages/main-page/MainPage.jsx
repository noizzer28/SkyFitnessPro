import { Card } from '../../components/CourseCard/Card'
import { Header } from '../../components/header/header'
import { DarkBG, Container, Loader } from '../../App.styles'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from './MainPage.styles'

export const Main = ({ error }) => {
  const { courses } = useSelector((state) => state.courses)
  // формируем список курсов
  const mapCoursesList = courses?.map((courseCard) => (
    <Card
      key={courseCard.id}
      name={courseCard.name}
      id={courseCard.id}
      typeMain={true}
    ></Card>
  ))

  // скрытие кнопки "Наверх ↑"
  const [offSet, setOffSet] = useState('')
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setOffSet(true) : setOffSet(false)
  })

  return (
    <>
      <DarkBG>
        <Container>
          <Header></Header>
          <S.TitleBlock>
            <S.TitleBlockContent>
              <S.TitleBlockTitle>
                Онлайн-тренировки для занятий дома
              </S.TitleBlockTitle>
              <S.TitleBlockSlogan>
                Начните заниматься спортом и улучшите качество жизни
              </S.TitleBlockSlogan>
            </S.TitleBlockContent>
            <S.SaleSticker>
              <img src="/img/sale-sticker.png"></img>
              <S.SaleStickerText>
                Измени своё <br /> тело за полгода
              </S.SaleStickerText>
            </S.SaleSticker>
          </S.TitleBlock>
          {error && <S.BlockError>{error}</S.BlockError>}
          {!courses && !error ? (
            <Loader></Loader>
          ) : (
            <>
              <S.MainList>{mapCoursesList}</S.MainList>
            </>
          )}
          {offSet && (
            <S.MainFooter>
              <S.MainButton
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Наверх ↑
              </S.MainButton>
            </S.MainFooter>
          )}
        </Container>
      </DarkBG>
    </>
  )
}
