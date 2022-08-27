import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "../features/ui/ui-slice";
import messageReducer from "../features/message/message-slice";
import storyReducer from "../features/story/story-slice";
import authReducer from "../features/auth/auth-slice";
import cartReducer from "../features/cart/cart-slice";
import wishlistReducer from "../features/wishlist/wishlist-slice";
import medallionReducer from "../features/medallion/medallion-slice";

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
        medallion: medallionReducer
    },
    preloadedState: {
        ui: {themeVariant, activePath: '/', drawerOpen: false},
        auth: {
            authData: {
                firstName: 'Inigo',
                lastName: 'Lopez',
                username: 'inigo.lopez',
                email: 'inigo.lopez@societyofjesus.org',
                fullName: 'Inigo Lopez'
            }
        }
    }
});

export default store;
