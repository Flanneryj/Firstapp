to launch mongo DB, execute:
    $ ~/workspace/data/mongod &
**or**
    $ ~/workspace/data/mongod-bind &
to terminate:
  - mongo
  - use admin
  - db.serverShutdown()  <- can tab-complete command
**or** if that does not work, then force-kill via:
  - first, identify process # via `ps aux` ... process number is the second column (user, process, etc...)
  - then, kill that process number via `kill 12345`
confirm terminated via doing `ps aux` a second time

to launch web app:
    $ node ~/workspace/YelpCamp/app.js &
to terminate, follow same 'find the process # & kill it' instructions in terminating mongo DB

