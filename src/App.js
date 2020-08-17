import React from 'react';

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import NewsContainer from './components/newsContainer';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware 
  )
)
function App() {
  return (
    <div className="App" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"lightblue"}}>
      <Provider store={store}>
        <NewsContainer></NewsContainer>
      </Provider>
    </div>
  );
}

export default App;
