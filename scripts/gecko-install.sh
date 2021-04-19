#!/bin/bash
# download and install latest geckodriver for linux or mac.
# required for selenium to drive a firefox browser.

install_dir="/usr/local/bin"

# download and install jq
wget https://github.com/stedolan/jq/releases/download/jq-1.5/jq-linux64 -O jq
chmod +x jq
mv jq "$install_dir"

json=$(curl -s https://api.github.com/repos/mozilla/geckodriver/releases/latest)
if [[ $(uname) == "Darwin" ]]; then
    url=$(echo "$json" | jq -r '.assets[].browser_download_url | select(contains("macos"))')
elif [[ $(uname) == "Linux" ]]; then
    url=$(echo "$json" | jq -r '.assets[].browser_download_url | select(contains("linux64"))')
else
    echo "can't determine OS"
    exit 1
fi
curl -s -L "$url" | tar -xz
chmod +x geckodriver
mv geckodriver "$install_dir"
echo "installed geckodriver binary in $install_dir"
