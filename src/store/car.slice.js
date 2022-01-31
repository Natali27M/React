import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_,{rejectWithValue})=>{
        try {
            const cars = await carService.getAll();
            return cars;
        }catch (e){
            return rejectWithValue(e.message);
        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car},{dispatch})=>{
        try {
                const newCar = await carService.create(car);
                dispatch(addCar({data: newCar}));
        }catch (e){
            console.log(e);
        }
    }
);

export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCarThunk',
    async ({id, car}, {dispatch}) => {
        console.log({id,car})
        try {
            await carService.updateById(id, car);
            dispatch(getAllCars());
        } catch (e) {
            console.log(e);
        }
    }
);

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id},{dispatch})=>{
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        }catch (e){
            console.log(e)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',

    initialState: {
        cars: [],
        status: null,
        error: null,
        carId:null,
        form:[]
    },

    reducers: {
        addCar: (state,action) => {
            state.cars.push(action.payload.data);
        },

        deleteCar: (state,action) => {
            state.cars= state.cars.filter(car=>car.id!==action.payload.id)
        },
        updateCar: (state, action) => {
            state.id = action.payload;
        },
        addForm: (state, action) => {
            state.form = action.payload.car;
        }
    },

    extraReducers:{
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'reject';
            state.error = action.payload;
        },
    }
});

const carSliceReducer = carSlice.reducer;

export const {addCar, deleteCar, addForm} = carSlice.actions;

export default carSliceReducer;
