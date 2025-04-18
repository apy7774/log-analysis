FROM node:16-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends python3 build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Create directories for logs and reports
RUN mkdir -p ./logs ./reports

# Set environment variables
ENV NODE_ENV=production

# Expose ports for API and Slack
EXPOSE 3000 3001

# Run the agent
CMD ["node", "index.js"]
