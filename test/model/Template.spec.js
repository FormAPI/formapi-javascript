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
    instance = new FormAPI.Template();
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

  describe('Template', function() {
    it('should create an instance of Template', function() {
      // uncomment below and update the code to test Template
      //var instance = new FormAPI.Template();
      //expect(instance).to.be.a(FormAPI.Template);
    });

    it('should have the property expirationInterval (base name: "expiration_interval")', function() {
      // uncomment below and update the code to test the property expirationInterval
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property webhookUrl (base name: "webhook_url")', function() {
      // uncomment below and update the code to test the property webhookUrl
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property parentFolderId (base name: "parent_folder_id")', function() {
      // uncomment below and update the code to test the property parentFolderId
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property expireAfter (base name: "expire_after")', function() {
      // uncomment below and update the code to test the property expireAfter
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property allowAdditionalProperties (base name: "allow_additional_properties")', function() {
      // uncomment below and update the code to test the property allowAdditionalProperties
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property publicSubmissions (base name: "public_submissions")', function() {
      // uncomment below and update the code to test the property publicSubmissions
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property slackWebhookUrl (base name: "slack_webhook_url")', function() {
      // uncomment below and update the code to test the property slackWebhookUrl
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property publicWebForm (base name: "public_web_form")', function() {
      // uncomment below and update the code to test the property publicWebForm
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property editableSubmissions (base name: "editable_submissions")', function() {
      // uncomment below and update the code to test the property editableSubmissions
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property expireSubmissions (base name: "expire_submissions")', function() {
      // uncomment below and update the code to test the property expireSubmissions
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property permanentDocumentUrl (base name: "permanent_document_url")', function() {
      // uncomment below and update the code to test the property permanentDocumentUrl
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property templateType (base name: "template_type")', function() {
      // uncomment below and update the code to test the property templateType
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property pageDimensions (base name: "page_dimensions")', function() {
      // uncomment below and update the code to test the property pageDimensions
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property redirectUrl (base name: "redirect_url")', function() {
      // uncomment below and update the code to test the property redirectUrl
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

    it('should have the property documentUrl (base name: "document_url")', function() {
      // uncomment below and update the code to test the property documentUrl
      //var instance = new FormAPI.Template();
      //expect(instance).to.be();
    });

  });

}));
