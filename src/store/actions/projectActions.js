export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //TODO async call to database
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Onur Can",
        authorLastName: "Tasyurek",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};
