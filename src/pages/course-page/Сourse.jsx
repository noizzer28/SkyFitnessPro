import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ModalSuccess } from '../../components/ModalSuccess/ModalSuccess'
import { Header } from '../../components/header/header'
import { useSelector } from 'react-redux'
import { Cources } from '../../utils/mock-course-page'
import * as S from './Course.styles'

export const Сourse = () => {
  const { id } = useParams()
  const [isSuccessWindow, setSuccessWindow] = useState(false)
  const { courses } = useSelector((state) => state.courses)
  console.log(courses)

  const toggleModeWindow = () => {
    setSuccessWindow((isSuccessWindow) => !isSuccessWindow)
  }
  const pageCourseObject = Cources[Number(id - 1)]
  console.log(id)
  console.log(pageCourseObject)
  return (
    <>
      <Header />
      <S.CourseInfoPage>
        <S.CourseTop>
          <S.CourseImg src="/img/yoga.png" alt="yoga" />
          <S.CourseTitle>{pageCourseObject.title}</S.CourseTitle>
        </S.CourseTop>
        <S.CourseAdvantages>
          <S.CourseHeaders>Подойдет для вас, если:</S.CourseHeaders>
          <S.ListAdvantages>
            {pageCourseObject.advantages.map((el) => {
              return (
                <S.ItemAdvantages key={el.num}>
                  <div>
                    <S.ItemCircle>{el.num}</S.ItemCircle>
                  </div>
                  <S.ItemText>{el.text}</S.ItemText>
                </S.ItemAdvantages>
              )
            })}
          </S.ListAdvantages>
        </S.CourseAdvantages>
        <S.CourseDirections>
          <S.CourseHeaders>Направления:</S.CourseHeaders>
          <S.ListDirections>
            {pageCourseObject.directions.map((el) => {
              return (
                <S.ItemDirections key={el.list}>{el.text}</S.ItemDirections>
              )
            })}
          </S.ListDirections>
        </S.CourseDirections>
        <S.CourseDescription>
          {pageCourseObject.description}
        </S.CourseDescription>
        <S.Footer>
          <S.FooterLeft>
            <S.FooterText>
              Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
              выбором направления и тренера, с которым тренировки принесут
              здоровье и радость!
            </S.FooterText>
            <S.FooterButton onClick={toggleModeWindow}>
              Записаться на тренировку
            </S.FooterButton>
          </S.FooterLeft>
          <S.FooterImg src="/img/handset.png" alt="handset" />
        </S.Footer>
      </S.CourseInfoPage>
      {isSuccessWindow ? (
        <S.ModalBackground>
          <ModalSuccess
            setSuccessWindow={setSuccessWindow}
            text={'Вы успешно записались!'}
          />
        </S.ModalBackground>
      ) : (
        ''
      )}
    </>
  )
}
