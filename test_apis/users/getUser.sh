curl \
-X GET \
-b "$(cat ../config/COOKIE.txt)" \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/api/v1/users/$(cat ./data/id.txt)" \
-o ./data/log.json && cat ./data/log.json | jq
