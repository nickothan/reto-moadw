//* libraries
import { useCallback, useEffect, useState } from "react"

const API_URL = "https://moadw-challenge.herokuapp.com/api/find-one?id="

export type ProfileType = {
  description: string
  donations: number
  first_name: string
  id: number
  image: string
  last_name: string
  total: number
}

const useProfile = (id: number): { profile: ProfileType | null } => {
  const [profile, setProfile] = useState(null)

  const getUsers = useCallback(() => {
    fetch(`${API_URL}${id}`)
      .then((response) => response.json())
      .then((profileResponse) => setProfile(profileResponse))
  }, [id])

  useEffect(() => getUsers(), [getUsers])

  return { profile }
}

export default useProfile
