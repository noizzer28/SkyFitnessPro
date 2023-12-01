import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  ModalWindow,
  ModalSuccess,
} from '../../components/ModalWindow/ModalWindow'
import { Header } from '../../components/header/header'
import { useSelector } from 'react-redux'
import { Loader } from '../../App.styles'
import { getDatabase, ref, set, update, push } from 'firebase/database'
import * as S from './Course.styles'

export const Сourse = () => {
  const { coursesObj } = useSelector((state) => state.courses)
  const { id } = useParams()
  return (
    <>
      <Header />
      {!coursesObj ? (
        <Loader></Loader>
      ) : (
        <CourseBlock course={coursesObj[id]} id={id}></CourseBlock>
      )}
    </>
  )
}
// формируем блок курса
const CourseBlock = ({ course, id }) => {
  const { email } = useSelector((state) => state.user)
  const userID = useSelector((state) => state.user.id)
  const [isOpenModalWindow, setOpenModalWindow] = useState(false)
  const [isSubscribed, setSubscribe] = useState(false)

  useEffect(() => {
    if (course.users) {
      setSubscribe(!!Object.keys(course.users).find((key) => key === userID))
    } else {
      setSubscribe(false)
    }
  }, [course])

  const subscribe = () => {
    if (!isSubscribed && email) {
      const db = getDatabase()
      push(ref(db, `/courses/${id}/users/${userID}`), {
        user: email,
      })
    }

    setOpenModalWindow((isOpenModalWindow) => !isOpenModalWindow)
  }
  if (isOpenModalWindow) {
    setTimeout(() => {
      setOpenModalWindow(false)
    }, 1500)
  }

  return (
    <>
      <S.CourseTop>
        <S.CourseImg src={`/img/${course.id}.png`} />
        <S.CourseTitle>{course.name}</S.CourseTitle>
      </S.CourseTop>
      <S.CourseAdvantages>
        <S.CourseHeaders>Подойдет для вас, если:</S.CourseHeaders>
        <S.ListAdvantages>
          {course.advantages.map((el, index) => {
            return (
              <S.ItemAdvantages key={index}>
                <div>
                  <S.ItemCircle>{index}</S.ItemCircle>
                </div>
                <S.ItemText>{el}</S.ItemText>
              </S.ItemAdvantages>
            )
          })}
        </S.ListAdvantages>
      </S.CourseAdvantages>
      <S.CourseDirections>
        <S.CourseHeaders>Направления:</S.CourseHeaders>
        <S.ListDirections>
          {course.directions.map((el) => {
            return <S.Items key={el}>{el}</S.Items>
          })}
        </S.ListDirections>
      </S.CourseDirections>
      <S.CourseDescription>{course.description1}</S.CourseDescription>
      <br />
      <S.CourseDescription>{course.description2}</S.CourseDescription>
      {course.descriptionList && (
        <S.ListDescription>
          {course.descriptionList.map((el) => {
            return <S.Items key={el}>{el}</S.Items>
          })}
        </S.ListDescription>
      )}
      <S.Footer>
        <S.FooterLeft>
          <S.FooterText>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </S.FooterText>
          {isSubscribed ? (
            'Поздравляем, вы записаны на курс'
          ) : (
            <S.FooterButton onClick={subscribe}>
              Записаться на тренировку
            </S.FooterButton>
          )}
        </S.FooterLeft>
        <S.FooterImg src="/img/handset.png" alt="handset" />
      </S.Footer>

      {isOpenModalWindow && (
        <ModalWindow
          setOpenModalWindow={setOpenModalWindow}
          childComponent={<ModalSuccess text={'Вы успешно записались!'} />}
        />
      )}
    </>
  )
}
