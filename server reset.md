Great! Now let's edit your Docker Compose file to increase the upload limit:

bash
nano /opt/directus/docker-compose.yml
Look for the directus service section and add the FILES_MAX_UPLOAD_SIZE environment variable. Here's what you need to add:

yaml
services:
  directus:
    # ... existing configuration
    environment:
      FILES_MAX_UPLOAD_SIZE: "104857600"  # 100MB
      # ... other existing environment variables
After editing, restart your containers:

bash
cd /opt/directus
docker-compose down
docker-compose up -d
Also check your Nginx configuration since you have the file /etc/nginx/sites-available/directus:

bash
nano /etc/nginx/sites-available/directus

Make sure it includes:

nginx
server {
    # ... existing config
    client_max_body_size 100M;
    client_body_timeout 300s;
    proxy_read_timeout 300s;
    # ... rest of config
}
Then restart Nginx:

bash
systemctl restart nginx

File size reference:

50MB: 52428800
100MB: 104857600
200MB: 209715200
500MB: 524288000
Would you like me to help you check the current contents of your docker-compose.yml file first?