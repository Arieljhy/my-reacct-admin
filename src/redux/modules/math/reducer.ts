import { AnyAction } from "redux";
import produce from "immer";

const numState = {
	number: 10
};
// global reducer
const number = (state :any = numState , action: AnyAction) =>
	produce(state, (draftState:any)  => {
		switch (action.type) {
			case 'ADD_STATE':
				draftState.number = action.num + state.number;
				break;
			case 'SQUARE':
				draftState.number =  state.number * state.number ;
				break;
			case "GET":
				draftState.number = action.num;
				break;
			default:
				return draftState;
		}
	});

export default number;
