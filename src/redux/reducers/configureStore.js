import {legacy_createStore} from 'redux';
import rootReducer from './index';

export default function configureStore () {
  return legacy_createStore (rootReducer);
}
