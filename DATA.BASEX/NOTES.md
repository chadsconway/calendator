Docker Image
Docker images for versions 9.x

The BaseX server is also available as automated build basex/basexhttp on the Docker Hub, providing both release and nightly builds. All images are automatically rebuild if Docker provides updated base images.

To start a BaseX container based on the latest development release publishing the BaseX server and HTTP ports 1984 and 8984 and bind-mounting your user's basex/data directory, run:

```
docker run -d \
    --name basexhttp \
    --publish 1984:1984 \
    --publish 8984:8984 \
    --volume "$HOME/basex/data":/srv/basex/data \
    basex/basexhttp:latest
```

Once the container is running, you can connect to its REST, RESTXQ and WebDAV services.

You can use the BaseX client to connect to the database in the container:

```
docker exec -ti basexhttp basexclient
```

The container directories /srv/basex/data, /srv/basex/repo and /srv/basex/webapp are persisted as volumes, which means they cannot be preinitialized in the application image.

You can bind-mount each of them to directories in your work environment:

```
docker run -d \
    --name basexhttp \
    --publish 1984:1984 \
    --publish 8984:8984 \
    --volume "$HOME/basex/data":/srv/basex/data \
    --volume "$HOME/basex/repo":/srv/basex/repo \
    --volume "$HOME/basex/webapp":/srv/basex/webapp \
    basex/basexhttp:latest
```

BaseX runs as user basex with fixed user ID 1984. Your data directory needs to have write permission for this user in order to store data and manage databases.

If you want to add your own application, create an image FROM basex/basexhttp:[tag] with [tag] being the BaseX version you're developing against. Usually, you will add your application code to /srv/basex/webapp and modules to /srv/basex/repo.

If you are in the cloned directory of the BaseX git repository, you can include the DBA application in the running container :

```
docker run -d \
    --name basexhttp \
    --publish 1984:1984 \
    --publish 8984:8984 \
    --volume "$HOME/basex/data":/srv/basex/data \
    --volume "$(pwd)/basex-api/src/main/webapp":/srv/basex/webapp \
  basex/basexhttp:latest
```

Docker images for versions 8.x

Up to version 8.x, BaseX used directories BaseXData, BaseXRepo and BaseXWeb, typically in your home directory.

If you are using a Docker image for version 8.x (e.g. 8.5) the mount path in the container is slightly different:

```
    docker run -ti \
        --name basexhttp \
        --publish 1984:1984 \
        --publish 8984:8984 \
        --volume ~/BaseXData:/srv/BaseXData \
        basex/basexhttp:8.5
```

If you prefer the DBA web interface, this can also be linked against your server container:

```
docker run -d \
    --name basex-dba \
    --publish 18984:8984 \
    --link basexhttp:basexhttp \
    basex/dba
```

If you want to add your own application, create an image FROM basex/basexhttp:[tag] with [tag] being the BaseX version you're developing against. Usually, you will add your application code to /srv/BaseXWeb and modules to /srv/BaseXRepo. BaseXData is persisted as a volume, which means it cannot be preinitialized in the application image.
Further information

For further information on using the Docker image, refer to the BaseX Docker documentation.

Best regards Your BaseX Team

# node client

basex - A BaseX client for node.js

===========================

This is a BaseX client for Node.js. It is work in progress. It uses the client interface via a socket connection to the BaseX server.

BaseX is a very light-weight, high-performance and scalable XML Database engine and XPath/XQuery 3.0 Processor, including full support for the W3C Update and Full Text extensions. Built as a lightweight Java server, BaseX also supports XSLT, Webdav and RestXQ.
Installing the BaseX Node client

NPM NPM

To install with npm:

npm install basex

    $ mkdir myproject
    cd myproject
    $ npm install basex
    basex@0.9.0 ./node_modules/basex

Once BaseX is installed and the BaseX server is running, test it.

    $ cd examples/
    $ node Example.js
    milliseconds: 0
    { result: '1 2 3 4 5 6 7 8 9 10',
      info: '\nQuery executed in 0.38 ms.\n' }
    end
    close

Installing BaseX

    Java is required
    Download and install BaseX (tested against version 8.6)
    Run basexserver -S

API specification

See commands.md in the docs folder for details of the API.
Tests

There is a test suite using mocha , should and sinon.

mocha -R spec test/

Execute info command
✓ should not error
✓ should have reply

Send an valid xquery statement: 2+2
✓ It should not error
✓ It should equal 4

Send an invalid command: 2+
✓ It should error

Create a database
✓ It should not error

Add a document
✓ It should not error

drop db database
✓ It should not error

drop db database
✓ It should not error

Send a xquery and iterate over the result items
✓ It should not error
✓ It should return an array

create query and bind
✓ It should not error
✓ It should return a string

13 tests complete (408 ms)

Tools

Javascript is formated using js-beautify js-beautify -r index.js

Documentation is generated using jsdoc -r -d docs --verbose index.js
