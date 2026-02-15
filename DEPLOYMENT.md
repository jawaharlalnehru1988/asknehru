# Deployment Guide

This repository is configured to automatically build and deploy to your VPS via GitHub Actions whenever code is pushed to the `main` or `master` branch.

## Prerequisites

1. A VPS server with SSH access
2. Node.js and npm installed on the VPS (optional, for build on server)
3. A web server (nginx/apache) configured to serve the application

## GitHub Secrets Configuration

To enable automated deployment, you need to configure the following secrets in your GitHub repository:

### How to Add Secrets:
1. Go to your GitHub repository
2. Click on **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Add each of the following secrets:

### Required Secrets:

| Secret Name | Description | Example Value |
|-------------|-------------|---------------|
| `VPS_HOST` | Your VPS IP address or hostname | `203.0.113.10` |
| `VPS_USERNAME` | SSH username for VPS | `root` or your username |
| `VPS_PASSWORD` | SSH password for VPS | `your-secure-password` |
| `VPS_PORT` | SSH port (default is 22) | `22` |
| `VPS_DEPLOY_PATH` | Target directory on VPS | `/var/www/asknehru` or `/home/user/app` |

### Security Notes:
- **IMPORTANT**: Keep your VPS password secure and never commit it to the repository
- Never commit passwords or sensitive data directly in your code
- Consider using SSH keys instead of passwords for better security

## Deployment Workflow

The GitHub Actions workflow (`.github/workflows/deploy.yml`) performs the following steps:

1. **Checkout code**: Downloads your repository code
2. **Setup Node.js**: Installs Node.js 18
3. **Install dependencies**: Runs `npm ci` to install packages
4. **Build application**: Runs `npm run build` to compile Angular app
5. **Deploy to VPS**: Copies the built files to your VPS
6. **Execute commands**: Runs post-deployment commands on VPS (optional)

## VPS Setup

### 1. Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install nginx (if not already installed)
sudo apt install nginx -y

# Create deployment directory
sudo mkdir -p /var/www/asknehru
sudo chown $USER:$USER /var/www/asknehru
```

### 2. Configure Nginx

Create nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/asknehru
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/asknehru;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/asknehru /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 3. Configure Firewall

```bash
# Allow SSH and HTTP
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## Using SSH Keys (Recommended)

For better security, consider using SSH keys instead of passwords:

### On your local machine:
```bash
ssh-keygen -t ed25519 -C "github-actions"
```

### Copy public key to VPS:
```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub username@your-vps-ip
```

### Update GitHub Secrets:
- Add `VPS_SSH_KEY` secret with the private key content
- Update the workflow to use `key` instead of `password`

## Troubleshooting

### Workflow fails with "Permission denied"
- Verify SSH credentials are correct
- Check that the user has write permissions to the deployment directory

### Build fails
- Check Node.js version compatibility
- Verify all dependencies are listed in `package.json`

### Nginx shows 403 Forbidden
- Check file permissions: `sudo chmod -R 755 /var/www/asknehru`
- Verify nginx user has read access

### Application not loading
- Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`
- Verify build output directory matches nginx root

## Manual Deployment

If you need to deploy manually:

```bash
# On your local machine
npm install
npm run build

# Copy to VPS
scp -r dist/asknehru/* username@your-vps-ip:/var/www/asknehru/
```

## Monitoring Deployments

- View workflow runs: Go to **Actions** tab in your GitHub repository
- Check deployment logs for any errors
- Monitor VPS resources: `htop`, `df -h`, `free -m`

## Additional Configuration

### Custom Post-Deployment Commands

Edit `.github/workflows/deploy.yml` and modify the "Execute deployment commands on VPS" step:

```yaml
script: |
  cd /var/www/asknehru
  sudo systemctl restart nginx
  echo "Deployment completed at $(date)"
```

### Deploy to Multiple Environments

You can create separate workflows for staging and production by:
1. Creating `deploy-staging.yml` and `deploy-production.yml`
2. Using different branch triggers
3. Using different sets of secrets for each environment

## Support

For issues or questions:
1. Check workflow logs in GitHub Actions
2. Review nginx error logs on VPS
3. Verify all secrets are configured correctly
