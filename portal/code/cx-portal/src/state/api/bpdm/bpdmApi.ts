import {HttpClient} from 'utils/HttpClient'
import {IBpdmResponse} from 'types/bpdm/BpdmTypes'

// Instance of BPDM API endpoint
export class BpdmApi extends HttpClient {
  private static classInstance?: BpdmApi

  // TODO: Token needs to read from Redux store
  public constructor(token: string) {
    super(`${process.env.REACT_APP_BPDM_API_BASE_URL}`,{'Authorization': `Bearer ${token}`})
  }

  // To avoid create an instance everytime, pointed to Singleton of static value
  public static getInstance(token: string) {
    if (!this.classInstance) {
      this.classInstance = new BpdmApi(token)
    }

    return this.classInstance
  }

  // Temporary api call to test out authorization of BPDM endpoint
  public getAllBusinessPartner = () => this.instance.get<IBpdmResponse>('/catena/business-partner?page=0&size=100')

}
