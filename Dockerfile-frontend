# Use an official Node.js image as the base image
FROM node:latest as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the container
COPY . ./

# Build the React app
RUN npm run build

# Use a lightweight Nginx image to serve the React app
FROM nginx:alpine

# Copy the built React app from the build stage to the Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000 for the Nginx web server
EXPOSE 3000

# Nginx is automatically started, no need for CMD or ENTRYPOINT

