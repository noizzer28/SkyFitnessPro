import * as S from './App.styles'

import { AppRoutes } from './routes'

export const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <AppRoutes />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
