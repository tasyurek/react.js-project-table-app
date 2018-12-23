const initState = {
  projects: [
    {
      id: "1",
      title: "Marketing Website",
      content: "Create a marketing website"
    },
    {
      id: "2",
      title: "Homework Maker",
      content: "Create a homework maker website"
    },
    {
      id: "3",
      title: "New AI Search Engine",
      content: "Research for AI for search engines"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("project created");
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("project created failed");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
