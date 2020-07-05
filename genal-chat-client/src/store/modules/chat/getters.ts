import { GetterTree } from 'vuex';
import { ChatState } from './state';
import { RootState } from '../../index'

const getters: GetterTree<ChatState, RootState> = {
  socket(state) {
    return state.socket
  },
  groups(state) {
    return state.groups;
  },
  friends(state) {
    return state.friends
  },
  activeRoom(state) {
    return state.activeRoom
  },
  groupGather(state) {
    return state.groupGather
  },
  userGather(state) {
    return state.userGather
  },
} 

export default getters;