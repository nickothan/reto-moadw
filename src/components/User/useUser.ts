//* libraries
import { useCallback, useEffect, useState } from 'react'

const API_URL = 'https://moadw-challenge.herokuapp.com/api/find-one?id=1'

export type UserType = {
  description: string
  donations: number
  first_name: string
  id: number
  image: string
  last_name: string
  total: number
}

const useUser = (): { data: UserType[] | null } => {
  const [data, setData] = useState(null)

  const getUsers = useCallback(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [])

  useEffect(() => getUsers(), [getUsers])

  return { data }
}

export default useUser
