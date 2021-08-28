// Import our actions from our actions file
import { useReducer } from 'react';
import { ADD_GOAL, UPDATE_GOAL, ADD_METRIC, UPDATE_METRIC } from './actions';

// Reducer accepts state and an action, returns a new state
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, action.payload],
      }
    case UPDATE_GOAL: {
      const goalIndex = state.goals.findIndex((goal) => goal.id === action.payload.id);
      const updatedGoal = {
        ...state.goals[goalIndex],
        ...action.payload,
      };
      const newGoalsList = [...state.goals];
      newGoalsList[goalIndex] = updatedGoal;
      return {
        ...state,
        goals: newGoalsList,
      };
    }
    case ADD_METRIC: {
      return {
        ...state,
        metrics: [...state.metrics, action.payload],
      }
    }
    case UPDATE_METRIC: {
      const metricIndex = state.metrics.findIndex((metric) => metric.id === action.payload.id);
      const updatedMetric = {
        ...state.metrics[metricIndex],
        ...action.payload,
      };
      const newMetricsList = [...state.metrics];
      newMetricsList[metricIndex] = updatedMetric;
      return {
        ...state,
        metrics: newMetricsList,
      };
    }
    default:
      return state;
  }
}

export function useGoalReducer(initialState) {
  return useReducer(reducer, initialState)
}