import { createSlice } from '@reduxjs/toolkit'

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    companies: [
    {
        rank: 2,
        name: "Apple",
        symbol: "AAPL",
        market_cap: 2230000000,
        price: 137.13,
        country: "USA"
    },
    {
        rank: 3,
        name: "Microsoft",
        symbol: "MSFT",
        market_cap: 1906000000,
        price: 252.99,
        country: "USA"
    }]
  },
  reducers: {
    updateCompanies: (state, action) => {
        return {
            companies: action.payload
        };
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateCompanies } = companiesSlice.actions

export default companiesSlice.reducer