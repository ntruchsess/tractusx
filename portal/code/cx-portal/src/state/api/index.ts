import { loadApps } from 'state/features/apps/apps'
import { loadPosts } from 'state/features/posts/posts'
import { PartnerNetworkApi } from 'state/api/partnerNetwork/partnerNetworkApi'

const api = {
  loadApps: loadApps,
  loadPosts: loadPosts,
  PartnerNetworkApi,
}

export { api }
