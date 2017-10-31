#!/bin/bash

cd ../tasks.base
mvn -e clean install

cd ../tasks.engine
mvn -e clean install

cd ../tasks.war
mvn -e clean tomcat:run
