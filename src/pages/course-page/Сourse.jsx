import { useParams } from 'react-router-dom'

export const Сourse = () => {
  const params = useParams()
  const { id } = params

  return <h1>это 2 страница сайта (описание курса № {id})</h1>
}
