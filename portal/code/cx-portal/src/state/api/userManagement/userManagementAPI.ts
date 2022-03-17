import { HttpClient } from 'utils/HttpClient'
import { InviteData } from 'types/userManagement/UserManagementTypes'

// Instance of UserManagement API endpoint
export class UserManagementApi extends HttpClient {
  private static classInstance?: UserManagementApi

  // TODO: Token needs to read from Redux store
  public constructor(token: string) {
    super(`${process.env.REACT_APP_BASE_API}`, {
      Authorization: `Bearer ${token}`,
    })
  }

  // To avoid create an instance everytime, pointed to Singleton of static value
  public static getInstance(token: string) {
    if (!this.classInstance) {
      this.classInstance = new UserManagementApi(token)
    }

    return this.classInstance
  }

  public inviteBusinessPartner = (invite: InviteData) => {
    return this.instance.post<void>(
      '/api/useradministration/invitation',
      JSON.stringify(invite),
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    )
  }
}
