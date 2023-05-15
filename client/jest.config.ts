import type {Config} from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  transform: {
  "^.+\\.tsx?$": "babel-jest",
  },
};
export default config;