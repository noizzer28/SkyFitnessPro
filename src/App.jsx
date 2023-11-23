import { AppRoutes } from './routes'
import * as S from './App.styles'

const baseUrl =
  'https://fitness-pro-ae1f4-default-rtdb.europe-west1.firebasedatabase.app/'

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
