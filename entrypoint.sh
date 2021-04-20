#!/usr/bin/env bash
# Docker entrypoint for the shakecast server

USER_ID=${SHAKECAST_USER_ID:-0}

# Run any arguments directly
if [ $# -gt 0 ];
then
  exec "$@"

  exit 0;

elif [ "${USER_ID}" -gt 0 ];
then
  # Running shakecast as a local user
  echo "Starting Shakecast-Imaging with UID : $USER_ID";

  id -u shakecast &>/dev/null || useradd -u $USER_ID -o shakecast;
  chown -R shakecast:shakecast .;

exec /usr/local/bin/gosu shakecast python3 -m shakecastimaging.server;
  exit 0;
fi

# Running shakecast as the root user
echo "
**************************************************************************
Starting Shakecast-Imaging as Root, recommend setting SHAKECAST_USER_ID
to a local user id

Example:
export SHAKECAST_USER_ID=\${UID}

**************************************************************************
";

exec python3 -m shakecastimaging.server;
