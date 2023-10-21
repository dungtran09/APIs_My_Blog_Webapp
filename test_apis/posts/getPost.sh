curl \
-X GET \
-b "$(cat ../config/COOKIE.txt)" \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/api/v1/posts/$(cat ../config/ID.txt)" \
-o ./data/log.json && cat ./data/log.json | jq
