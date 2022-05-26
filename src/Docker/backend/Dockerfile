FROM mono:latest as backend

COPY /src/SingleSpaSample /src/SingleSpaSample

RUN \
    cd /src/SingleSpaSample ;\
    nuget restore SingleSpaSample.sln; \
    msbuild /p:Configuration=Release SingleSpaSample.sln

FROM flexberry/mono-xsp:latest

LABEL org.opencontainers.image.authors="mail@flexberry.net"

COPY /src/SingleSpaSample/ODataBackend /app
WORKDIR /app