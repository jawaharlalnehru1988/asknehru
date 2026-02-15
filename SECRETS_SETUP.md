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
- **Value**: `91.99.67.35`
- Click "Add secret"

#### Secret 2: VPS_USERNAME
- **Name**: `VPS_USERNAME`
- **Value**: `root` (or your actual SSH username)
- Click "Add secret"

#### Secret 3: VPS_PASSWORD
- **Name**: `VPS_PASSWORD`
- **Value**: `murari16108`
- Click "Add secret"

#### Secret 4: VPS_PORT
- **Name**: `VPS_PORT`
- **Value**: `22`
- Click "Add secret"

#### Secret 5: VPS_DEPLOY_PATH
- **Name**: `VPS_DEPLOY_PATH`
- **Value**: `/var/www/asknehru` (adjust if you want a different path)
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

```bash
# SSH into your VPS
ssh root@91.99.67.35

# Create deployment directory
mkdir -p /var/www/asknehru
chmod 755 /var/www/asknehru

# Install nginx if not installed
apt update
apt install nginx -y

# Configure nginx (see DEPLOYMENT.md for detailed instructions)
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
2. Verify VPS SSH access: `ssh root@91.99.67.35`
3. Check workflow logs in GitHub Actions for specific errors
4. Ensure the deployment directory exists and is writable

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
1. ✅ Access your application at: http://91.99.67.35
2. ✅ Configure a domain name (optional)
3. ✅ Set up SSL certificate with Let's Encrypt
4. ✅ Configure environment-specific settings
5. ✅ Set up monitoring and logging

## Need Help?

- Check `DEPLOYMENT.md` for detailed documentation
- Review workflow logs in GitHub Actions
- Verify VPS logs: `sudo tail -f /var/log/nginx/error.log`
