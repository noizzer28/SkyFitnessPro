import { useSelector, useDispatch } from 'react-redux'
import { setCourses } from 'store/slices/coursesSlice'
import { useEffect } from 'react'
import { getCour } from 'api'
import { objArrList } from 'App'

export function useCourses() {
  const dispatch = useDispatch()
  //   const { courses } = useSelector((state) => state.courses)
  let coursesGetDataObj
  let coursesGetData
  useEffect(() => {
    getCour().then((data) => {
      coursesGetDataObj = data
      coursesGetData = objArrList(data)
      console.log(coursesGetData)
      dispatch(
        setCourses({
          courses: coursesGetData,
          coursesObj: coursesGetDataObj,
        }),
      )
    })
  }, [dispatch])
  const { courses, coursesObj } = useSelector((state) => state.courses)

  return {
    coursesUse: courses,
    coursesObjUse: coursesObj,
  }
}
