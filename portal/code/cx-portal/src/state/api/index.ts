import { loadApps } from 'state/features/apps/apps'
import { PartnerNetworkApi } from 'state/api/partnerNetwork/partnerNetworkApi'
import { UserAdministrationApi } from './userAdministration/userAdministrationAPI'

const api = {
  loadApps: loadApps,
  PartnerNetworkApi,
  UserAdministrationApi,
}

export { api }
