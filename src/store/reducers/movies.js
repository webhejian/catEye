import stateInit from '../state/movies'
export default function(state=stateInit,action){
   state = JSON.parse(JSON.stringify(state))
   return state;
}