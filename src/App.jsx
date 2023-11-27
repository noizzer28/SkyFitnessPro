import { AppRoutes } from './routes'
import { getDatabase, ref, onValue, child, get } from 'firebase/database'
import { useEffect, useState } from 'react'
import { setCourses } from 'store/slices/coursesSlice'
import { useDispatch } from 'react-redux'
import * as S from './App.styles'

// функция преобразования объекта в массив
const objArrList = (data) => {
  let arrList = []
  Object.entries(data).forEach(([key, value]) => {
    arrList.push(value)
  })
  return arrList
}

export const App = () => {
  const [dataBaseError, setDataBaseError] = useState(null)
  const dispatch = useDispatch()

  // запрос на курсы в fireбазе
  const getCourses = () => {
    const db = getDatabase()
    const starCountRef = ref(db, '/courses')
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      if (!data) {
        setDataBaseError(
          'Извините, курсы не найдены, либо нет подключения к интернету',
        )
        return
      }
      const coursesList = objArrList(data)
      dispatch(
        setCourses({
          courses: coursesList,
        }),
      )
      setDataBaseError(null)
    })
  }

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <AppRoutes err={dataBaseError} />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
