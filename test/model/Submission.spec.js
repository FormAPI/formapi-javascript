/**
 * API v1
 * FormAPI is a service that helps you fill out and sign PDF templates.
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

(function(root, factory) {
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
}(this, function(expect, FormAPI) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FormAPI.Submission();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Submission', function() {
    it('should create an instance of Submission', function() {
      // uncomment below and update the code to test Submission
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be.a(FormAPI.Submission);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "template_id")', function() {
      // uncomment below and update the code to test the property templateId
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property test (base name: "test")', function() {
      // uncomment below and update the code to test the property test
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property editable (base name: "editable")', function() {
      // uncomment below and update the code to test the property editable
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property expired (base name: "expired")', function() {
      // uncomment below and update the code to test the property expired
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expires_at")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property processedAt (base name: "processed_at")', function() {
      // uncomment below and update the code to test the property processedAt
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property downloadUrl (base name: "download_url")', function() {
      // uncomment below and update the code to test the property downloadUrl
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property permanentDownloadUrl (base name: "permanent_download_url")', function() {
      // uncomment below and update the code to test the property permanentDownloadUrl
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property batchId (base name: "batch_id")', function() {
      // uncomment below and update the code to test the property batchId
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property dataRequests (base name: "data_requests")', function() {
      // uncomment below and update the code to test the property dataRequests
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

    it('should have the property actions (base name: "actions")', function() {
      // uncomment below and update the code to test the property actions
      //var instance = new FormAPI.Submission();
      //expect(instance).to.be();
    });

  });

}));
