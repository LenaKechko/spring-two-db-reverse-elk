FROM logstash:8.13.0
#FROM logstash:7.16.2

# copy the postgres jdbc driver to the external library folder of logstash
COPY ./bin/ /usr/share/logstash/logstash-core/lib/jars/
COPY ./drivers/* /usr/share/logstash/drivers/

COPY config/ /usr/share/logstash/config/

CMD ["logstash", "-f", "/usr/share/logstash/config/usersync.conf"]

RUN mkdir -p /usr/share/logstash/opt/logstash-mongodb

#RUN /usr/share/logstash/bin/logstash-plugin install logstash-input-mongodb
RUN /usr/share/logstash/bin/logstash-plugin install logstash-output-jdbc