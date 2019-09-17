FROM node:10.16-alpine

# Set enviroments
ENV NODE_ENV production
ENV APPLICATION_DIR /opt/current

# Create app directory
RUN mkdir -p $APPLICATION_DIR
WORKDIR $APPLICATION_DIR

# Bundle app source
COPY . $APPLICATION_DIR/

# Install dependencies
RUN npm install --production

EXPOSE 8080

CMD [ "npm", "run", "start" ]
