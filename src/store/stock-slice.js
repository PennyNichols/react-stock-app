import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice({
	name: "stock",
  initialState: {
    firms: [],
    brands: [],
    categories: [],
    products: [],
    transaction: [],
    stockData: [], 
    totalProfit: {}, 
    saleTransc: [], 
    purchaseTransc: []
  },
	reducers: {
		getFirms(state, action) {
			state.firms = action.payload;
		},
		getCategory(state, action) {
			state.categories = action.payload;
		},
		getBrands(state, action) {
			state.brands = action.payload;
		},
		getProducts(state, action) {
			state.products = action.payload;
    },
    
    getAllTransactions(state, action) { 
      const { sales, purchases } = action.payload;
      state.stockData = [...sales, purchases];
      const saleCount = sales.map(item => Number.parseFloat(item.price_total));
      const purchaseCount = purchases.map(item => Number.parseFloat(item.price_total));
      const profitSale = saleCount.reduce((a, b) => a + b, 0);
      const profitPurchase = purchaseCount.reduce((a, b) => a + b, 0);
      const profitTotal = profitSale - profitPurchase;
      state.transaction = sales;
      state.totalProfit = { profitPurchase, profitSale, profitTotal}

    }
	},
});

export default stockSlice.reducer;
export const stockActions = stockSlice.actions;