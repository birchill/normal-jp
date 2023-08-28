import { defineConfig } from 'vitest/config';
import GithubActionsReporter from 'vitest-github-actions-reporter';

export default defineConfig({
  test: {
    include: ['./src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: process.env.GITHUB_ACTIONS
      ? ['default', new GithubActionsReporter()]
      : 'default',
  },
});
