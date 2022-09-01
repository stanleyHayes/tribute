import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "../features/ui/ui-slice";
import messageReducer from "../features/message/message-slice";
import storyReducer from "../features/story/story-slice";
import authReducer from "../features/auth/auth-slice";
import cartReducer from "../features/cart/cart-slice";
import wishlistReducer from "../features/wishlist/wishlist-slice";
import medallionReducer from "../features/medallion/medallion-slice";
import checkoutReducer from "../features/checkout/checkout-slice";
import orderReducer from "../features/orders/order-slice";

import {CONSTANTS} from "../../utils/constants";


const themeVariant = localStorage.getItem(CONSTANTS.TRIBUTE_THEME_VARIANT_KEY) ?
    JSON.parse(localStorage.getItem(CONSTANTS.TRIBUTE_THEME_VARIANT_KEY)) : 'dark';

const store = configureStore({
    reducer: {
        ui: uiReducer,
        message: messageReducer,
        story: storyReducer,
        auth: authReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        medallion: medallionReducer,
        checkout: checkoutReducer,
        order: orderReducer
    },
    preloadedState: {
        ui: {themeVariant, activePath: '/', drawerOpen: false},
        auth: {
            authData: {
                firstName: 'Inigo',
                lastName: 'Lopez',
                username: 'inigo.lopez',
                email: 'inigo.lopez@societyofjesus.org',
                fullName: 'Inigo Lopez',
                phone: '+233270048319',
                status: 'Active',
                address: {
                    country: 'Ghana',
                    stateOrProvinceOrRegion: 'Greater Accra',
                    city: 'Accra',
                    zipCode: '00233',
                    addressLine1: 'Atakorah Estates 2',
                    addressLine2: 'Ashogman Estates'
                }
            }
        }
    }
});

export default store;
