curl \
-X POST \
-c "$(cat ../config/COOKIE.txt)" \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/api/v1/auth/log-out" \
-o ./data/log.json && cat ./data/log.json | jq

