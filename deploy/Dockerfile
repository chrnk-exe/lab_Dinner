FROM nginx
COPY build /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/nginx.conf
# COPY nginx-entrypoint.sh /docker-entrypoint.d/nginx-entrypoint.sh:ro
EXPOSE 80