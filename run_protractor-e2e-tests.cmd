REM RUNNING PROTRACTOR END-TO-END TESTS

cd c:\temp\addressbookjs
REM protractor e2e-tests\protractor.conf.js

REM IF LOTS AND LOTS OF WARNINGS AND ERRORS SCROLL OFF THE SCREEN, LOOK AT THIS OUTPUT:
protractor e2e-tests\protractor.conf.js > e2e-tests\protractor.output.txt
