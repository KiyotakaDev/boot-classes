# Node image
FROM node:16

# Dir
WORKDIR /app

# PKGS
COPY package*.json ./

# PKGS Install
RUN npm install

# Copy
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 5000

# Execute server
CMD ["npm", "run", "dev"]

# Build image
# docker build -t test
# Execute
# docker run -p 5000:5000 test