import { Card } from '../../components/CourseCard/Card'
import { Header } from '../../components/header/header'
import { DarkBG, Container } from '../../App.styles'
import { useState } from 'react'
import * as S from './MainPage.styles'
import { getDatabase, ref, onValue } from 'firebase/database'
import { app } from '../../firebase'

const baseUrl =
  'https://fitness-pro-ae1f4-default-rtdb.europe-west1.firebasedatabase.app/'

// const db = getDatabase(app)

export const Main = () => {
  const db = getDatabase()
  const starCountRef = ref(db, '/')
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val()
    //  updateStarCount(postElement, data)
    console.log(data)
  })

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
          <S.MainList>
            <Card name={'Йога'} position={1}></Card>
            <Card name={'Стретчинг'} position={2}></Card>
            <Card name={'Танцевальный фитнес'} position={3}></Card>
            <Card name={'Степ-аэробика'} position={4}></Card>
            <Card name={'Бодифлекс'} position={5}></Card>
            <Card name={'Йога'} position={1}></Card>
            <Card name={'Стретчинг'} position={2}></Card>
          </S.MainList>
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
