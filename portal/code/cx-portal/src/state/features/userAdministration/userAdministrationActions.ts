import { createAsyncThunk } from '@reduxjs/toolkit'
import { store } from 'state/store'
import { api } from 'state/api'
import RegistrationRequests from 'utils/mockDataSet/registrationRequests.json'
import { RegistrationRequestAPIResponse } from 'types/userAdministration/UserAdministrationTypes'

const fetchTenantUsers = createAsyncThunk(
  'userAdministration/fetchTenantUsers',
  async () => {
    try {
      // Call axios instance to get values
      if (store.getState().user?.token) {
        const tenant = store.getState().user?.tenant
        const userAdministrationApi = api.UserAdministrationApi.getInstance(
          store.getState().user?.token
        )
        return await userAdministrationApi.getTenantUsers(tenant)
      }
    } catch (error: unknown) {
      console.error('api call error:', error)
      throw Error('fetchTenantUsers api call error')
    }
  }
)

const fetchRegistrationRequests = createAsyncThunk(
  'userAdministration/fetchRegistrationRequests',
  async () => {
    try {
      // Call axios instance to get values
      if (store.getState().user?.token) {
        // Currently implementation uses mock data
        // This action will change when API endpoint get ready
        return RegistrationRequests as unknown as Array<RegistrationRequestAPIResponse>
      }
    } catch (error: unknown) {
      console.error('api call error:', error)
      throw Error('fetchRegistrationRequests api call error')
    }
  }
)

export { fetchTenantUsers, fetchRegistrationRequests }
