docker build --no-cache -f SQL\Dockerfile.PostgreSql -t singlespasample/postgre-sql ../SQL

docker build --no-cache -f root-app\Dockerfile -t singlespasample/root-app ../..

docker build --no-cache -f ember-app\Dockerfile -t singlespasample/ember-app ../..

docker build --no-cache -f react-app\Dockerfile -t singlespasample/react-app ../..

docker build --no-cache -f backend\Dockerfile -t singlespasample/backend ../..
