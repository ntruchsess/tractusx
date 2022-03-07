import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'state/api'
import { IBpdmResponse } from 'types/bpdm/BpdmTypes'
import {store} from 'state/store'

export const fetchBusinessPartners = createAsyncThunk(
  "partnerNetwork/fetchBusinessPartners", async () => {
    try {
      // Call axios instance to get values
      if(store.getState().user?.token){
        const partnerNetworkApi = api.PartnerNetworkApi.getInstance(store.getState().user?.token)
        return await partnerNetworkApi.getAllBusinessPartner()
      }
    } catch (error: any) {
      // TODO: Proper error handling for Thunk errors
      console.error('api call error:',error)
    }
  });


const partnerNetworkSlice = createSlice({
  name: "partnerNetwork",
  initialState: {
    businessPartners: {} as IBpdmResponse,
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBusinessPartners.pending, (state) => {

      state.businessPartners = {} as IBpdmResponse
      state.loading = true
    });
    builder.addCase(
      fetchBusinessPartners.fulfilled, (state, { payload }) => {
        state.businessPartners = payload as IBpdmResponse
        state.loading = false
      });
    builder.addCase(
      fetchBusinessPartners.rejected,(state, action) => {
        state.loading = false
        state.error = action.error.message as string
      });
  }
});

export const selectorPartnerNetwork = createSelector(
  (state:any) => ({
    businessPartners: state.partnerNetwork.businessPartners,
    loading: state.partnerNetwork.loading,
  }), (state) =>  state
);

export default partnerNetworkSlice
