FROM node

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --force

# Note that this does not actually publish the port because this builds an image, not a container!
EXPOSE 80
