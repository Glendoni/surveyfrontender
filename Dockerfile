#!/bin/bash
# base image
FROM node:8

# install chrome for protractor tests
RUN mkdir /usr/src/app

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install -g @angular/cli

# add app
COPY . .


docker build -t testimage .
# start app
CMD ng serve --host 0.0.0.0
