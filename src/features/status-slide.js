import { createSlice } from "@reduxjs/toolkit"

export const pictIndexes = [0, 4, 8, 11, 1, 5, 9, 12, 2, 6, 13, 3, 7, 10, 14]

const initialState = {
    status: 'gallery', // 'gallery', 'detail'
    curInd: 0
}

const stateIndSlice = createSlice({
    name: '@@statusInd',
    initialState,
    reducers: {
        setStatus: (state, action) => { state.status = action.payload },
        setPictInd: (state, action) => {state.curInd = action.payload }
    }
})

export const { setStatus, setPictInd } = stateIndSlice.actions
export const stateIndReducer = stateIndSlice.reducer

export const getStatus = state => state.stateInd.status
export const getCurInd = state => state.stateInd.curInd
export const isPrevEnabled = state => state.stateInd.curInd > 0
export const isNextEnabled = state => state.stateInd.curInd < pictIndexes.length - 1
