# Base Image
FROM node:alpine

# Setuo Working directory
WORKDIR '/usr/app'

# Copy path-to-local-file-system path-to-copy-stuff-in-container, will copy all data relative to WORKDIR 
COPY ./ ./

# Install DEPS
RUN npm install

# Port mapping

# Default Command to Run
CMD ["npm", "start"]
