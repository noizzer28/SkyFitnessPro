import styled from 'styled-components'
import { ButtonPurple } from '../../App.styles'

export const CourseTop = styled.div`
  position: relative;
  width: 100%;
  height: 310px;
  overflow: hidden;
  border-radius: 30px;
  background: rgba(205, 205, 205, 0.1);
  backdrop-filter: blur(14.51865291595459px);
  margin-bottom: 75px;
`

export const CourseImg = styled.img`
  position: absolute;
  top: -140px;
  right: 90px;
  width: 360px;
  height: 480px;
  object-fit: cover;
  margin: 0;
  background: rgba(255, 254, 254, 0);
`

export const CourseTitle = styled.h1`
  position: absolute;
  color: #000;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  top: 30px;
  left: 30px;
`

export const CourseAdvantages = styled.section`
  margin-bottom: 75px;
`

export const CourseHeaders = styled.h2`
  font-size: 40px;
  line-height: 48px;
`

export const ListAdvantages = styled.div`
  display: flex;
  gap: 87px;
  padding-top: 40px;
`

export const ItemAdvantages = styled.div`
  width: 335px;
  display: flex;
  gap: 24px;
`

export const ItemCircle = styled.div`
  border-radius: 1202.287px;
  background: #c7e957;
  width: 67px;
  height: 67px;
  color: #000;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemText = styled.p`
  font-size: 24px;
  line-height: 32px;
`

export const CourseDirections = styled.section`
  margin-bottom: 75px;
`

export const ListDirections = styled.ul`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  height: 96px;
  flex-wrap: wrap;
`

export const Items = styled.li`
  list-style-type: disc;
  list-style-position: inside;
  font-size: 24px;
  line-height: 32px;
`

export const CourseDescription = styled.p`
  font-size: 24px;
  line-height: 32px;
`
export const ListDescription = styled.ul`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
`

export const Footer = styled.footer`
  border-radius: 30px;
  background: #f9ebff;
  display: flex;
  margin-top: 75px;
  margin-bottom: 95px;
`

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 46px;
  margin-left: 52px;
  margin-bottom: 48px;
`

export const FooterText = styled.p`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 34px;
`

export const FooterButton = styled(ButtonPurple)`
  width: 275px;
`
export const FooterImg = styled.img``
