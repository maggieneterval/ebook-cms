import axios from 'axios';

//-------------------------ACTION TYPES-------------------------//

const GET_ALL_CHAPTERS = 'GET_ALL_CHAPTERS';
const GET_ONE_CHAPTER = 'GET_ONE_CHAPTER';
const ADD_NEW_CHAPTER = 'ADD_NEW_CHAPTER';
const EDIT_CHAPTER = 'EDIT_CHAPTER';
const DELETE_CHAPTER = 'DELETE_CHAPTER';

//-------------------------REDUCER-------------------------//

const chapters = (state=[], action) => {
  switch (action.type) {
    case GET_ALL_CHAPTERS:
      return action.chapters;
    case ADD_NEW_CHAPTER:
      return state.concat(action.chapter);
    case EDIT_CHAPTER:
      return state.splice(action.chapter.index, 1, action.chapter);
    case DELETE_CHAPTER:
      return state.splice(action.chapter.index, 1);
    default:
      return state;
  }
};

export default chapters;

//-------------------------GET ALL CHAPTERS-------------------------//

const getAllChapters = (chapters) => ({
    type: GET_ALL_CHAPTERS,
    chapters
});

export const asyncGetAllChapters = () => {
  return (dispatch) => {
    return axios.get('/api/chapters')
      .then(res => {
        return dispatch(getAllChapters(res.data));
      });
  };
};

//-------------------------GET ONE CHAPTER-------------------------//

const getOneChapter = (chapter) => ({
    type: GET_ONE_CHAPTER,
    chapter
});

export const asyncGetOneChapters = (index) => {
  return (dispatch) => {
    return axios.get(`/api/chapters/${index}`)
      .then(res => {
        return dispatch(getOneChapter(res.data));
      });
  };
};

//-------------------------POST NEW CHAPTER-------------------------//

const postChapter = (chapter) => ({
  type: ADD_NEW_CHAPTER,
  chapter
});

export const asyncPostChapter = (data) => {
  return (dispatch) => {
    return axios.post('/api/chapters', data)
      .then(res => {
        dispatch(postChapter(res.data));
      });
  };
};

//-------------------------EDIT ONE CHAPTER-------------------------//

const editChapter = (editedChapter) => ({
  type: EDIT_CHAPTER,
  editedChapter
});

export const asyncEditChapter = (chapter) => {
  return (dispatch) => {
    return axios.put(`/api/chapters/${chapter}`)
      .then(res => {
        dispatch(editChapter(res.data));
      });
  };
};

//-------------------------DELETE ONE CHAPTER-------------------------//

const deleteChapter = (deletedChapter) => ({
  type: DELETE_CHAPTER,
  deletedChapter
});

export const asyncDeleteChapter = (chapterToDelete) => {
  return (dispatch) => {
    return axios.delete(`/api/chapters/${chapterToDelete}`)
      .then(res => {
        dispatch(deleteChapter(res.data));
      });
  };
};
