import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import * as S from './App.styles'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <S.GlobalStyle />
        <S.Wrapper>
          <S.Container>
            <AppRoutes />
          </S.Container>
        </S.Wrapper>
      </BrowserRouter>
    </>
  )
}
