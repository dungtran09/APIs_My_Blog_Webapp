curl \
-X GET \
-b "$(cat ../config/COOKIE.txt)" \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/api/v1/posts/post-tags" \
-o ./data/log.json && cat ./data/log.json | jq
