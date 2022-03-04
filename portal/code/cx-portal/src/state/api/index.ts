import { loadApps } from 'state/features/apps/apps'
import { loadPosts } from 'state/features/posts/posts'
import { BpdmApi } from 'state/api/bpdm/bpdmApi'

const api = {
  loadApps: loadApps,
  loadPosts: loadPosts,
  BpdmApi
}

export { api }
