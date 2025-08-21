#!/bin/bash

# === LOG START ===
echo "🚀 Starting Portfolio Deployment..."
LOG_FILE="/var/www/updated-portfolio-website/deploy.log"
echo "==== Deployment Started at $(date) ====" >> $LOG_FILE

# === Step 1: Pull Latest Code ===
cd /var/www/updated-portfolio-website || exit
echo "🔄 Pulling latest code..." | tee -a $LOG_FILE
git pull >> $LOG_FILE 2>&1

# === Step 2: Frontend Build ===
cd client || exit
echo "🧹 Cleaning previous dist folder..." | tee -a $LOG_FILE
rm -rf dist >> $LOG_FILE 2>&1

echo "📦 Installing frontend dependencies..." | tee -a $LOG_FILE
npm install >> $LOG_FILE 2>&1

echo "⚙️ Building React frontend..." | tee -a $LOG_FILE
npm run build >> $LOG_FILE 2>&1

echo "📁 Deploying frontend build to Nginx directory..." | tee -a $LOG_FILE
sudo rm -rf /var/www/portfolio-client/* >> $LOG_FILE 2>&1
sudo cp -r dist/* /var/www/portfolio-client/ >> $LOG_FILE 2>&1

# === Step 3: Backend Deployment ===
cd ../server || exit
echo "📂 Current directory contents:" | tee -a $LOG_FILE
ls | tee -a $LOG_FILE

echo "🔄 Restarting backend PM2 process (ID 1)..." | tee -a $LOG_FILE
pm2 restart 1 >> $LOG_FILE 2>&1

echo "📦 Installing backend dependencies..." | tee -a $LOG_FILE
npm install >> $LOG_FILE 2>&1

# === Step 4: Reload Nginx ===
echo "🔁 Reloading Nginx..." | tee -a $LOG_FILE
sudo systemctl reload nginx >> $LOG_FILE 2>&1

echo "✅ Portfolio Deployment completed at $(date)" | tee -a $LOG_FILE