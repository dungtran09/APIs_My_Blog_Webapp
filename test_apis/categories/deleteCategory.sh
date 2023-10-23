curl \
-X DELETE \
-b "$(cat ../config/COOKIE.txt)" \
-d @./data/create.json \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/api/v1/categories/$(cat ./data/id.txt)" \
-o ./data/log.json && cat ./data/log.json | jq
