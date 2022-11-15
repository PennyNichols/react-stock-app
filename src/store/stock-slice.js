import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice({
	name: "stock",
	initialState: { firms: [], brands: [], category: [], products: [] },
	reducers: {
		getFirms(state, action) {
			state.firms = action.payload;
		},
		getCategory(state, action) {
			state.category = action.payload;
		},
		getBrands(state, action) {
			state.brands = action.payload;
		},
		getProducts(state, action) {
			state.products = action.payload;
		},
	},
});

export default stockSlice.reducer;
export const stockActions = stockSlice.actions;