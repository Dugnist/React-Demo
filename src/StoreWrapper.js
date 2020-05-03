/* eslint-disable react/react-in-jsx-scope */
import rematch from './plugins/rematch';
// models
import userModel from './modules/users/models/user.model';

const models = {
  users: userModel,
};

const Wrapper = rematch.initStore(models);

export default (props) => <Wrapper>{props.children}</Wrapper>;
