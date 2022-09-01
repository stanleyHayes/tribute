import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CHECKOUT_API} from "../../../api/checkout";

const checkout = createAsyncThunk(
    'checkout/checkout',
    async ({data}, {rejectWithValue}) => {
        try {
            const response = await CHECKOUT_API.checkout(data);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.error.message);
        }
    });

const checkoutAuth = createAsyncThunk(
    'checkout/checkoutAuth',
    async ({data, token}, {rejectWithValue}) => {
        try {
            const response = await CHECKOUT_API.checkoutAuth(data, token);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.error.message);
        }
    });

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
        activeStep: 1,
        loading: false,
        error: null,
        address: {
            country: '',
            stateOrRegionOrProvince: '',
            city: '',
            addressLine1: '',
            addressLine2: '',
            saveForLater: false
        },
        payment: {
            method: '',
            mobileMoney: {
                network: '',
                phone: '',
                pin: ''
            },
            card: {
                cardHolderName: '',
                cardNumber: '',
                expiryYear: '',
                expiryMonth: '',
                cvv: ''
            },
            bank: {
                bankName: '',
                accountNumber: '',
                accountHolderName: '',
                swiftCode: ''
            },
            saveForLater: false
        },
        recipient: {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }
    },
    reducers: {
        saveRecipient: (state, action) => {
            state.recipent = action.payload;
        },
        savePayment: (state, action) => {
            state.payment = action.payload;
        },
        saveAddress: (state, action) => {
            state.address = action.payload;
        },
        next: (state) => {
            state.activeStep = state.activeStep + 1;
        },
        previous: (state) => {
            if(state.activeStep > 1){
                state.activeStep = state.activeStep - 1;
            }
        },
        goto: (state, action) => {
            state.activeStep = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(checkout.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(checkout.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
        }).addCase(checkout.rejected, (state, action) => {
            state.loading = false;
            state.error = null;
        }).addCase(checkoutAuth.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(checkoutAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
        }).addCase(checkoutAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = null;
        })
    }
});

export const selectCheckout = state => state.checkout;
export const CHECKOUT_ACTION_CREATORS = {
    saveRecipient: checkoutSlice.actions.saveRecipient,
    savePayment: checkoutSlice.actions.savePayment,
    saveAddress: checkoutSlice.actions.saveAddress,
    next: checkoutSlice.actions.next,
    previous: checkoutSlice.actions.previous,
    goto: checkoutSlice.actions.goto,
    checkoutAuth,
    checkout
};
export default checkoutSlice.reducer;
