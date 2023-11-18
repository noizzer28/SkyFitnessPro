import { Link } from 'react-router-dom'
import * as S from './Card.styles'

export const Card = ({ name, position }) => {
  return (
    <S.Card>
      <S.CardImg src={`/img/cardBG_${position}.png`}></S.CardImg>
      <Link to={`/course/${position}`}>
        <S.CardLink>{name}</S.CardLink>
      </Link>
    </S.Card>
  )
}
