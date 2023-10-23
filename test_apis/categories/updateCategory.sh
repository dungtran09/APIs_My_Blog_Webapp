curl \
-X PATCH \
-b "$(cat ../config/COOKIE.txt)" \
-d @./data/update.json \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/api/v1/categories/$(cat ./data/id.txt)" \
-o ./data/log.json && cat ./data/log.json | jq 
