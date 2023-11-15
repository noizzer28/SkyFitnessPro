import { Header } from '../../components/components/header'
import * as S from './workout.styles'

export const Workout = () => {
  return (
    <S.Wrapper>
      <Header></Header>
      <S.Center>
        <S.CenterHeader>Йога</S.CenterHeader>
        <S.BreadCrumps>
          Красота и здоровье / Йога на каждый день / 2 день
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
            <S.ProgressButton>Заполнить свой прогресс</S.ProgressButton>
          </S.Exercises>
          <S.Progress>
            <S.ProgressHeader>Мой прогресс по тренировке 2:</S.ProgressHeader>
            <S.ProgressCenter>
              <S.ProgressFlex>
                <S.ProgressText>Наклоны вперед</S.ProgressText>
                <S.ProgressBarOne>
                  <S.ProgressBarTopOne>45%</S.ProgressBarTopOne>
                </S.ProgressBarOne>
              </S.ProgressFlex>
              <S.ProgressFlex>
                <S.ProgressText>Наклоны назад</S.ProgressText>
                <S.ProgressBarTwo>
                  <S.ProgressBarTopTwo>45%</S.ProgressBarTopTwo>
                </S.ProgressBarTwo>
              </S.ProgressFlex>
              <S.ProgressFlex>
                <S.ProgressText>
                  Поднятие ног, согнутых в коленях
                </S.ProgressText>
                <S.ProgressBarThree>
                  <S.ProgressBarTopThree>45%</S.ProgressBarTopThree>
                </S.ProgressBarThree>
              </S.ProgressFlex>
            </S.ProgressCenter>
          </S.Progress>
        </S.CenterBottom>
      </S.Center>
    </S.Wrapper>
  )
}
