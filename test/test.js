var should = require('should');
var assert = require('assert');
var request = require('supertest');

var app = require("../server.js");

//var server = app.listen(0);
//var port = server.address().port;

describe('Test cubieboard-monitor', function() {
    var server;
    var port;
    var url;

    // within before() you can run all the operations that are needed to setup your tests. In this case
    before(function(done) {
        server = app.listen(0, done);
        port = server.address.port();
        url = 'http://localhost:'+port;
        //done();
    });
    after(function(done){
        //server.stop();
        done();
    });
    // use describe to give a title to your test suite, in this case the tile is "Monitor"
    // and then specify a function in which we are going to declare all the tests
    // we want to run. Each test starts with the function it() and as a first argument
    // we have to provide a meaningful title for it, whereas as the second argument we
    // specify a function that takes a single parameter, "done", that we will use
    // to specify when our test is completed, and that's what makes easy
    // to perform async test!
    describe('Monitor', function() {
        it('debería de devolver el hostname', function(done) {

            // once we have specified the info we want to send to the server via POST verb,
            // we need to actually perform the action on the resource, in this case we want to
            // POST on /api/profiles and we want to send some info
            // We do this using the request object, requiring supertest!
            request(url)
                .post('/SYS_hostname')
                // end handles the response
                .end(function(err, res) {
                    if (err) {
                        throw err;
                    }
                    // this is should.js syntax, very clear
                    //res.should.have.status(400);
                    res.body.should.not.equal(null);
                    done();
                });
        });
    });
    describe('Visión General', function() {
        describe('CPU', function(done) {

            it('debería de devolver la temperatura de la CPU', function(done) {
                // once we have specified the info we want to send to the server via POST verb,
                // we need to actually perform the action on the resource, in this case we want to
                // POST on /api/profiles and we want to send some info
                // We do this using the request object, requiring supertest!
                request(url)
                    .post('/CPU_Temp')
                    // end handles the response
                    .end(function(err, res) {
                        if (err) {
                            throw err;
                        }
                        // this is should.js syntax, very clear
                        //res.should.have.status(400);
                        res.body.should.not.equal(null);
                        done();
                    });

            });
            it('debería de devolver el uso de la CPU', function(done) {
                // once we have specified the info we want to send to the server via POST verb,
                // we need to actually perform the action on the resource, in this case we want to
                // POST on /api/profiles and we want to send some info
                // We do this using the request object, requiring supertest!
                request(url)
                    .post('/CPU_Uso')
                    // end handles the response
                    .end(function(err, res) {
                        if (err) {
                            throw err;
                        }
                        // this is should.js syntax, very clear
                        //res.should.have.status(400);
                        res.body.should.not.equal(null);
                        done();
                    });

            });
        });

        describe('HDD', function(done) {

            it('debería de devolver la temperatura del disco', function(done) {
                // once we have specified the info we want to send to the server via POST verb,
                // we need to actually perform the action on the resource, in this case we want to
                // POST on /api/profiles and we want to send some info
                // We do this using the request object, requiring supertest!
                request(url)
                    .post('/HDD_Temp')
                    // end handles the response
                    .end(function(err, res) {
                        if (err) {
                            throw err;
                        }
                        // this is should.js syntax, very clear
                        //res.should.have.status(400);
                        res.body.should.not.equal(null);
                        done();
                    });

            });
            it('debería de devolver el uso del disco', function(done) {
                // once we have specified the info we want to send to the server via POST verb,
                // we need to actually perform the action on the resource, in this case we want to
                // POST on /api/profiles and we want to send some info
                // We do this using the request object, requiring supertest!
                request(url)
                    .post('/HDD_Uso')
                    // end handles the response
                    .end(function(err, res) {
                        if (err) {
                            throw err;
                        }
                        // this is should.js syntax, very clear
                        //res.should.have.status(400);
                        res.body.should.not.equal(null);
                        done();
                    });

            });
        });

    });
});
