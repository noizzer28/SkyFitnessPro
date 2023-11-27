import { Link } from 'react-router-dom'
import * as S from './Card.styles'

export const Card = ({ id, name, position }) => {
  return (
    <S.Card>
      <S.CardImg src={`/img/cardBG_${position}.png`}></S.CardImg>
      <Link to={`/course/${id}`}>
        <S.CardLink>{name}</S.CardLink>
      </Link>
    </S.Card>
  )
}
