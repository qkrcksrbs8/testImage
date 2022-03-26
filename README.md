# 도커 기초 입니다.

*이미지 빌드
docker build . -t node-app

*이미지 조회
docker images

*이미지 실행
docker run -d -p 3000:3000 node-app

*도커 프로세스 확인
docker ps
