import { defineConfig, devices } from "@playwright/test";
import { testConfig } from "./testconfig";

interface EnvUrls {
  baseUrl: string;
}

// Function to get URLs based on the environment
function getUrlsForEnvironment(env: string): EnvUrls {
  const envLower = env.toLowerCase();
  const environment = testConfig[envLower];
  if (!environment) {
    throw new Error(`Unknown environment: ${env}`);
  }
  return environment;
}

const env = process.env.TEST_ENV || "dev";
const { baseUrl } = getUrlsForEnvironment(env);

export default defineConfig({
  testDir: "./tests",
  reporter: [
    ["line"],
    ['junit', { outputFile: 'junit/results.xml' }],
    ["html"]
  ],
  use: {
    storageState: 'authUser.json', // Load the saved state
    headless: false,
    baseURL: baseUrl,
    trace: "on-first-retry",
    // storageState: "auth.json",
    screenshot: "on",
    video: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* Test against mobile viewports. */
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
  timeout: 30000,
  globalTeardown: './globalTeardown.ts',
  retries: 2,
  workers: 1,
  
});
