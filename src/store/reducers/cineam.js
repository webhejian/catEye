import stateInit from '../state/cinema'
export default function(state=stateInit,action){
   state = JSON.parse(JSON.stringify(state))
   return state;
}