import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from 'store/slices/userSlice'
import { useAuth } from 'hooks/use-auth'
import * as S from './header.styles'

export const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth, email } = useAuth()
  const [isProfileMenu, setProfileMenu] = useState(false)

  let colorTextBlack = true
  if (useLocation().pathname === '/') {
    colorTextBlack = false
  }

  return (
    <S.Header>
      <S.HeaderLogo onClick={() => navigate('/')}>
        <svg
          width="40"
          height="36"
          viewBox="0 0 40 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.68844 28.4581C1.54195 29.698 0 28.6648 0 26.827C0 24.8705 0 19.0003 0 19.0003C0 19.0003 0 13.1301 0 11.1737C0 9.33591 1.54099 8.30269 3.68844 9.54255C7.03156 11.4731 17.06 17.2668 17.06 17.2668C18.3934 18.037 18.3934 19.9628 17.06 20.7329C17.06 20.7338 7.03156 26.5275 3.68844 28.4581Z"
            fill="#00C1FF"
          />
          <path
            d="M14.7265 28.4574C12.58 29.6972 11.0381 28.664 11.0381 26.8262C11.0381 24.8698 11.0381 18.9996 11.0381 18.9996C11.0381 18.9996 11.0381 13.1294 11.0381 11.173C11.0381 9.33518 12.5791 8.30196 14.7265 9.54182C17.996 11.4303 27.8044 17.0968 27.8044 17.0968C29.2689 17.9425 29.2689 20.0567 27.8044 20.9024C27.8034 20.9024 17.996 26.5689 14.7265 28.4574Z"
            fill="#BCEC30"
          />
          <mask
            id="mask0_26_1414"
            maskUnits="userSpaceOnUse"
            x="11"
            y="9"
            width="18"
            height="20"
          >
            <path
              d="M14.7265 28.4574C12.58 29.6972 11.0381 28.664 11.0381 26.8262C11.0381 24.8698 11.0381 18.9996 11.0381 18.9996C11.0381 18.9996 11.0381 13.1294 11.0381 11.173C11.0381 9.33518 12.5791 8.30196 14.7265 9.54182C17.996 11.4303 27.8044 17.0968 27.8044 17.0968C29.2689 17.9425 29.2689 20.0567 27.8044 20.9024C27.8035 20.9024 17.996 26.5689 14.7265 28.4574Z"
              fill="#6FE4FF"
            />
          </mask>
          <g mask="url(#mask0_26_1414)">
            <g filter="url(#filter0_f_26_1414)">
              <path
                d="M3.68893 28.4585C1.54244 29.6983 0.000488281 28.6651 0.000488281 26.8273C0.000488281 24.8709 0.000488281 19.0007 0.000488281 19.0007C0.000488281 19.0007 0.000488281 13.1305 0.000488281 11.1741C0.000488281 9.33628 1.54148 8.30306 3.68893 9.54292C7.03205 11.4735 17.0605 17.2672 17.0605 17.2672C18.3939 18.0373 18.3939 19.9631 17.0605 20.7333C17.0605 20.7342 7.03205 26.5279 3.68893 28.4585Z"
                fill="#99D100"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_26_1414"
              x="-1.46075"
              y="7.53986"
              width="20.9825"
              height="22.9216"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="0.730621"
                result="effect1_foregroundBlur_26_1414"
              />
            </filter>
          </defs>
        </svg>
        <S.HeaderLogoText style={{ color: colorTextBlack ? '' : '#FFF' }}>
          SkyFitnessPro
        </S.HeaderLogoText>
      </S.HeaderLogo>
      {isAuth ? (
        <S.HeaderFlex onClick={() => setProfileMenu((prev) => !prev)}>
          <S.HeaderUserLogo>
            <S.HeaderUserImg src="/img/userLogo.jpg"></S.HeaderUserImg>
          </S.HeaderUserLogo>
          <S.HeaderName style={{ color: colorTextBlack ? '' : '#FFF' }}>
            {email}
          </S.HeaderName>
          <S.Dropdown>
            <S.HeaderButton className="_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                style={isProfileMenu ? { transform: 'scaleY(-1)' } : {}}
              >
                <path
                  d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
                  stroke={colorTextBlack ? '#000' : '#FFF'}
                  strokeWidth="2"
                />
              </svg>
            </S.HeaderButton>
            {isProfileMenu && (
              <S.DropdownMenu>
                <Link to={`/profile`}>
                  <S.DropdownMenuItem
                    style={{ color: colorTextBlack ? '' : '#FFF' }}
                  >
                    Мой профиль
                  </S.DropdownMenuItem>
                </Link>
                <Link to={`/workout/1`}>
                  <S.DropdownMenuItem
                    style={{ color: colorTextBlack ? '' : '#FFF' }}
                  >
                    Тренировки
                  </S.DropdownMenuItem>
                </Link>
                <S.DropdownMenuItem
                  onClick={() => {
                    localStorage.removeItem('userSkyFitnesPro')
                    dispatch(removeUser())
                  }}
                  style={{ color: colorTextBlack ? '' : '#FFF' }}
                >
                  Выйти
                </S.DropdownMenuItem>
              </S.DropdownMenu>
            )}
          </S.Dropdown>
        </S.HeaderFlex>
      ) : (
        <S.EnterButton onClick={() => navigate('/login')}>Войти</S.EnterButton>
      )}
    </S.Header>
  )
}
