curl \
-X PATCH \
-d @./data/update.json \
-b "$(cat ../config/COOKIE.txt)" \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/posts/$(cat ../config/ID.txt)" \
-o ./data/log.json && cat ./data/log.json | jq 
