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
    instance = new FormAPI.Templatesv2TemplateDocumentMetadata();
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

  describe('Templatesv2TemplateDocumentMetadata', function() {
    it('should create an instance of Templatesv2TemplateDocumentMetadata', function() {
      // uncomment below and update the code to test Templatesv2TemplateDocumentMetadata
      //var instance = new FormAPI.Templatesv2TemplateDocumentMetadata();
      //expect(instance).to.be.a(FormAPI.Templatesv2TemplateDocumentMetadata);
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instance = new FormAPI.Templatesv2TemplateDocumentMetadata();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new FormAPI.Templatesv2TemplateDocumentMetadata();
      //expect(instance).to.be();
    });

    it('should have the property mimeType (base name: "mime_type")', function() {
      // uncomment below and update the code to test the property mimeType
      //var instance = new FormAPI.Templatesv2TemplateDocumentMetadata();
      //expect(instance).to.be();
    });

  });

}));
