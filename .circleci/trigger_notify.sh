#!/usr/bin/env bash

curl \
-i \
-X POST \
-H 'Content-Type: application/json' \
-d '{"text": "😱 Hello, this is some text from CircleCI\nThis is more text. :tada:"}' https://chat.ptsecurity.com/hooks/rak3tz7fziybzr97buxw6xhzuy


post_data=$(cat <<EOF
{
  "accountName": "Torkeldegaard",
  "projectSlug": "logdisplayplatform",
  "branch": "master"
}
EOF
)

echo ${post_data}

curl \
--header "Accept: application/json" \
--header "Content-Type: application/json" \
--data "${post_data}" \
--request POST https://chat.ptsecurity.com/hooks/rak3tz7fziybzr97buxw6xhzuy
