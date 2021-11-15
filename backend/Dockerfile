FROM python:alpine3.9 
ENV PYTHONBUFFERED 1

RUN mkdir -p /server
WORKDIR /server

COPY requirements.txt requirements.txt

ARG username
RUN adduser -D ${username}  
RUN chown -R ${username} /server

RUN apk add --no-cache --virtual .build-deps gcc \
  build-base mysql-client  freetds-dev \
    && apk add --no-cache  make \
    && pip3 install virtualenv \
    && su -l ${username} \
    && virtualenv install \
    && su -l ${root} \
    && find /usr/local \
        \( -type d -a -name test -o -name tests \) \
        -o \( -type f -a -name '*.pyc' -o -name '*.pyo' \) \
        -exec rm -rf '{}' + \
    && runDeps="$( \
        scanelf --needed --nobanner --recursive /usr/local \
                | awk '{ gsub(/,/, "\nso:", $2); print "so:" $2 }' \
                | sort -u \
                | xargs -r apk info --installed \
                | sort -u \
    )" \
    && apk add --virtual .rundeps $runDeps \
    && apk del .build-deps \
    && su -l ${username} 

COPY . /server