import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'state/api'
import {
  BusinessPartner,
  BusinessPartnerResponse,
  PartnerNetworkDataGrid,
  PartnerNetworkInitialState,
  SearchParams
} from 'types/partnerNetwork/PartnerNetworkTypes'
import { RootState, store } from 'state/store'

export const fetchBusinessPartners = createAsyncThunk(
  'partnerNetwork/fetchBusinessPartners', async (params: SearchParams) => {
    try {
      // Call axios instance to get values
      if (store.getState().user?.token) {
        const partnerNetworkApi = api.PartnerNetworkApi.getInstance(store.getState().user?.token)
        return await partnerNetworkApi.getAllBusinessPartner(params)
      }
    } catch (error: any) {
      console.error('api call error:', error)
    }
  })

export const getOneBusinessPartner = createAsyncThunk(
  'partnerNetwork/getOneBusinessPartner', async (bpn: string) => {
    try {
      // Call axios instance to get values
      if (store.getState().user?.token) {
        const partnerNetworkApi = api.PartnerNetworkApi.getInstance(store.getState().user?.token)
        return await partnerNetworkApi.getBusinessPartnerByBpn(bpn)
      }
    } catch (error: any) {
      console.error('api call error:', error)
      throw Error('getOneBusinessPartner api call error')
    }
  })

const initialState: PartnerNetworkInitialState = {
  businessPartners: {} as BusinessPartnerResponse,
  mappedPartnerList: [],
  loading: true,
  columns: [
    { field: 'id', headerName: 'BPN', hide: false, flex: 2 },
    { field: 'name', headerName: 'Name', description: 'Name of the Company', flex: 4 },
    { field: 'country', headerName: 'Country', flex: 1 },
    { field: 'street', headerName: 'Street Address', flex: 2 },
    { field: 'zipCode', headerName: 'Zip Code', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'taxId', headerName: 'Tax ID', flex: 1 },
  ],
  error: '',
}

const partnerNetworkSlice = createSlice({
  name: 'partnerNetwork',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOneBusinessPartner.pending,(state) => {
      state.businessPartners = {} as BusinessPartnerResponse
      state.mappedPartnerList = []
      state.loading = true
    })
    builder.addCase(getOneBusinessPartner.fulfilled,(state, {payload})=>{
      const mappedList = [] as Array<PartnerNetworkDataGrid>
      const bp = payload as BusinessPartner

        const bpAddress = bp?.addresses[0]
        const taxObject = bp?.identifiers.filter((identifier)=>
          identifier.type.technicalKey === "EU_VAT_ID_DE")
        mappedList.push({
          id: bp?.bpn,
          name: bp?.names.filter((name)=>
            name.type.technicalKey === "INTERNATIONAL" || name.type.technicalKey === "LOCAL")[0].value,
          country: bpAddress?.country.name,
          street: bpAddress?.thoroughfares[0].value,
          zipCode: bpAddress?.postCodes[0].value,
          city: bpAddress?.localities[0].value,
          taxId: taxObject?.length > 0 ? taxObject[0].value : ""
        })

      state.mappedPartnerList = mappedList
      state.businessPartners = {
        content:[bp],
        contentSize:1,
        totalElements: 1,
        totalPages:1,
        page: 1,
      } as BusinessPartnerResponse

      state.loading = false
    })
    builder.addCase(getOneBusinessPartner.rejected,(state,action)=>{
      console.log('rejected getOneBusinessPartner',action)
      state.businessPartners = {} as BusinessPartnerResponse
      state.mappedPartnerList = []
      state.loading = false
      state.error = action.error.message as string
    })
    builder.addCase(fetchBusinessPartners.pending, (state) => {
      state.businessPartners = {} as BusinessPartnerResponse
      state.mappedPartnerList = []
      state.loading = true
    })
    builder.addCase(
      fetchBusinessPartners.fulfilled, (state, { payload }) => {
        const mappedList = [] as Array<PartnerNetworkDataGrid>
        const payloadList = payload as BusinessPartnerResponse
        payloadList?.content?.map((bp : BusinessPartner) => {
          const bpAddress = bp.addresses[0]
          const taxObject = bp.identifiers.filter((identifier)=>
            identifier.type.technicalKey === "EU_VAT_ID_DE")
          mappedList.push({
            id: bp.bpn,
            name: bp.names.filter((name)=>
              name.type.technicalKey === "INTERNATIONAL" || name.type.technicalKey === "LOCAL")[0].value,
            country: bpAddress.country.name,
            street: bpAddress.thoroughfares[0].value,
            zipCode: bpAddress.postCodes[0].value,
            city: bpAddress.localities[0].value,
            taxId: taxObject.length > 0 ? taxObject[0].value : ""
          })
        })

        state.mappedPartnerList = mappedList
        state.businessPartners = payloadList

        state.loading = false
      })
    builder.addCase(
      fetchBusinessPartners.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message as string
      })
  },
})

export const selectorPartnerNetwork = (state: RootState): PartnerNetworkInitialState => state.partnerNetwork
export default partnerNetworkSlice
