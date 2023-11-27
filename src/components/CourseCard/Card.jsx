import { Link } from 'react-router-dom'
import * as S from './Card.styles'

export const Card = ({ id, name, position, typeMain }) => {
  return (
    <S.Card style={{ transform: typeMain ? '' : 'none' }}>
      <S.CardImg src={`/img/cardBG_${position}.png`}></S.CardImg>
      {typeMain ? (
        <Link to={`/course/${id}`}>
          <S.CardLink>{name}</S.CardLink>
        </Link>
      ) : (
        <>
          <S.CardLink style={{ cursor: 'auto' }}>{name}</S.CardLink>
          <S.RedirectButton>Перейти →</S.RedirectButton>
        </>
      )}
    </S.Card>
  )
}
