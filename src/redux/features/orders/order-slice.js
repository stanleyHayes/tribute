import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ORDER_API} from "../../../api/order";
import {orders} from "./order-data";


const getOrder = createAsyncThunk(
    'orders/getOrder',
    async ({values}, {rejectWithValue}) => {
        try {
            const response = await ORDER_API.getOrder({...values});
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            return rejectWithValue(message);
        }
    });

const getOrders = createAsyncThunk(
    'orders/getOrders',
    async ({values}, {rejectWithValue}) => {
        try {
            const response = await ORDER_API.getOrders({...values});
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            return rejectWithValue(message);
        }
    });


const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        loading: false,
        order: orders[0],
        orders: [...orders],
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getOrder.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.order = null;
        }).addCase(getOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.order = action.payload.data;
        }).addCase(getOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getOrders.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.orders = action.payload.data;
        }).addCase(getOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.orders = [];
        })
    }
});

const calculateOrderPrice = items => {
    return items.reduce((accumulator, order) => {
        return accumulator + (order.item.price.amount  * order.quantity);
    }, 0);
}
export const selectOrder = state => state.order;
export const ORDER_ACTION_CREATORS = {getOrder, getOrders, calculateOrderPrice};
export default orderSlice.reducer;
