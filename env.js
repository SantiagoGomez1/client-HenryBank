import { CLIENT_ID, REDIRECT_URL } from "@env";

const devEnvironmentVariables = {
  CLIENT_ID,
  REDIRECT_URL,
};

const prodEnvironmentVariables = {
  CLIENT_ID,
  REDIRECT_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
