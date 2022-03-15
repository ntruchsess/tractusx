
export interface GeographicCoordinate {
  longitude: number
  latitude: number
  altitude?: number
}

export enum PAGES {
  ROOT = '',
  DASHBOARD = 'dashboard',
  APPSTORE = 'appstore',
  DATACATALOG = 'datacatalog',
  DIGITALTWIN = 'digitaltwin',
  SEMANTICHUB = 'semantichub',
  DEVELOPERHUB = 'developerhub',
  CONNECTOR = 'connector',
  ACCOUNT = 'account',
  NOTIFICATIONS = 'notifications',
  ORGANIZATION = 'organization',
  PARTNER_NETWORK = 'partnernetwork',
  USER_MANAGEMENT = 'usermanagement',
  ADMINISTRATION = 'admin',
  TRANSLATOR = 'translator',
  LOGOUT = 'logout',
}

export enum ROLES {
  EVERYONE = '*',
  CX_ADMIN = 'CX Admin',
  ADMIN_CONNECTOR = 'Admin - Connector Setup',
  ADMIN_USER = 'Admin - User Management',
  INVITE_NEW_PARTNER = 'invite_new_partner',
  APPSTORE_VIEW = 'appstore_view',
  APPSTORE_FILTER = 'appstore_filterapps',
  APPSTORE_UPDATE = 'appstore_updateapps',
  DATACATALOG_VIEW = 'datacatalog_view',
  DIGITALTWIN_VIEW = 'digitaltwin_view',
  DIGITALTWIN_ADDMODEL = 'digitaltwin_addmodel',
  SEMANTICHUB_VIEW = 'semantichub_view',
  SEMANTICHUB_ADDMODEL = 'semantic_addmodel',
  DEVELOPER = 'catenax_developer',
  PORTAL_DEVELOPER = 'portal_developer',
}
