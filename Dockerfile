# Get the base image of Node version 20
FROM node:20-alpine

# Get the v1.43.1 version of Playwright
FROM mcr.microsoft.com/playwright:v1.50.1-noble

# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# Set the work directory for the application
WORKDIR /app

# Copy the rest of the application files
COPY . /app/

# Install dependencies
RUN npm install

# Set the entry point for the container
RUN npx playwright test --workers 1 --project=chromium || true
