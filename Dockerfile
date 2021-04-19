ARG FROM_IMAGE=usgs/obspy:3.8

FROM ${FROM_IMAGE}

WORKDIR /usr/local/shakecast-imaging
EXPOSE 5000

ENV GOSU_VERSION=1.11
RUN gpg --keyserver ha.pool.sks-keyservers.net --recv-keys B42F6819007F00F88E364FD4036A9C25BF357DD4 \
    && curl -o /usr/local/bin/gosu -SL "https://github.com/tianon/gosu/releases/download/${GOSU_VERSION}/gosu-amd64" \
    && curl -o /usr/local/bin/gosu.asc -SL "https://github.com/tianon/gosu/releases/download/${GOSU_VERSION}/gosu-amd64.asc" \
    && gpg --verify /usr/local/bin/gosu.asc \
    && rm /usr/local/bin/gosu.asc \
    && rm -r /root/.gnupg/ \
    && chmod +x /usr/local/bin/gosu \
    # Verify that the binary works
    && gosu nobody true

COPY scripts ./scripts
RUN find ./scripts -type f -iname "*.sh" -exec chmod +x {} \;

# Install gecko driver and firefox
RUN ./scripts/gecko-install.sh; \
    yum install firefox -y;

COPY requirements.txt .

RUN pip install -r requirements.txt; 

COPY shakecastimaging ./shakecastimaging

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]