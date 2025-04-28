import { Project } from "../pages/Projects/interfaces";

export function arrayToMap(arr: Project[]): Map<number, Project> {
  const resultMap = new Map<number, Project>();
  arr.forEach(item => {
    resultMap.set(item.id, item);
  });
  return resultMap;
}

export const getProjectId = () => {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries())["id"];
};