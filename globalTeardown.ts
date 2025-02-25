import { FullConfig } from '@playwright/test';
import fs from 'fs';

async function globalTeardown(config: FullConfig) {
  console.log('Running global teardown...');

  // Delete storageState.json
  const path = './authUser.json';
    // Check if the file exists
    if (fs.existsSync(path)) {
        // Overwrite the file with an empty state
        const emptyState = {
          cookies: [],
          origins: [],
        };
        fs.writeFileSync(path, JSON.stringify(emptyState, null, 2));
        console.log(`Cleared ${path}`);
      } else {
        console.log(`${path} does not exist. Skipping cleanup.`);
      }
}

export default globalTeardown;