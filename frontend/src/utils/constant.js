export const USER_BASE_URL = "http://localhost:8000/api/user";
export const JOB_BASE_URL = "http://localhost:8000/api/job";
export const APPLICATION_BASE_URL = "http://localhost:8000/api/application";

export const getInitialName = (userName) => {
  if (!userName) return "CN";
  return userName
    .split(" ")
    .map((name) => name[0])
    .join("");
};
