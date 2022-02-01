import {configureStore} from "@reduxjs/toolkit";

import textSliceReducer from "./text.slice";

const store = configureStore({
    reducer: {
        textSliceReducer
    }
});

export default store;