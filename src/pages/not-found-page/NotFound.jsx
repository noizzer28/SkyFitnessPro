import { Link } from 'react-router-dom'
import { DarkBG, ButtonPurple } from '../../App.styles'
import * as S from './NotFound.styles'

export const NotFound = () => {
  return (
    <>
      <DarkBG>
        <S.CenterBlock>
          <S.ParagraphImg src={'/img/not-found.png'}></S.ParagraphImg>
          <S.Title>404</S.Title>
          <S.TitleText>Страница не найдена</S.TitleText>
          <S.ParagraphText>
            Возможно, она была удалена <br /> или перенесена на другой адрес
          </S.ParagraphText>

          <Link to={`/`}>
            <ButtonPurple>Вернуться на главную</ButtonPurple>
          </Link>
        </S.CenterBlock>
      </DarkBG>
    </>
  )
}
