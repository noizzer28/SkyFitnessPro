import { Header } from '../../components/header/header'
import * as S from './workout.styles'
import { useState } from 'react'
import {
  ModalWindow,
  ModalSuccess,
} from '../../components/ModalWindow/ModalWindow'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../App.styles'
import { useParams } from 'react-router-dom'

export const Workout = () => {
  const { id } = useParams()
  const { coursesObj } = useSelector((state) => state.courses)

  return (
    <>
      <Header />
      {!coursesObj ? <Loader></Loader> : <WorkoutBlock id={id}></WorkoutBlock>}
    </>
  )
}

export const WorkoutBlock = ({ id }) => {
  // Здесь будет два useparams, один с id, второй с courses например, предполагаю что ссылка должна выглядеть как
  // workout/:course/:id

  const { courses } = useSelector((state) => state.courses)
  const [isModal, setModal] = useState(false)
  const [isSuccessModal, setSuccessModal] = useState(false)
  //Здесть будет какой нибудь айдишник курса полученный из модалки профиля
  const programm = courses[Number(id - 1)]

  //вместо йога2 -  айди тренировки из useparams, пока хардкод
  const workout = programm.workout.yoga2
  //   console.log(workout)
  // Данные из firebase приходят с пустыми ячейками, приходится фильтровать, иначе приходят пустые индексы
  const exercises = workout.exercises.filter(
    (item) => item !== null && item !== undefined && item !== '',
  )
  //   console.log(exercises)

  const progressBarStyles = [
    { base: '#EDECFF', top: '#565EEF' },
    { base: '#FFF2E0', top: '#FF6D00' },
    { base: '#F9EBFF', top: '#9A48F1' },
  ]

  const progressState = exercises.map((item, index) => {
    return {
      id: index,
      userInput: 0,
      percentProgress: 0,
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
  //В документе представлены прямые ссылки на ютуб, которые не будут работать без преобразования
  function convertYouTubeLink(link) {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=|watch\?v=))([^"&?\/\s]{11})/
    const match = link.match(regex)
    if (match && match[1]) {
      const embedLink = `https://www.youtube.com/embed/${match[1]}`
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
              {exercises.map((item, index) => {
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
              setSuccessWindow={toggleModal}
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
        <S.CenterBottom>
          <S.Exercises>
            <S.ExercisesHeader>Упражнения</S.ExercisesHeader>
            <S.ExercisesList>
              {exercises.map((item, index) => {
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
              {exercises.map((item, index) => {
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
      </S.Center>
    </>
  )
}
