const ADD_TODO = 'todos/ADD_TODO'; // 할일 항목을 추가할때 사용하는 액션
const TOGGLE_TODO = 'todos/TOGGLE_TODO'; //할일항목을 체크할때 사용하는 액션



let nextId = 1;
export const addTodo = (text) =>({
      type: ADD_TODO,
      todo: {
            id: nextId++,
            text
      }
});

export const toggleTodo = (id) =>({
      type: TOGGLE_TODO,
      id
});

const initialState = [];

export default function todos (state = initialState, action) {
      switch (action.type) {
            case ADD_TODO:
                  return state.concat(action.todo);
            case TOGGLE_TODO:
                  return state.map( 
                        todo => todo.id === action.id 
                        ? {
                              ...todo, 
                              done: !todo.done
                        } : todo
                  ); // todo id 가 action id랑 일치하면 done 값을 바꿔준다

            default:
                  return state;
      }
}