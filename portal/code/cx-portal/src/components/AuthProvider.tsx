import { Context, useEffect } from 'react'
import { ReactReduxContextValue, useDispatch } from 'react-redux'
import { setLoggedUser } from 'state/features/user/userSlice'
import { IUser } from 'types/user/UserTypes'

export function AuthProvider(props: {
  children: any
  user: IUser
  context?: Context<ReactReduxContextValue>
}): JSX.Element {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoggedUser(props.user))
  }, [dispatch])
  return <>{props.children}</>
}
