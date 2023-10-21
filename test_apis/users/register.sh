curl \
-X POST \
-d @./data/register.json \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/api/v1/auth/sign-up" \
-o ./data/log.json && cat ./data/log.json | jq
