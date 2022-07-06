# FROM mysql:8.0-debian

# Allows connections on docker network and not just localhost (I think...)
# RUN sed -Ei 's/^(bind-address|log)/#&/' /etc/mysql/my.cnf \
#     && echo 'skip-host-cache\nskip-name-resolve' | awk '{ print } $1 == "[mysqld]" && c == 0 { c = 1; system("cat") }' /etc/mysql/my.cnf > /tmp/my.cnf \
#     && mv /tmp/my.cnf /etc/mysql/my.cnf

# EXPOSE 3306
