export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POPULAR':
    case 'FETCH_TOP_RATED':
    case 'FETCH_UPCOMING':
      return action.payload;
    default:
      return state;
  }
};
