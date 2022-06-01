FROM node
# COPY package*.json ./
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
# RUN npm run build
# RUN bash -c "npm install && npm run build"
# WORKDIR /app
# RUN npm install


# FROM nginx:1.21.6 AS production-stage
# RUN mkdir /app
# COPY --from=build-stage /app/build/ /app
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Note that this does not actually publish the port because this builds an image, not a container!
EXPOSE 80
