/**
 * API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FormAPI);
  }
}(this, function (expect, FormAPI) {
  'use strict';

  var instance;

  beforeEach(function () {
    var config = new FormAPI.Configuration();
    config.apiTokenId = 'api_token123';
    config.apiTokenSecret = 'testsecret123';
    config.basePath = 'http://api.formapi.local:31337/api/v1'
    instance = new FormAPI.Client(config);
  });

  describe('Client', function () {
    describe('testAuthentication', function () {
      it('should call testAuthentication method on PDFApi prototype', function (done) {
        instance.testAuthentication(function (error, response) {
          if (error) throw error;
          expect(response.status).to.be('success');
          done();
        });
      });
    });

    describe('combineSubmissions', function () {
      it('should call combineSubmissions successfully and wait for PDF', function (done) {
        this.timeout(10000);
        var opts = {
          submission_ids: ['sub_000000000000000001', 'sub_000000000000000002']
        };
        instance.combineSubmissions(opts, function (error, response) {
          if (error) throw error;
          expect(response.status).to.be('success');
          expect(response.combined_submission.id).to.match(/^com_/);
          expect(response.combined_submission.state).to.be('processed');
          done();
        });
      });
    });

    describe('generatePDF', function () {
      it('should call generatePDF and wait for PDF', function (done) {
        this.timeout(10000);
        var template_id = 'tpl_000000000000000001';
        var options = {
          data: {
            title: 'Test PDF',
            description: 'This PDF is great!',
          }
        };
        instance.generatePDF(template_id, options, function (error, response) {
          if (error) throw error;
          expect(response.status).to.be('success');
          var submission = response.submission;
          expect(submission.id).to.match(/^sub_/);
          expect(submission.expired).to.be(false);
          expect(submission.state).to.be('processed');
          done();
        });
      });
    });

    describe('generatePDF', function () {
      it('should call generatePDF and not wait for the PDF', function (done) {
        this.timeout(10000);
        var template_id = 'tpl_000000000000000001';
        var options = {
          data: {
            title: 'Test PDF',
            description: 'This PDF is great!',
          },
          wait: false
        };
        instance.generatePDF(template_id, options, function (error, response) {
          if (error) throw error;
          expect(response.status).to.be('success');
          expect(response.submission.state).to.be('pending');
          done();
        });
      });
    });
  });
}));
