export default function (state = null, action) {
  switch (action.type) {
    case "ENROLLEMENT_GET_ALL":
      state.EnrollementList = action.payload
      return state;
      break;
  }
  return state;
}