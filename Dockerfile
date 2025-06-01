FROM node:lts-bullseye

# Declare build arguments and set default values
ARG TARGET_WORKDIR=/.

# Set the TARGET_WORKDIR environment variable for bootstrap script
ENV TARGET_WORKDIR=${TARGET_WORKDIR}

WORKDIR ${TARGET_WORKDIR}

RUN apt update && apt upgrade -y

COPY . .

RUN npm install

# make sh executable
RUN chmod +x entrypoint.sh

# Expose port 3000
EXPOSE 3000

# Set the entrypoint
ENTRYPOINT ["./entrypoint.sh"]



