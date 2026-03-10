FROM python:3.12-slim

RUN pip install --no-cache-dir docling --extra-index-url https://download.pytorch.org/whl/cpu

ENV DOCLING_ARTIFACTS_PATH=/models
WORKDIR /work
ENTRYPOINT ["docling"]
