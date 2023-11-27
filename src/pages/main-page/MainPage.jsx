import { Card } from '../../components/CourseCard/Card'
import { Header } from '../../components/header/header'
import { DarkBG, Container } from '../../App.styles'
import { useState } from 'react'
// import { getCoursesApi } from 'api'
import { useSelector } from 'react-redux'
import * as S from './MainPage.styles'

export const Main = ({ error }) => {
  const { courses } = useSelector((state) => state.courses)

  // формируем список курсов
  const mapCoursesList = courses?.map((courseCard, index) => (
    <Card
      key={courseCard._id}
      name={courseCard.name}
      position={index + 1}
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
            <S.Loader></S.Loader>
          ) : (
            <S.MainList>
              {mapCoursesList}
              {/* <Card name={'Йога'} position={1}></Card>
            <Card name={'Стретчинг'} position={2}></Card>
            <Card name={'Танцевальный фитнес'} position={3}></Card>
            <Card name={'Степ-аэробика'} position={4}></Card>
            <Card name={'Бодифлекс'} position={5}></Card> */}
            </S.MainList>
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
