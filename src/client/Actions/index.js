import { ADD_ARTICLE } from "../../static/JS/actionConstants";
export const addArticle = payload => {
  return { type: "ADD_ARTICLE", payload };
};
