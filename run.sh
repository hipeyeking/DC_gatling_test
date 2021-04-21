#!/bin/bash
echo -e "host: $1\nrepeat: $2\nduring: $3\nuser: $4" > ./src/test/resources/data/config.yaml
exec mvn clean compile&mvn gatling:test
