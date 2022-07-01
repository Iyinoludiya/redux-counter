import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'Product',
    initialState,

    reducers: {
        addProduct: (state, {payload}) => {
            state.products.push(payload)
        }
    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer;