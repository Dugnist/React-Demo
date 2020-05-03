/* eslint-disable react/react-in-jsx-scope */
import { init } from '@rematch/core';
import { Provider } from '../redux';

const initStore = (models) => {
  const store = init({ models });

  return (props) => <Provider store={store}>{props.children}</Provider>;
};

export default {
  initStore,
};
