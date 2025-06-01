#!/bin/sh

set -e

echo "📦 Installing dependencies..."
npm install

echo "⚙️ Building the project..."
npm run build

echo "🚀 Starting the server..."
npm run start
