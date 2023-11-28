import { Link } from 'react-router-dom'
import * as S from './Card.styles'
import { useState } from 'react'

export const Card = ({ id, name, position, typeMain }) => {
  const [chooseWorkout, setChooseWorkout] = useState(false)

  return (
    <S.Card style={{ transform: typeMain ? '' : 'none' }}>
      <S.CardImg src={`/img/cardBG_${position}.png`}></S.CardImg>
      {typeMain ? (
        <Link to={`/course/${id}${position}`}>
          <S.CardLink>{name}</S.CardLink>
        </Link>
      ) : (
        <>
          <S.CardLink style={{ cursor: 'auto' }}>{name}</S.CardLink>
          {/* <Link to={`/workout/1`}> */}

          <S.RedirectButton>Перейти →</S.RedirectButton>
          {/* </Link> */}
          {chooseWorkout && (
            <S.RedirectButton>Перейти →</S.RedirectButton>
            // <S.ModalBackground>
            //   {/* <ModalProfileChange
            //     toggleOpen={setPasswordChange}
            //     text={'Новый пароль:'}
            //   >
            //     <S.inputChange placeholder="Пароль"></S.inputChange>
            //     <S.inputChange placeholder="Повторите пароль"></S.inputChange>
            //   </ModalProfileChange> */}
            // </S.ModalBackground>
          )}
        </>
      )}
    </S.Card>
  )
}
