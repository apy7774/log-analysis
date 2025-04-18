require('dotenv').config();
const SlackLogAnalyzerAgent = require('./slack-agent');
const config = require('./config');

// Create the agent instance
const agent = new SlackLogAnalyzerAgent({
  // Slack credentials
  slackSigningSecret: process.env.SLACK_SIGNING_SECRET,
  slackBotToken: process.env.SLACK_BOT_TOKEN,
  slackAppToken: process.env.SLACK_APP_TOKEN,
  
  // Configuration
  ...config
});

console.log('Slack DevOps Log Analyzer Agent is running!');

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('Shutting down agent...');
  process.exit(0);
});
