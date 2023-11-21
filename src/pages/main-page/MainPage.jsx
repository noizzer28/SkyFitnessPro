import { Card } from '../../components/CourseCard/Card'
import { Header } from '../../components/header/header'
import { DarkBG } from '../../App.styles'
import * as S from './MainPage.styles'

const imagePath = process.env.PUBLIC_URL + '/img/'

export const Main = () => {
  return (
    <>
      <DarkBG>
        <S.ContainerMain>
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
              <img src={imagePath + 'sale-sticker.png'}></img>
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
          </S.MainList>
          <S.MainButton>кнопочка Наверх ↑</S.MainButton>
        </S.ContainerMain>
      </DarkBG>
    </>
  )
}
