FROM shakecast/centos

COPY . /usr/local/shakecast-imaging

WORKDIR /usr/local/shakecast-imaging

RUN pip install -r requirements.txt; \
    ./util/gecko-install.sh; \
    yum install firefox -y;

EXPOSE 5000

ENTRYPOINT ["python", "-m", "shakecastimaging.server"]