// Import our actions from our actions file
import { ADD_TASK, REMOVE_TASK, TASK_COMPLETE, END_OF_DAY } from './actions';

// Reducer accepts state and an action, returns a new state
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };
      case REMOVE_TASK:
        return {
          ...state,
          goals: [...state.goals, action.payload],
        };
    case TASK_COMPLETE:
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };
    case END_OF_DAY:
      return {
        ...state,
        metrics: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };

      case TASK_COMPLETE: {
        const goalIndex = state.goals.findIndex((goal) => goal.id === action.payload);
        const updatedGoal = { ...state.goals[goalIndex], isComplete: false };
  
        const goalsCopy = [...state.goals];
        goalsCopy[goalIndex] = updatedGoal;
  
        return {
          ...state,
          goals: goalsCopy,
        },
      };
    default:
      return state;
  }
}
