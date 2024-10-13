# Use Node.js v22 alpine as the base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your app
RUN npm run build

# Expose the HTTPS port
EXPOSE 5173

# Command to run your app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]