import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'state/api'
import { IBpdmResponse } from 'types/bpdm/BpdmTypes'

export const fetchBusinessPartners = createAsyncThunk(
  "bpdm/fetchBusinessPartners", async (token:string) => {
    try {
      // Call axios instance to get values
      const bpdmApi = api.BpdmApi.getInstance(token)

      console.log('api calls to :',bpdmApi)
      return await bpdmApi.getAllBusinessPartner()
    } catch (error: any) {
      // TODO: Proper error handling for Thunk errors
      console.error('api call error:',error)
    }
  });


const bpdmSlice = createSlice({
  name: "bpdm",
  initialState: {
    bpdmResponse: {} as IBpdmResponse,
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBusinessPartners.pending, (state) => {

      state.bpdmResponse = {} as IBpdmResponse
      state.loading = true
    });
    builder.addCase(
      fetchBusinessPartners.fulfilled, (state, { payload }) => {
        state.bpdmResponse = payload as IBpdmResponse
        state.loading = false
      });
    builder.addCase(
      fetchBusinessPartners.rejected,(state, action) => {
        state.loading = false
        state.error = action.error.message as string
      });
  }
});

export const selectBpdms = createSelector(
  (state:any) => ({
    bpdmResponse: state.bpdm.bpdmResponse,
    loading: state.bpdm.loading,
  }), (state) =>  state
);

export default bpdmSlice
