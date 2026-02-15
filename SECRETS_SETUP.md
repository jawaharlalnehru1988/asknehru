# GitHub Secrets Setup Checklist

## Quick Setup Guide

Follow these steps to configure GitHub secrets for automated deployment:

### Step 1: Navigate to Repository Settings
1. Go to: https://github.com/jawaharlalnehru1988/asknehru/settings/secrets/actions
2. Click on **"New repository secret"**

### Step 2: Add the Following Secrets

Add each secret one by one:

#### Secret 1: VPS_HOST
- **Name**: `VPS_HOST`
- **Value**: Your VPS server's IP address or hostname
- **Example**: `203.0.113.10` or `server.example.com`
- **How to find**: On your VPS, run `curl ifconfig.me` or check your hosting provider's control panel
- Click "Add secret"

#### Secret 2: VPS_USERNAME
- **Name**: `VPS_USERNAME`
- **Value**: The SSH username you use to login to your VPS
- **Example**: `root`, `ubuntu`, `asknehru-prod`, etc.
- **How to verify**: This is the part before the `@` when you SSH: `ssh <USERNAME>@server-ip`
- Click "Add secret"

#### Secret 3: VPS_PASSWORD
- **Name**: `VPS_PASSWORD`
- **Value**: Your SSH password (the password you type to login)
- **Note**: This is NOT a passphrase for SSH keys, but the actual SSH login password
- **Security**: Consider switching to SSH keys for better security (see DEPLOYMENT.md)
- Click "Add secret"

#### Secret 4: VPS_PORT
- **Name**: `VPS_PORT`
- **Value**: `22` (default SSH port)
- **Important**: This is the **SSH port** (usually 22), NOT your application's port!
- **Note**: Only change if you've customized your SSH port
- Click "Add secret"

#### Secret 5: VPS_DEPLOY_PATH
- **Name**: `VPS_DEPLOY_PATH`
- **Value**: The absolute path where files should be deployed
- **Example**: `/var/www/asknehru` or `/home/username/app`
- **Format**: Just the path (e.g., `/var/www/asknehru`), NOT the full prompt like `user@host:/path#`
- **Note**: Make sure this directory exists and is writable by your SSH user
- Click "Add secret"

### Step 3: Verify Secrets Configuration
After adding all secrets, you should see:
- ✓ VPS_HOST
- ✓ VPS_USERNAME
- ✓ VPS_PASSWORD
- ✓ VPS_PORT
- ✓ VPS_DEPLOY_PATH

### Step 4: VPS Preparation

Before triggering the workflow, ensure your VPS is ready:

#### If You're Setting Up for the First Time:

```bash
# SSH into your VPS (replace with your actual VPS IP and username)
ssh username@your-vps-ip

# Create deployment directory
mkdir -p /var/www/asknehru
chmod 755 /var/www/asknehru

# Install nginx if not installed
apt update
apt install nginx -y

# Configure nginx (see DEPLOYMENT.md for detailed instructions)
```

#### ⚠️ If Your App is Already Running on the VPS:

**IMPORTANT:** The automated deployment will **replace** files in your deployment directory!

Before enabling automated deployment:

```bash
# 1. SSH into your VPS
ssh username@your-vps-ip

# 2. Create a backup of your current deployment
sudo cp -r /var/www/asknehru /var/www/asknehru-backup-$(date +%Y%m%d)

# 3. Verify the deployment directory exists and has correct permissions
ls -la /var/www/asknehru
sudo chmod 755 /var/www/asknehru

# 4. Check if you need to restart services after deployment
# If yes, update the workflow's script section (see below)
```

**If you need to restart nginx after each deployment:**

Edit `.github/workflows/deploy.yml` and update the script section:

```yaml
script: |
  echo "Deployment completed successfully!"
  sudo systemctl restart nginx
  echo "Nginx restarted"
```

### Step 5: Trigger Deployment

Once secrets are configured and VPS is prepared:

1. Push code to `main` or `master` branch:
   ```bash
   git checkout main  # or master
   git merge copilot/integrate-vps-ssh-deployment
   git push origin main  # or master
   ```

2. Monitor the deployment:
   - Go to: https://github.com/jawaharlalnehru1988/asknehru/actions
   - Watch the "Build and Deploy to VPS" workflow run

### Troubleshooting

If the workflow fails:
1. Check that all secrets are spelled exactly as shown above
2. Verify VPS SSH access: `ssh username@your-vps-ip`
3. Check workflow logs in GitHub Actions for specific errors
4. Ensure the deployment directory exists and is writable

#### Common Mistakes to Avoid:

❌ **Wrong VPS_PORT**: Using your application port (like 4200, 8080) instead of SSH port (22)  
✅ **Correct**: Use `22` (or your custom SSH port if you changed it)

❌ **Wrong VPS_DEPLOY_PATH**: Using full prompt like `root@server:/var/www/app#`  
✅ **Correct**: Use just the path: `/var/www/asknehru`

❌ **Wrong VPS_HOST**: Using provider name like "hetzner" or "digitalocean"  
✅ **Correct**: Use the actual IP address like `123.45.67.89` or hostname

❌ **Wrong VPS_USERNAME**: Using server hostname instead of SSH username  
✅ **Correct**: Use the username part from `ssh <username>@host`

#### How to Verify Your Values:

```bash
# Test SSH connection with your values:
ssh VPS_USERNAME@VPS_HOST -p VPS_PORT

# Example with real values:
ssh asknehru-prod@123.45.67.89 -p 22

# If this works, your values are correct!
```

### Security Recommendations

⚠️ **IMPORTANT SECURITY NOTES**:

1. **Use SSH Keys Instead of Passwords** (Highly Recommended)
   - More secure than password authentication
   - See DEPLOYMENT.md for instructions

2. **Change Default Credentials**
   - If using default credentials, change them immediately
   - Use strong, unique passwords

3. **Restrict SSH Access**
   - Consider changing SSH port from 22 to a non-standard port
   - Configure firewall rules (UFW/iptables)
   - Disable root login after setting up a non-root user

4. **Enable SSL/HTTPS**
   - Install Let's Encrypt SSL certificate
   - Use Certbot for free SSL certificates

## Next Steps

After successful deployment:
1. ✅ Access your application at: http://your-vps-ip (or your domain)
2. ✅ Configure a domain name (optional)
3. ✅ Set up SSL certificate with Let's Encrypt
4. ✅ Configure environment-specific settings
5. ✅ Set up monitoring and logging

## Need Help?

- Check `DEPLOYMENT.md` for detailed documentation
- Review workflow logs in GitHub Actions
- Verify VPS logs: `sudo tail -f /var/log/nginx/error.log`
