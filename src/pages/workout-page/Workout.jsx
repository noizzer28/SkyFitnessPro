import { Header } from '../../components/header/header'
import { useState, useEffect } from 'react'
import {
  ModalWindow,
  ModalSuccess,
} from '../../components/ModalWindow/ModalWindow'
import { useSelector } from 'react-redux'
import { Loader } from '../../App.styles'
import { useParams } from 'react-router-dom'
import * as S from './workout.styles'
import { getDatabase, ref, set, update, add } from 'firebase/database'

export const Workout = () => {
  const { course } = useParams()
  const { id } = useParams()
  const { coursesObj } = useSelector((state) => state.courses)

  return (
    <>
      <Header />
      {!coursesObj ? (
        <Loader></Loader>
      ) : (
        <WorkoutBlock idCourse={course} idWorkout={id}></WorkoutBlock>
      )}
    </>
  )
}

export const WorkoutBlock = ({ idWorkout, idCourse }) => {
  const { coursesObj } = useSelector((state) => state.courses)
  const db = getDatabase()
  const userId = useSelector((state) => state.user.id)
  const [isModal, setModal] = useState(false)
  const [isSuccessModal, setSuccessModal] = useState(false)

  const programm = coursesObj[idCourse]
  const workout = programm.workout[idWorkout]
  console.log('workout', workout)

  let exercices = []
  if (!!workout.exercices) {
    exercices = workout.exercices.filter(
      (item) => item !== null && item !== undefined && item !== '',
    )
  }
  console.log('exercices', exercices)
  const progressBarStyles = [
    { base: '#EDECFF', top: '#565EEF' },
    { base: '#FFF2E0', top: '#FF6D00' },
    { base: '#F9EBFF', top: '#9A48F1' },
  ]

  const progressState = exercices.map((item, index) => {
    const progress = Math.floor((item.userInput / item.repeat) * 100)
    return {
      id: index,
      userInput: item.userInput,
      percentProgress: progress > 100 ? 100 : progress,
      totalValue: item.repeat,
    }
  })

  const [progressValue, setProgressValue] = useState(progressState)

  const toggleModal = () => {
    setModal((prevValue) => (prevValue = !prevValue))
  }

  const handleProgress = () => {
    setProgressValue((prevData) =>
      prevData.map((item) => {
        if (item.totalValue <= item.userInput) {
          return { ...item, percentProgress: 100 }
        } else {
          return {
            ...item,
            percentProgress: Math.floor(
              (item.userInput / item.totalValue) * 100,
            ),
          }
        }
      }),
    )

    progressValue.map((item, index) => {
      console.log(item.userInput)
      update(
        ref(
          db,
          `/courses/${programm.id}/workout/${idWorkout}/exercices/${
            index + 1
          }/users/${userId}`,
        ),
        {
          userInput: item.userInput,
        },
      )
    })

    setSuccessModal((prevValue) => (prevValue = !prevValue))
    setTimeout(() => {
      setModal((prevValue) => (prevValue = !prevValue))
      setSuccessModal((prevValue) => (prevValue = !prevValue))
    }, 1500)
  }

  const updateProgressValue = (id, newValue) => {
    setProgressValue((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, userInput: newValue } : item,
      ),
    )
  }

  function convertYouTubeLink(link) {
    const prefix = 'https://youtu.be/'
    const index = link.indexOf(prefix)

    if (index !== -1) {
      const videoCode = link.substring(index + prefix.length)
      const embedLink = `https://www.youtube.com/embed/${videoCode}`
      return embedLink
    } else {
      return link
    }
  }

  return (
    <>
      {isModal && (
        <S.ModalBackground onClick={toggleModal}>
          {!isSuccessModal ? (
            <S.ModalProgress onClick={(e) => e.stopPropagation()}>
              <S.ModalHeader>Мой прогресс</S.ModalHeader>
              {exercices.map((item, index) => {
                return (
                  <S.ModalBlock key={index}>
                    <S.Modaltext>
                      Сколько раз вы сделали{' '}
                      {item.name
                        .replace(/\(\d+ повторений\)/, '')
                        .trim()
                        .toLowerCase()}
                      ?
                    </S.Modaltext>
                    <S.ModalInput
                      type="number"
                      placeholder="Введите числовое значение"
                      onChange={(e) =>
                        updateProgressValue(index, e.target.value)
                      }
                    ></S.ModalInput>
                  </S.ModalBlock>
                )
              })}
              <S.ModalButton onClick={handleProgress}>Отправить</S.ModalButton>
            </S.ModalProgress>
          ) : (
            <ModalWindow
              setOpenModalWindow={toggleModal}
              childComponent={<ModalSuccess text={'Ваш прогресс засчитан!'} />}
            />
          )}
        </S.ModalBackground>
      )}

      <S.Center>
        <S.CenterHeader>{programm.name}</S.CenterHeader>
        <S.BreadCrumps>
          <S.BreadCrumpsItem>{workout.name}</S.BreadCrumpsItem>
        </S.BreadCrumps>
        <S.Video>
          <iframe
            width="1160"
            height="639"
            src={convertYouTubeLink(workout.url)}
            title="Красота и здоровье / Йога на каждый день / 2 день / Алексей Казубский"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </S.Video>
        {exercices.length > 0 && (
          <S.CenterBottom>
            <S.Exercises>
              <S.ExercisesHeader>Упражнения</S.ExercisesHeader>
              <S.ExercisesList>
                {exercices.map((item, index) => {
                  return (
                    <S.ExercisesListItem key={index}>
                      {item.name}
                    </S.ExercisesListItem>
                  )
                })}
              </S.ExercisesList>
              <S.ProgressButton onClick={toggleModal}>
                Заполнить свой прогресс
              </S.ProgressButton>
            </S.Exercises>
            <S.Progress>
              <S.ProgressHeader>Мой прогресс по тренировке:</S.ProgressHeader>
              <S.ProgressCenter>
                {exercices.map((item, index) => {
                  const { base, top } =
                    progressBarStyles[index % progressBarStyles.length]
                  return (
                    <S.ProgressFlex key={index}>
                      <S.ProgressText>
                        {item.name.replace(/\(\d+ повторений\)/, '').trim()}
                      </S.ProgressText>
                      <S.ProgressBar
                        style={{ backgroundColor: base, borderColor: top }}
                      >
                        <S.ProgressBarTop
                          style={{ backgroundColor: top }}
                          width={progressValue[index].percentProgress}
                        >
                          {progressValue[index].percentProgress > 20 ? (
                            <S.ProgressPercentage>
                              {`${progressValue[index].percentProgress}%`}
                            </S.ProgressPercentage>
                          ) : (
                            <S.ProgressPercentage
                              style={{ right: '-55px', color: '#3f007d' }}
                            >
                              {`${progressValue[index].percentProgress}%`}
                            </S.ProgressPercentage>
                          )}
                        </S.ProgressBarTop>
                      </S.ProgressBar>
                    </S.ProgressFlex>
                  )
                })}
              </S.ProgressCenter>
            </S.Progress>
          </S.CenterBottom>
        )}
      </S.Center>
    </>
  )
}
