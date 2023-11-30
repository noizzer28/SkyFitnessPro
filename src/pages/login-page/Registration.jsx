import { DarkBG } from '../../App.styles'
import { FormAuth } from 'components/FormAuth/FormAuth'

export const Register = () => {
  return (
    <>
      <DarkBG />
      <FormAuth title={'Зарегистрироваться'} typeLogin={false}></FormAuth>
    </>
  )
}
