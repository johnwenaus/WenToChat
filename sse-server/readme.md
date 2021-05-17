# Run server

```
node server.js
```

# Post resume for client Gavin

```
curl -X POST \
 -H "Content-Type: application/json" \
 -d '{ "candidateId": "John", "content": "Good morning all."}'\
 -s http://localhost:3000/post
```

```
curl -X POST \
 -H "Content-Type: application/json" \
 -d '{ "candidateId": "Mark", "content": "Hello John Boy!"}'\
 -s http://localhost:3000/post
```

# Client Gavin is listening to resume upload result

```
curl -H Accept:text/event-stream http://localhost:3000/events\?id\=John
```
```
curl -H Accept:text/event-stream http://localhost:3000/events\?id\=Mark
```

# Client Reyna is listening to resume upload result

```
curl -H Accept:text/event-stream http://localhost:3000/events\?id\=Reyna
```
