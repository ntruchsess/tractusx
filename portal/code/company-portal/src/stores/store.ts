import {compose, createStore} from 'redux';
import reducer from '../reducers';
declare let window: Window;
export const getDevToolsExt = () => {
    // eslint-disable-next-line
    // @ts-ignore
    if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line
        // @ts-ignore
        const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
        if (typeof devToolsExtension === 'function') {
            return [devToolsExtension];
        }
    }

    return [];
};


const store = createStore(reducer, compose(...getDevToolsExt()));

//store.dispatch({type: actions.GlobalActions.INIT_APP});

export default store;
