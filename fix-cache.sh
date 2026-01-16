#!/bin/bash
# Fix Metro bundler cache issue

echo "Stopping Metro bundler..."
pkill -f "react-native start" || true

echo "Clearing watchman cache..."
watchman watch-del-all 2>/dev/null || true

echo "Clearing Metro cache..."
rm -rf /tmp/metro-* /tmp/haste-* 2>/dev/null || true

echo "Cache cleared! Now start Metro with: yarn start --reset-cache"
echo "Or run: yarn ios (which will start Metro automatically)"
