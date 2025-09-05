import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const pictIndexes = [0, 4, 8, 11, 1, 5, 9, 12, 2, 6, 13, 3, 7, 10, 14]

export type SlideStatus = 'gallery' | 'detail'

interface SlideState {
  status: SlideStatus
  curInd: number
}

const initialState: SlideState = {
  status: 'gallery', // 'gallery', 'detail'
  curInd: 0,
}

const stateIndSlice = createSlice({
  name: '@@statusInd',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<SlideStatus>) => {
      state.status = action.payload
    },
    setPictInd: (state, action: PayloadAction<number>) => {
      state.curInd = action.payload
    },
  },
})

export const { setStatus, setPictInd } = stateIndSlice.actions
export const stateIndReducer = stateIndSlice.reducer
