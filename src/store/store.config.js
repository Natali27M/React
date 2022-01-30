import {configureStore} from "@reduxjs/toolkit";

import carSliceReducer from "./car.slice";

const store = configureStore({

    reducer: {
        carSliceReducer
    }

});

export default store;