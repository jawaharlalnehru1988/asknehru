# Understanding Ports - SSH vs Application

## The Key Confusion: VPS_PORT

You asked if `VPS_PORT` should be "asknehru application port number where my asknehru is running"

**This is a very common confusion!** Let me explain the difference:

## 🚪 SSH Port (VPS_PORT) - Port 22

```
┌─────────────────────────────────────────────────────────┐
│                    YOUR VPS SERVER                      │
│                                                         │
│   SSH Port 22  ◄──── This is VPS_PORT                  │
│        │                                                │
│        ▼                                                │
│   ┌─────────────────────────┐                          │
│   │  SSH Service            │                          │
│   │  (Login to server)      │                          │
│   └─────────────────────────┘                          │
│        │                                                │
│        │ After you login via SSH,                      │
│        │ you can access everything inside!             │
│        │                                                │
│        ▼                                                │
│   ┌─────────────────────────┐                          │
│   │  Your Angular App       │                          │
│   │  Runs on Port 4200      │ ◄── NOT needed for       │
│   │  (or 4201, 8080, etc)   │     GitHub Secrets!      │
│   └─────────────────────────┘                          │
│        │                                                │
│        ▼                                                │
│   ┌─────────────────────────┐                          │
│   │  Nginx (Port 80/443)    │                          │
│   │  Serves to public       │                          │
│   └─────────────────────────┘                          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## 🔑 What Each Port Does

### SSH Port (22) - What VPS_PORT Should Be
- **Purpose**: Connect to the server for management
- **Used by**: SSH clients, GitHub Actions, system administrators
- **Command**: `ssh user@server -p 22`
- **Analogy**: The front door to your house

### Application Port (4200, 4201, etc) - NOT VPS_PORT
- **Purpose**: Where your Angular dev server runs internally
- **Used by**: Your application, only accessible after logging in
- **Command**: `ng serve --port 4201` (inside the server)
- **Analogy**: Which room of your house your app is in

### Web Port (80, 443) - Also NOT VPS_PORT
- **Purpose**: Public web access (HTTP/HTTPS)
- **Used by**: Nginx/Apache serving your app to the world
- **Command**: Configured in nginx
- **Analogy**: Your house's address that visitors use

## 🎯 The GitHub Actions Flow

```
GitHub Actions          SSH Connection         Inside VPS
     │                       │                      │
     │  Uses VPS_PORT (22)   │                      │
     ├──────────────────────►│  Login via SSH       │
     │                       │                      │
     │                       ├─────────────────────►│
     │                       │  Now inside server   │
     │                       │                      │
     │  Copy build files     │  Place in            │
     │  to VPS_DEPLOY_PATH   │  /var/www/asknehru   │
     │                       │                      │
     │                       │  Nginx serves        │
     │                       │  to public on        │
     │                       │  port 80/443         │
     │                       │                      │
```

## ✅ Your Correct Value

```yaml
VPS_PORT: 22
```

**NOT** your application port!

## 🤔 When Do You Need Application Port?

You DON'T need it for GitHub Secrets!

You only care about application port when:
1. Running dev server locally: `ng serve --port 4201`
2. Configuring nginx to proxy to your app (inside VPS)
3. Accessing during development

But for GitHub Actions to deploy, it only needs:
- SSH Port (22) to connect
- Deploy Path (/var/www/asknehru) to copy files

## 📝 Quick Test

To verify your understanding, answer this:

**Question**: When you SSH into your server, what command do you use?

```bash
# Option A (correct):
ssh asknehru-prod@your-vps-ip -p 22

# Option B (wrong):
ssh asknehru-prod@your-vps-ip -p 4201
```

**Answer**: Option A is correct! You use port 22 (SSH port), not 4201 (app port).

That's exactly why `VPS_PORT` should be `22`!

## 🎓 Summary

| Port Type | Port Number | What For | Needed in GitHub Secrets? |
|-----------|-------------|----------|---------------------------|
| SSH Port | 22 | Login to server | ✅ YES (VPS_PORT) |
| App Port | 4200, 4201, 8080, etc | Angular app runs here | ❌ NO |
| Web Port | 80, 443 | Public access (HTTP/HTTPS) | ❌ NO |

## 💡 Remember

**VPS_PORT = How to GET INTO the server = 22**

**NOT** where your app runs inside the server!

---

Still confused? Think of it this way:

- You need a key (SSH) to enter your house (port 22)
- Once inside, you can go to any room (app on port 4201)
- Visitors access through the front address (web on port 80)

GitHub Actions needs the KEY (port 22), not the room number!
