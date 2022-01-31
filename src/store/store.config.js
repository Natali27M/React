import {configureStore} from "@reduxjs/toolkit";

import carSliceReducer from "./car.slice";
import userSliceReducer from "./user.slice";
import postSliceReducer from "./post.slice";
import commentSliceReducer from "./comment.slice";

const store = configureStore({

    reducer: {
        carSliceReducer,
        userSliceReducer,
        postSliceReducer,
        commentSliceReducer
    }
});

export default store;