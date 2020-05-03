import { Users } from '../services/users.api';

export default {
  state: {
    list: [],
  },
  reducers: {
    setAllUsers(state, users) {
      return {
        ...state,
        list: users,
      };
    },
  },
  effects: (dispatch) => ({
    async getUsers() {
      try {
        const response = await Users.get('?per_page=15');

        dispatch.users.setAllUsers(response.data);
        console.log(response);
      } catch (error) {
        alert(error.message);
      }
    },
  }),
};
