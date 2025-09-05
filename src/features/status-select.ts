import { RootState } from 'store'
import { pictIndexes } from './status-slide'

export const getStatus = (state: RootState) => state.stateInd.status
export const getCurInd = (state: RootState) => state.stateInd.curInd
export const isPrevEnabled = (state: RootState) => state.stateInd.curInd > 0
export const isNextEnabled = (state: RootState) =>
  state.stateInd.curInd < pictIndexes.length - 1
