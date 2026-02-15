# GitHub Secrets Clarification - YOUR SPECIFIC SETUP

## ❓ Your Questions Answered

You asked about these secrets and had some confusion. Let me clarify each one:

---

### 1️⃣ VPS_HOST
**What you said:** "hertzner"  
**What it should be:** Your VPS server's IP address or hostname

**✅ Correct value:**
- If you know your Hetzner VPS IP address, use that (e.g., `123.45.67.89`)
- Or use the hostname if Hetzner gave you one (e.g., `server.hetzner.com`)

**How to find it:**
```bash
# When you SSH into your VPS, you use something like:
ssh asknehru-prod@<THIS_IS_YOUR_VPS_HOST>

# To find your current IP from inside VPS:
curl ifconfig.me
# or
hostname -I
```

---

### 2️⃣ VPS_USERNAME
**What you said:** "asknehru-prod which is the ssh name"  
**✅ CORRECT!** This is your SSH username

**Correct value:** `asknehru-prod`

This is the username you use when you SSH into the server:
```bash
ssh asknehru-prod@your-vps-ip
```

---

### 3️⃣ VPS_PASSWORD
**What you said:** "murari16108 which is passphrase password"  
**✅ CORRECT!** This is your SSH password

**Correct value:** `murari16108`

This is the password you type after running the SSH command to log in.

---

### 4️⃣ VPS_PORT
**What you said:** "asknehru application port number where my asknehru is running"  
**❌ NOT CORRECT - Common confusion!**

**VPS_PORT is the SSH port, NOT your application port**

**✅ Correct value:** `22` (default SSH port)

**Explanation:**
- **SSH Port (VPS_PORT):** The port used to connect to your server via SSH (usually 22)
- **Application Port:** Where your app runs (like 4200, 4201, 8080, etc.) - NOT needed here!

The GitHub Action needs to SSH into your server, so it needs the SSH port (22), not where your Angular app runs.

---

### 5️⃣ VPS_DEPLOY_PATH
**What you said:** "root@asknehru-prod:/var/www/asknehru#"  
**❌ NOT CORRECT - This is a full SSH prompt, not just the path**

**✅ Correct value:** `/var/www/asknehru`

**Explanation:**
- `root@asknehru-prod:/var/www/asknehru#` ← This is your terminal prompt showing you're logged in
- `/var/www/asknehru` ← This is just the directory path we need

This is where the workflow will copy your built Angular files on the VPS.

---

## 📋 Summary - Your Correct Values

Based on your information, here are your GitHub Secrets:

| Secret Name | Your Value | Explanation |
|-------------|------------|-------------|
| `VPS_HOST` | `<your-hetzner-ip>` | Find this with `curl ifconfig.me` on VPS |
| `VPS_USERNAME` | `asknehru-prod` | ✅ Correct! Your SSH username |
| `VPS_PASSWORD` | `murari16108` | ✅ Correct! Your SSH password |
| `VPS_PORT` | `22` | SSH port (not application port!) |
| `VPS_DEPLOY_PATH` | `/var/www/asknehru` | Just the path, not the full prompt |

---

## 🔍 How to Find Your VPS_HOST (IP Address)

Since you're already connected to your VPS, run this command:

```bash
# On your VPS, run:
curl ifconfig.me

# This will show your public IP address, like: 123.45.67.89
# Use that as VPS_HOST
```

Or check your Hetzner control panel - it shows your server's IP address.

---

## ⚠️ Important: You Already Have a Running Application

You mentioned your application is already running on the VPS. Here's what will happen:

### Current Setup
- Your app is running at `/var/www/asknehru`
- Nginx is probably serving it

### After GitHub Actions Deploy
- GitHub Actions will **replace** the files in `/var/www/asknehru`
- Your current deployment will be overwritten
- You might need to restart nginx

### Recommendation: Backup First! 🔒

Before enabling automated deployment:

```bash
# SSH into your VPS
ssh asknehru-prod@your-vps-ip

# Create a backup of your current deployment
sudo cp -r /var/www/asknehru /var/www/asknehru-backup-$(date +%Y%m%d)

# Check nginx configuration
sudo nginx -t

# If you need to restart nginx after deployment, add this to the workflow:
# sudo systemctl restart nginx
```

---

## 🚀 Next Steps

1. **Find your VPS IP:**
   ```bash
   ssh asknehru-prod@your-vps-ip  # You already know this command
   curl ifconfig.me               # This will show your IP
   ```

2. **Add GitHub Secrets** with these values:
   - VPS_HOST: `<the-ip-from-step-1>`
   - VPS_USERNAME: `asknehru-prod`
   - VPS_PASSWORD: `murari16108`
   - VPS_PORT: `22`
   - VPS_DEPLOY_PATH: `/var/www/asknehru`

3. **Backup your current deployment** (see commands above)

4. **Update the workflow** if you need to restart nginx after deployment

5. **Test the deployment** by merging the PR

---

## 🔧 Optional: Update Workflow to Restart Nginx

If you need nginx to restart after deployment, update the workflow's post-deployment script:

```yaml
# In .github/workflows/deploy.yml, update the script section:
script: |
  echo "Deployment completed successfully!"
  sudo systemctl restart nginx
  echo "Nginx restarted"
```

---

## 💡 Quick Reference Commands

```bash
# Find your VPS IP
curl ifconfig.me

# SSH into your VPS (what you're already doing)
ssh asknehru-prod@<your-vps-ip>

# Backup current deployment
sudo cp -r /var/www/asknehru /var/www/asknehru-backup

# Check nginx status
sudo systemctl status nginx

# Restart nginx (if needed after deployment)
sudo systemctl restart nginx

# View deployment directory
ls -la /var/www/asknehru
```

---

## ✅ Checklist Before First Automated Deploy

- [ ] Found VPS IP address (`curl ifconfig.me`)
- [ ] Backed up existing deployment
- [ ] Added all 5 GitHub Secrets correctly
- [ ] Verified nginx is running (`sudo systemctl status nginx`)
- [ ] Understand that automated deploy will replace current files
- [ ] Ready to monitor first deployment in GitHub Actions

---

**Questions?** Check DEPLOYMENT.md or SECRETS_SETUP.md for more details!
