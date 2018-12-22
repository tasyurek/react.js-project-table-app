import React from "react";

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
    case "CREATE_PROJECT":
      console.log("project created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("project created", action.project);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
