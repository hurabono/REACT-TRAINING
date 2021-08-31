import {createStore} from 'redux';

const initalState = {
      counter : 0,
      text: '',
      list: []    
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const  increase = () => ({
      type: INCREASE,
});

const decrease = () =>({
      type: DECREASE,
});

const changeText = text => ({
      type: CHANGE_TEXT,
      text,
});

const addToList = item =>({
      type: ADD_TO_LIST,
      item,
});

function reducer (state = initalState, action){
      switch(action.type) {
            case INCREASE :
                  return {
                        ...state,
                        counter: state.counter + 1
                  };
            case DECREASE: 
                  return {
                        ...state, 
                        counter: state.couter -1
                  };
            case CHANGE_TEXT:
                  return {
                        ...state,
                        test: action.text
                  };
            case ADD_TO_LIST:
                  return {
                        ...state, 
                        list: state.list.concat(action.item)
                  };
            default: 
            return state;
            
      }
}

const store = createStore(reducer);
console.log(store.getState());

//store 로 초기값이 잘 만들어지면 subscribe 와 dispatch 를 통해서 컴포넌트를 만들어준다. 

const listener = () =>{
      const state = store.getState();
      console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('Hello world!!'));
store.dispatch(addToList( {id:1, text: 'wow' } ) );

