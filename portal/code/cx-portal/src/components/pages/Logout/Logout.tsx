import UserService from '../../../services/UserService'

export default function Logout() {
  UserService.doLogout({ redirectUri: document.location.origin + '/' })
  return <></>
}
