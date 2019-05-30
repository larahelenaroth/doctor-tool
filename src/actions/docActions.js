import {
  GET_DOCTORS,
  SEARCH_DOCTORS,
  GET_DOC_INFO,
  GET_TASK_INFO
} from './types';
import axios from 'axios';
import config from '../config';

/* 
  Payloads to send data to the store
*/

/* List All Doctors */
export const getDoctors = () => async dispatch => {
  const docRes = await axios.get(`${config.url}/reference/getDoctors`);

  dispatch({
    type: GET_DOCTORS,
    payload: docRes.data
  });
};

/* Search Doctor Name */
export const searchDoctors = searchText => {
  return {
    type: SEARCH_DOCTORS,
    payload: searchText
  };
};

/* Get Single Doctor Information & Tasks */
export const getDocInfo = doctor_id => async dispatch => {
  const docRes = await axios.get(`${config.url}/doctor/${doctor_id}`);
  const taskRes = await axios.get(`${config.url}/tasks/${doctor_id}`);
  const viewDoctor = {
    info: docRes.data[0],
    tasks: taskRes.data
  };
  dispatch({
    type: GET_DOC_INFO,
    payload: viewDoctor
  });
};

/* Get All Tasks */
export const getTasks = () => async dispatch => {
  const taskRes = await axios.get(`${config.url}/tasks/getTasks`);
  dispatch({
    type: GET_TASK_INFO,
    payload: taskRes.data
  });
};
