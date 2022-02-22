/**
 * @type {AppstoreApp[]}
 */
let apps = [
  {
    name: 'BPDM Services',
    id: 993,
    rating: 4.3,
    price: '$2,200',
    rel: '12/05/2021',
  },
  {
    name: 'Circular Economy',
    id: 1995,
    price: '$10,800',
    rel: '12/05/1995',
  },
  {
    name: 'SAP - Material Traceability',
    id: 2000,
    price: '$8,000',
    rel: '10/31/2000',
  },
  {
    name: 'k.a.p.u.t.t. - Material Traceability',
    id: 2002,
    price: '$7,600',
    rel: '10/31/2009',
  },
  {
    name: 'Part Chain',
    id: 2003,
    price: '$9,500',
    rel: '07/22/2003',
  },
  {
    name: 'Killer App',
    id: 2099,
    price: '$99,500',
    rel: '07/22/2003',
  },
  {
    name: 'App2Go',
    id: 2091,
    price: '$510',
    rel: '07/22/2003',
  },
  {
    name: 'Component Performance Monitor',
    id: 1997,
    price: '$14,000',
    rel: '09/01/1997',
  },
]

/**
 * @returns {AppstoreApp[]}
 */
export function getApps() {
  return apps
}

/**
 * @param {id} number
 * @returns {AppstoreApp}
 */
export function getApp(id: number) {
  return apps.find((app) => app.id === id)
}

/**
 * @param {id} number
 * @returns {void}
 */
export function deleteApp(id: number) {
  apps = apps.filter((app) => app.id !== id)
}

/**
 * @typedef {{ name: string; id: number; amount: string; due: string }} AppstoreApp
 */
