import { createStore, combineReducers } from "redux";

const ADD = "ADD";
const DELETE = "DELETE"


/*action creator*/
const addTodo = (text) => {
  return {
    type: ADD,
    text
  };
}

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id
  };
}

/*reducer*/
const reducer = (state = [], action) => { //text 값을 받아서 화면에 출력
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const lsReducer = (state = [], action) => {  // todoAry에 값을 저장해서 localStorage에 넣고 싶습니다ㅠㅠ

}

const rootReducer = combineReducers({ // reducer통합
  reducer,
  lsReducer
});

const store = createStore(rootReducer);


export const actionCreators = {
  addTodo,
  deleteTodo
};

export default store;