import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Header } from '../../components/header/header'
import { ModalProfileChange } from '../../components/ModalProfileChange/ModalProfileChange'
import { Card } from '../../components/CourseCard/Card'
import { objArrList } from 'App'
import { ModalSuccess, ModalWindow } from 'components/ModalWindow/ModalWindow'
import { ModalError } from 'components/ModalWindow/ModalWindow'
import { useAuth } from 'hooks/use-auth'
import { Loader } from 'App.styles'
import * as S from './Profile.styles'

export const Profile = () => {
  const { courses } = useSelector((state) => state.courses)
  return (
    <>
      <Header></Header>
      {courses ? <ProfileBlock></ProfileBlock> : <Loader></Loader>}
    </>
  )
}

const ProfileBlock = () => {
  const { email, id } = useSelector((state) => state.user)
  const { courses } = useSelector((state) => state.courses)
  const [loginChange, setLoginChange] = useState(false)
  const [passwordChange, setPasswordChange] = useState(false)
  const [isSuccessModal, setSuccessModal] = useState(false)
  const [isModalError, setModalError] = useState('')

  // формируем список курсов
  let usersCoursesArr = []
  courses.map((item) => {
    if (item.users) {
      let arrList = []
      Object.entries(item.users).forEach(([key, value]) => {
        arrList.push(key)
      })
      if (arrList.includes(id)) {
        usersCoursesArr.push(item)
      }
    }
  })
  const mapCoursesList = usersCoursesArr.map((courseCard) => (
    <Card
      key={courseCard.id}
      id={courseCard.id}
      name={courseCard.name}
      typeMain={false}
    ></Card>
  ))
  if (isSuccessModal) {
    setTimeout(() => {
      setSuccessModal(false)
      setPasswordChange(false)
      setLoginChange(false)
    }, 2000)
  }

  // фомирует "начинку" всплывающего окна
  let window
  if (isSuccessModal) {
    window = (
      <ModalSuccess
        text={`${loginChange ? 'Логин' : 'Пароль'} успешно изменен!`}
      />
    )
  } else if (isModalError) {
    window = (
      <ModalError
        text={`Не удалось изменить пароль по причине: ${isModalError}`}
      />
    )
  } else {
    window = (
      <ModalProfileChange
        type={loginChange ? 'логин' : 'пароль'}
        setSuccessModal={setSuccessModal}
        setModalError={setModalError}
      />
    )
  }

  // закрывает модальные окна
  function closeWindows() {
    setLoginChange(false)
    setPasswordChange(false)
    setModalError(false)
  }
  return (
    <>
      <S.ProfileInfo>
        <S.Title>Мой профиль</S.Title>
        <S.AllLines>
          <S.Line>Логин: {email}</S.Line>
          {/* <S.Line>Пароль: 4fkhdj880d</S.Line> */}
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
        {mapCoursesList.length > 0 ? (
          <S.CardList>{mapCoursesList} </S.CardList>
        ) : (
          <S.CardPartText>Вы не записаны ни на один курс</S.CardPartText>
        )}
      </S.CardPart>
      {/* окно смены пароля или логина */}
      {(passwordChange || loginChange) && (
        <ModalWindow
          width={366}
          setOpenModalWindow={closeWindows}
          childComponent={window}
        />
      )}
    </>
  )
}

// всплывающее окно выбора тренировок
export const WorkoutSelectionWindow = ({ idCourse }) => {
  const { coursesObj } = useSelector((state) => state.courses)
  const workoutListObj = coursesObj[idCourse].workout
  const workoutListArr = objArrList(workoutListObj)

  return (
    <>
      <S.ModalTitle>Выберите тренировку</S.ModalTitle>
      <S.ModalList>
        {workoutListArr.map((el, index) => {
          return (
            <S.ModalListItem key={el.url}>
              <Link to={`/workout/${idCourse}/${index + 1}`}>
                <S.ModalListLink>
                  <S.TrainingItem>{el.name}</S.TrainingItem>
                  {/* <S.TrainingName>
                    Йога на каждый день / {index + 1} день
                  </S.TrainingName> */}
                  {/* <S.TrainingDone>
                    <svg
                      width="28"
                      height="26"
                      viewBox="0 0 28 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="13.5" r="11.5" stroke="#06B16E" />
                      <path
                        d="M6 9.81034L11.775 15.5L27 0.5"
                        stroke="#06B16E"
                      />
                    </svg>{' '}
                  </S.TrainingDone> */}
                </S.ModalListLink>
              </Link>
            </S.ModalListItem>
          )
        })}
      </S.ModalList>
    </>
  )
}
