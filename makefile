run:
	docker build -t papaskas/fbi .
	docker run --rm -p 80:80 papaskas/fbi

push:
	docker build -t papaskas/fbi .
	docker push papaskas/fbi

pull:
	docker image pull papaskas/fbi
