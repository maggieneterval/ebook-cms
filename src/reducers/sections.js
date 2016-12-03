import axios from 'axios';

//-------------------------ACTION TYPES-------------------------//

const GET_ALL_SECTIONS = 'GET_ALL_SECTIONS';
const GET_ONE_SECTION = 'GET_ONE_SECTION';
const ADD_NEW_SECTION = 'ADD_NEW_SECTION';
const EDIT_SECTION = 'EDIT_SECTION';
const DELETE_SECTION = 'DELETE_SECTION';

//-------------------------REDUCER-------------------------//

const sections = (state=[], action) => {
  switch (action.type) {
    case GET_ALL_SECTIONS:
      return action.sections;
    case ADD_NEW_SECTION:
      return state.concat(action.section);
    case EDIT_SECTION:
      return state.splice(action.section.index, 1, action.section);
    case DELETE_SECTION:
      return state.splice(action.section.index, 1);
    default:
      return state;
  }
};

export default sections;

//-------------------------GET ALL SECTIONS-------------------------//

const getAllSections = (sections) => ({
    type: GET_ALL_SECTIONS,
    sections
});

export const asyncGetAllSections = () => {
  return (dispatch) => {
    return axios.get('/api/sections')
      .then(res => {
        return dispatch(getAllSections(res.data));
      });
  };
};

//-------------------------GET ONE SECTION-------------------------//

const getOneSection = (section) => ({
    type: GET_ONE_SECTION,
    section
});

export const asyncGetOneSection = (id) => {
  return (dispatch) => {
    return axios.get(`/api/sections/${id}`)
      .then(res => {
        return dispatch(getOneSection(res.data));
      });
  };
};

//-------------------------POST NEW SECTION-------------------------//

const postSection = (section) => ({
  type: ADD_NEW_SECTION,
  section
});

export const asyncPostSection = (data) => {
  return (dispatch) => {
    return axios.post('/api/sections', data)
      .then(res => {
        dispatch(postSection(res.data));
      });
  };
};

//-------------------------EDIT ONE SECTION-------------------------//

const editSection = (editedSection) => ({
  type: EDIT_SECTION,
  editedSection
});

export const asyncEditSection = (id) => {
  return (dispatch) => {
    return axios.put(`/api/sections/${id}`)
      .then(res => {
        dispatch(editSection(res.data));
      });
  };
};

//-------------------------DELETE ONE SECTION-------------------------//

const deleteSection = (deletedSection) => ({
  type: DELETE_SECTION,
  deletedSection
});

export const asyncDeleteSection= (id) => {
  return (dispatch) => {
    return axios.delete(`/api/sections/${id}`)
      .then(res => {
        dispatch(deleteSection(res.data));
      });
  };
};
