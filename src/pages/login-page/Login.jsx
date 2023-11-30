import { DarkBG } from '../../App.styles'
import { FormAuth } from 'components/FormAuth/FormAuth'

export const Login = () => {
  return (
    <>
      <DarkBG>
        <FormAuth title={'Войти'} typeLogin={true}></FormAuth>
      </DarkBG>
    </>
  )
}
