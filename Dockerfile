# Development stage
FROM node:18-alpine

WORKDIR /app

# Copy package files and install all dependencies
COPY package*.json ./ 
RUN npm install

# Copy the source files
COPY . .

# Set environment variables for development
ENV NODE_ENV=development

# Expose the development port
EXPOSE 3000

# Start the application using npm
CMD ["npm", "run", "start:dev"]
