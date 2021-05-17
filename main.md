---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

# **Sever Sent Events**

---

# **Websockets & Alternatives**

- `Short polling`: Unidirectional, Client -> Server
- `Long polling`: Unidirectional, Client -> Server
- `Websockets:` Bidirectional
- `Server sent event (SSE)`, Unidirectional, Client <- Server

---

# **Long polling v.s. Server sent event (SSE)**

- `Long polling` opens an HTTP request and remains open until an update is received. Upon receiving an update, a new request is immediately opened awaiting the next update.
- `Server sent event (SSE)` rely on a long-lived HTTP connection, where updates are continuously sent to the client.

---

# **Demo**

---

# **Server sent event**

"Websockets and Server sent events were in the experiments measured to have very similar performance and they were measured to be `the most performance efficient` of the compared technologies in the experimental conditions used in this study. This suggests that to increase server performance and reduce hardware costs these technologies would be better than the other technologies compared."

Faculty of Computing
Blekinge Institute of Technology
SE-371 79 Karlskrona Sweden

---

# **Unanswered Questions**

- What if the resume finishing being processed before a user is ready to listen
