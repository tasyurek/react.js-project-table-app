export const createProject = project => {
  return (dispatch, getState) => {
    //TODO async call to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
