FROM php:7-apache

ENV APACHE_DOCUMENT_ROOT /usr/src/myapp

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN docker-php-ext-install pdo pdo_mysql

# COPY . /usr/src/myapp
# WORKDIR /usr/src/myapp

EXPOSE 80

# CMD ["php", "./index.php"]

