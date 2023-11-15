import * as S from './header.styles'
const imagePath = process.env.PUBLIC_URL + '/img/logo.png'

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo>
        <img src={imagePath} alt="logo"></img>
      </S.HeaderLogo>
      <div>
        <S.HeaderFlex>
          <S.HeaderUserLogo></S.HeaderUserLogo>
          <S.HeaderName>Сергей</S.HeaderName>
          <S.HeaderButton className="_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
            >
              <path
                d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </S.HeaderButton>
        </S.HeaderFlex>
      </div>
    </S.Header>
  )
}
