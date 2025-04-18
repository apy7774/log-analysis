# Create a project directory
mkdir slack-logs-analyzer
cd slack-logs-analyzer

# Initialize a new npm project
npm init -y

# Install required dependencies
npm install @slack/bolt @slack/web-api express multer winston natural @tensorflow/tfjs-node csv-writer chrono-node node-cron dotenv
