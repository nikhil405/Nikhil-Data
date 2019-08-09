FROM node:8-alpine

# copy all files from our project dir into the image at location /app
COPY * /u01/app/qwinix/
# sets the current working directory for future commands to /app
WORKDIR /u01/app/qwinix/

# declare that the container will provide a service on port 80
EXPOSE 80s

# this will get executed when container starts
ENTRYPOINT node index.js
