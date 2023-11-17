import { Link } from 'react-router-dom'
import * as S from './LoginAndRegistration.styles'

export const Login = () => {
  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Логин"
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
          />
        </S.Inputs>
        <S.Buttons>
          <S.PrimaryButton>Войти</S.PrimaryButton>
          <Link to="/register">
            <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
