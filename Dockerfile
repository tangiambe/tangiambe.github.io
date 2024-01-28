# Production stage
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the application files
COPY . .

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the NGINX server
CMD ["nginx", "-g", "daemon off;"]
