export default (state = {}, action) => {
  switch (action.type) {
    case 'DISCOVER_MOVIES':
      return action.payload;
    default:
      return state;
  }
};
