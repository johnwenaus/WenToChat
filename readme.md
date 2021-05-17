- go to /sse-server folder
- start the server
  ```
  npm run start
  ```
- monitor chat room as John
  ```
  curl -H Accept:text/event-stream http://localhost:3000/events\?id\=John
  ```
- monitor chat room as Richard
  ```
  curl -H Accept:text/event-stream http://localhost:3000/events\?id\=Richard
  ```
- post to chat room as John
  ```
  curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"clientId": "John", "content": "Good morning Richard"}'\
    -s http://localhost:3000/post
  ```
- post to chat room as Richard
  ```
  curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"clientId": "Richard", "content": "Good morning John"}'\
    -s http://localhost:3000/post
  ```
