import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'state/api'
import {
  BusinessPartnerResponse,
  PartnerNetworkInitialState,
} from 'types/partnerNetwork/PartnerNetworkTypes'
import { RootState, store } from 'state/store'

export const fetchBusinessPartners = createAsyncThunk(
  'partnerNetwork/fetchBusinessPartners',
  async () => {
    try {
      // Call axios instance to get values
      if (store.getState().user?.token) {
        const partnerNetworkApi = api.PartnerNetworkApi.getInstance(
          store.getState().user?.token
        )
        return await partnerNetworkApi.getAllBusinessPartner()
      }
    } catch (error: any) {
      // TODO: Proper error handling for Thunk errors
      console.error('api call error:', error)
    }
  }
)
const initialState: PartnerNetworkInitialState = {
  businessPartners: {} as BusinessPartnerResponse,
  loading: false,
  error: '',
}

const partnerNetworkSlice = createSlice({
  name: 'partnerNetwork',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBusinessPartners.pending, (state) => {
      state.businessPartners = {} as BusinessPartnerResponse
      state.loading = true
    })
    builder.addCase(fetchBusinessPartners.fulfilled, (state, { payload }) => {
      state.businessPartners = payload as BusinessPartnerResponse
      state.loading = false
    })
    builder.addCase(fetchBusinessPartners.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message as string
    })
  },
})

export const selectorPartnerNetwork = (
  state: RootState
): PartnerNetworkInitialState => state.partnerNetwork
export default partnerNetworkSlice
