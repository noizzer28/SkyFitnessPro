import { Header } from '../../components/header/header'
import * as S from './workout.styles'
import { useState } from 'react'
import { ModalSuccess } from '../../components/ModalSuccess/ModalSuccess'

export const Workout = () => {
  const [isModal, setModal] = useState(false)
  const [progressValue, setProgressValue] = useState([
    { id: 1, userInput: 0, percentProgress: 0, totalValue: 10 },
    { id: 2, userInput: 0, percentProgress: 0, totalValue: 10 },
    { id: 3, userInput: 0, percentProgress: 0, totalValue: 5 },
  ])

  const [isSuccessModal, setSuccessModal] = useState(false)

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

  return (
    <div>
      {isModal && (
        <S.ModalBackground onClick={toggleModal}>
          {!isSuccessModal ? (
            <S.ModalProgress onClick={(e) => e.stopPropagation()}>
              <S.ModalHeader>Мой прогресс</S.ModalHeader>
              <S.ModalBlock>
                <S.Modaltext>
                  Сколько раз вы сделали наклоны вперед?
                </S.Modaltext>
                <S.ModalInput
                  type="number"
                  placeholder="Введите числовое значение"
                  onChange={(e) => updateProgressValue(1, e.target.value)}
                ></S.ModalInput>
              </S.ModalBlock>
              <S.ModalBlock>
                <S.Modaltext>Сколько раз вы сделали наклоны назад?</S.Modaltext>
                <S.ModalInput
                  type="number"
                  placeholder="Введите числовое значение"
                  onChange={(e) => updateProgressValue(2, e.target.value)}
                ></S.ModalInput>
              </S.ModalBlock>
              <S.ModalBlock>
                <S.Modaltext>
                  Сколько раз вы сделали поднятие ног, согнутых в коленях?
                </S.Modaltext>
                <S.ModalInput
                  type="number"
                  placeholder="Введите числовое значение"
                  onChange={(e) => updateProgressValue(3, e.target.value)}
                ></S.ModalInput>
              </S.ModalBlock>
              <S.ModalButton onClick={handleProgress}>Отправить</S.ModalButton>
            </S.ModalProgress>
          ) : (
            <ModalSuccess text={'Ваш прогресс засчитан!'} />
          )}
        </S.ModalBackground>
      )}

      <Header></Header>
      <S.Center>
        <S.CenterHeader>Йога</S.CenterHeader>
        <S.BreadCrumps>
          <S.BreadCrumpsItem>
            <a href="#">Красота и здоровье</a>
          </S.BreadCrumpsItem>
          <S.BreadCrumpsItem>
            <a href="#">Йога на каждый день</a>
          </S.BreadCrumpsItem>
          <S.BreadCrumpsItem>
            <a href="#">2 день</a>
          </S.BreadCrumpsItem>
        </S.BreadCrumps>
        <S.Video>
          <iframe
            width="1160"
            height="639"
            src="https://www.youtube.com/embed/v-xTLFDhoD0"
            title="Красота и здоровье / Йога на каждый день / 2 день / Алексей Казубский"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </S.Video>
        <S.CenterBottom>
          <S.Exercises>
            <S.ExercisesHeader>Упражнения</S.ExercisesHeader>
            <S.ExercisesList>
              <S.ExercisesListItem>
                Наклон вперед (10 повторений)
              </S.ExercisesListItem>
              <S.ExercisesListItem>
                Наклон назад (10 повторений)
              </S.ExercisesListItem>
              <S.ExercisesListItem>
                Поднятие ног, согнутых в коленях (5 повторений)
              </S.ExercisesListItem>
            </S.ExercisesList>
            <S.ProgressButton onClick={toggleModal}>
              Заполнить свой прогресс
            </S.ProgressButton>
          </S.Exercises>
          <S.Progress>
            <S.ProgressHeader>Мой прогресс по тренировке 2:</S.ProgressHeader>
            <S.ProgressCenter>
              <S.ProgressFlex>
                <S.ProgressText>Наклоны вперед</S.ProgressText>
                <S.ProgressBarOne>
                  <S.ProgressBarTopOne width={progressValue[0].percentProgress}>
                    {progressValue[0].percentProgress > 20 &&
                      `${progressValue[0].percentProgress}%`}
                  </S.ProgressBarTopOne>
                </S.ProgressBarOne>
              </S.ProgressFlex>
              <S.ProgressFlex>
                <S.ProgressText>Наклоны назад</S.ProgressText>
                <S.ProgressBarTwo>
                  <S.ProgressBarTopTwo width={progressValue[1].percentProgress}>
                    {progressValue[1].percentProgress > 20 &&
                      `${progressValue[1].percentProgress}%`}
                  </S.ProgressBarTopTwo>
                </S.ProgressBarTwo>
              </S.ProgressFlex>
              <S.ProgressFlex>
                <S.ProgressText>
                  Поднятие ног, согнутых в коленях
                </S.ProgressText>
                <S.ProgressBarThree>
                  <S.ProgressBarTopThree
                    width={progressValue[2].percentProgress}
                  >
                    {progressValue[2].percentProgress > 20 &&
                      `${progressValue[2].percentProgress}%`}
                  </S.ProgressBarTopThree>
                </S.ProgressBarThree>
              </S.ProgressFlex>
            </S.ProgressCenter>
          </S.Progress>
        </S.CenterBottom>
      </S.Center>
    </div>
  )
}
