import { Card } from '../../components/CourseCard/Card'
import { Header } from '../../components/header/header'
import { DarkBG, Container } from '../../App.styles'
import { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, child, get } from 'firebase/database'
// import { getCourses } from 'api'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './MainPage.styles'
import { setCourses } from 'store/slices/coursesSlice'

export const Main = () => {
  const { courses } = useSelector((state) => state.courses)
  const dispatch = useDispatch()

  // преобразуем объект в массив
  const objArrList = (data) => {
    let arrList = []
    const abjArr = Object.entries(data).forEach(([key, value]) => {
      arrList.push(value)
    })
    return arrList
  }

  const getCourses = () => {
    const db = getDatabase()
    const starCountRef = ref(db, '/courses')
    onValue(starCountRef, (snapshot) => {
      const coursesList = objArrList(snapshot.val())
      dispatch(
        setCourses({
          courses: coursesList,
        }),
      )
    })
  }

  useEffect(() => {
    getCourses()
  }, [])

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
          {!courses ? (
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
