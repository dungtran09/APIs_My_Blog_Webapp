curl \
-X POST \
-d @./data/create.json \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/api/v1/auth/signup" \
-o ./data/log.json && cat ./data/log.json | jq
