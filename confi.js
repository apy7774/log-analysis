module.exports = {
  logDir: process.env.LOG_DIR || './logs',
  defaultChannel: process.env.DEFAULT_CHANNEL || '#devops-alerts',
  apiPort: parseInt(process.env.API_PORT || '3000'),
  slackPort: parseInt(process.env.SLACK_PORT || '3001'),
  
  // Define custom log patterns
  patterns: {
    error: /(error|exception|fail|failed|failing)/i,
    warning: /(warning|warn|caution)/i,
    deployment: /(deploy|deployment|released|release)/i,
    security: /(security|vulnerability|threat|attack|breach)/i,
    // Add your custom patterns here
  },
  
  // Define scheduled jobs
  scheduledJobs: [
    {
      name: 'daily-summary',
      schedule: '0 9 * * *', // 9 AM daily
      query: 'get critical errors from the last 24 hours',
      channel: '#devops-alerts',
      active: true
    }
  ]
};
