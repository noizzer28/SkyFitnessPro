import { Link } from 'react-router-dom'
import * as S from './LoginAndRegistration.styles'

export const Register = () => {
  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage
              src="/img/logo_modal.png"
              alt="logo"
            />
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
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
          />
        </S.Inputs>
        <S.Buttons>
          <S.PrimaryButton>
            Зарегистрироваться
          </S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
