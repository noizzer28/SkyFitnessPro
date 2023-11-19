import { useParams } from 'react-router-dom'
import * as S from './Course.styles'

export const Сourse = () => {
  const params = useParams()
  const { id } = params

  return (
    <S.CourseInfoPage>
      <S.CourseImg src="/img/yoga.png" alt="title" />
      <S.CourseAdvantages>
        <S.CourseHeaders>Подойдет для вас, если:</S.CourseHeaders>
        <S.ListAdvantages>
          <S.ItemAdvantages>
            <S.ItemImg src="/icon/num1.png" alt="num1" />
            <S.ItemText>
              Давно хотели попробовать йогу, но не решались начать.
            </S.ItemText>
          </S.ItemAdvantages>
          <S.ItemAdvantages>
            <S.ItemImg src="/icon/num2.png" alt="num2" />
            <S.ItemText>
              Хотите укрепить позвоночник, избавиться от болей в спине и
              суставах.
            </S.ItemText>
          </S.ItemAdvantages>
          <S.ItemAdvantages>
            <S.ItemImg src="/icon/num3.png" alt="num3" />
            <S.ItemText>Ищете активность, полезную для тела и души.</S.ItemText>
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
        Благодаря комплексному воздействию упражнений происходит проработка всех
        групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме
        того, упражнения дарят отличное настроение, заряжают бодростью и
        помогают противостоять стрессам.
      </S.CourseDescription>
      <S.Footer>
        <S.FooterLeft>
          <S.FooterText>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </S.FooterText>
          <S.FooterButton>Записаться на тренировку</S.FooterButton>
        </S.FooterLeft>
        <S.FooterImg src="/icon/handset.png" alt="handset" />
      </S.Footer>
    </S.CourseInfoPage>
  )
}
