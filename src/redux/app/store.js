import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "../features/ui/ui-slice";
import messageReducer from "../features/message/message-slice";
import storyReducer from "../features/story/story-slice";
import authReducer from "../features/auth/auth-slice";

import {CONSTANTS} from "../../utils/constants";


const themeVariant = localStorage.getItem(CONSTANTS.TRIBUTE_THEME_VARIANT_KEY) ?
    JSON.parse(localStorage.getItem(CONSTANTS.TRIBUTE_THEME_VARIANT_KEY)) : 'dark';

const store = configureStore({
    reducer: {
        ui: uiReducer,
        message: messageReducer,
        story: storyReducer,
        auth: authReducer
    },
    preloadedState: {
        ui: {themeVariant, activePath: '/', drawerOpen: false},
    }
});

export default store;
