docker build -f SQL/Dockerfile.PostgreSql -t singlespasample/postgre-sql ../SQL
docker build -f root-app/Dockerfile -t singlespasample/root-app ../..
docker build -f ember-app/Dockerfile -t singlespasample/ember-app ../..
docker build -f ember-app-navbar/Dockerfile -t singlespasample/ember-app-navbar ../..
docker build -f react-app/Dockerfile -t singlespasample/react-app ../..
docker build -f react-odata-app/Dockerfile -t singlespasample/react-odata-app ../..
docker build -f backend/Dockerfile -t singlespasample/backend ../..
