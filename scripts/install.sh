#!/bin/bash

set -e

installing_dir=""

if [[ $(echo "$PATH" | grep "/usr/local/bin") ]]; then
  installing_dir="/usr/local/bin"
elif [[ $(echo "$PATH" | grep "/usr/bin") ]]; then
  installing_dir="/usr/bin"
elif [[ $(echo "$PATH" | grep "/bin") ]]; then
  installing_dir="/bin"
else
  read -p "Please spec the folder where you install: " -r installing_dir
fi

read -p "installing at $installing_dir, type [y|Y] and enter to confirm " -r confirm
if [[ "$confirm" == "y" || "$confirm" == "Y" ]]; then
  echo "Installing..."
  sudo cp ./bin/tache "$installing_dir/tache"
  echo "Installed"
else
  echo "Installation canceled"
fi
