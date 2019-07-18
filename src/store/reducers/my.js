import stateInit from '../state/my'
export default function(state=stateInit,action){
   state = JSON.parse(JSON.stringify(state))
   return state;
}