import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ModalWindow } from 'components/ModalWindow/ModalWindow'
import { WorkoutSelectionWindow } from 'pages/profile-page/Profile'
import * as S from './Card.styles'

export const Card = ({ id, name, position, typeMain }) => {
  const [isOpenModalWindow, setOpenModalWindow] = useState(false)
  const toggleModalWindow = () => {
    setOpenModalWindow((isOpenModalWindow) => !isOpenModalWindow)
  }
  //   console.log(id)
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
          <S.RedirectButton onClick={toggleModalWindow}>
            Перейти →
          </S.RedirectButton>
          {isOpenModalWindow && (
            <>
              <ModalWindow
                setSuccessWindow={toggleModalWindow}
                childComponent={<WorkoutSelectionWindow idCourse={id} />}
              />
            </>
          )}
        </>
      )}
    </S.Card>
  )
}
