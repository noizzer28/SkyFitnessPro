import { styled, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "StratosSkyeng";
	src: local("StratosSkyeng"), local("StratosSkyeng"),
		url("/fonts/StratosSkyeng.woff2") format("woff2"),
		url("/fonts/StratosSkyeng.woff") format("woff");
	font-weight: 400;
	font-style: normal;
}
* {
	margin: 0;
	padding: 0;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	}
*:before,
*:after {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
a,
a:visited {
	text-decoration: none;
	font-family: "StratosSkyeng", sans-serif;
	cursor: pointer;
	color: #000;
}
ul li {
	list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-style: normal;
	font-weight: 400;
}
button {
	cursor: pointer;
	border-radius: 46px;
  background: var(--palette-purple-90);
  color: #fafafa;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  transition: 0.2s;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: var(--palette-purple-100);
  }
}
html, body {
	font-family: "StratosSkyeng", sans-serif;
	color: #000;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
}
`

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`
export const Container = styled.div`
  max-width: 1190px;
  padding: 0 15px;
  margin: 0 auto;
`
export const ButtonPurple = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 278px;
  height: 52px;
  border-radius: 46px;
  background: var(--palette-purple-90);
  border: none;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;

  &:disabled {
    background-color: #303030;
  }
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: var(--palette-purple-100);
  }
`
