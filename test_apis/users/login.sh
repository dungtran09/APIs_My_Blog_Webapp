curl \
-X POST \
-d @./data/login.json \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/api/v1/auth/login" \
-o ./data/log.json && cat ./data/log.json | jq
