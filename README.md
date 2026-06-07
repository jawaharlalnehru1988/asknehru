# AskNehru Frontend

Angular frontend for asknehru.com.

## Development

```bash
npm install
npm start
```

## Build

```bash
cd /var/www/asknehru-platform/frontend
npm ci
npm run build
```

Production build output:

```text
/var/www/asknehru-platform/frontend/dist/asknehru/browser
```

## Deployment

This app is served statically by nginx.

Main site config:

```text
/etc/nginx/sites-available/asknehrufullstack
```

Current production deploy path:

```bash
cd /var/www/asknehru-platform/frontend
git pull origin master
npm ci
npm run build
sudo systemctl reload nginx
```
