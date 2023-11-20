import { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './Course.styles'
import { ModalSuccess } from '../../components/ModalSuccess/ModalSuccess'

export const Сourse = () => {
  const params = useParams()
  const { id } = params
  const [isSuccessWindow, setSuccessWindow] = useState(false)

  const toggleModeWindow = () => {
    setSuccessWindow((isSuccessWindow) => !isSuccessWindow)
  }

  return (
    <>
      <S.CourseInfoPage>
        <S.CourseTop>
          <S.CourseImg src="/img/yoga.png" alt="yoga" />
          <S.CourseTitle>Йога</S.CourseTitle>
        </S.CourseTop>
        <S.CourseAdvantages>
          <S.CourseHeaders>Подойдет для вас, если:</S.CourseHeaders>
          <S.ListAdvantages>
            <S.ItemAdvantages>
              <div>
                <S.ItemCircle>1</S.ItemCircle>
              </div>
              <S.ItemText>
                Давно хотели попробовать йогу, но не решались начать.
              </S.ItemText>
            </S.ItemAdvantages>
            <S.ItemAdvantages>
              <div>
                <S.ItemCircle>2</S.ItemCircle>
              </div>
              <S.ItemText>
                Хотите укрепить позвоночник, избавиться от болей в спине и
                суставах.
              </S.ItemText>
            </S.ItemAdvantages>
            <S.ItemAdvantages>
              <div>
                <S.ItemCircle>3</S.ItemCircle>
              </div>
              <S.ItemText>
                Ищете активность, полезную для тела и души.
              </S.ItemText>
            </S.ItemAdvantages>
          </S.ListAdvantages>
        </S.CourseAdvantages>
        <S.CourseDirections>
          <S.CourseHeaders>Направления:</S.CourseHeaders>
          <S.ListDirections>
            <S.ItemDirections>Йога для новичков</S.ItemDirections>
            <S.ItemDirections>Классическая йога</S.ItemDirections>
            <S.ItemDirections>Йогатерапия</S.ItemDirections>
            <S.ItemDirections>Кундалини-йога</S.ItemDirections>
            <S.ItemDirections>Хатха-йога</S.ItemDirections>
            <S.ItemDirections>Аштанга-йога</S.ItemDirections>
          </S.ListDirections>
        </S.CourseDirections>
        <S.CourseDescription>
          Благодаря комплексному воздействию упражнений происходит проработка
          всех групп мышц, тренировка суставов, улучшается циркуляция крови.
          Кроме того, упражнения дарят отличное настроение, заряжают бодростью и
          помогают противостоять стрессам.
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
          <ModalSuccess setSuccessWindow={setSuccessWindow} text={'Вы успешно записались!'} />
        </S.ModalBackground>
      ) : (
        ''
      )}
    </>
  )
}
