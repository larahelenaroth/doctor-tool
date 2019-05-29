import {
  GET_DOCTORS,
  SEARCH_DOCTORS,
  GET_DOC_INFO,
  GET_TASK_INFO
} from '../actions/types';

const initialState = {
  doctors: [],
  masterDoctors: [],
  viewDoctor: {
    info: [],
    tasks: []
  },
  tasks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
        masterDoctors: action.payload
      };
    case SEARCH_DOCTORS:
      return {
        ...state,
        doctors: state.masterDoctors.filter(
          doc =>
            doc.first_name
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            doc.last_name
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            doc.doctor_id.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    case GET_DOC_INFO:
      return {
        ...state,
        viewDoctor: action.payload
      };
    case GET_TASK_INFO:
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return state;
  }
}
