import { createSlice } from '@reduxjs/toolkit'

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    companies: [
    {
        rank: 0,
        name: 0,
        symbol: 0,
        market_cap: 0,
        price: 0,
        country: 0
    },
    {
        rank: 1,
        name: 1,
        symbol: 1,
        market_cap: 1,
        price: 1,
        country: 1
    }]
  },
  reducers: {
    updateCompanies: (state, action) => {
        console.log(action);
        return {
            companies: action.payload
        };
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateCompanies } = companiesSlice.actions

export default companiesSlice.reducer