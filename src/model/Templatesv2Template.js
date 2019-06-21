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
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Templatesv2TemplateDocument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Templatesv2TemplateDocument'));
  } else {
    // Browser globals (root is window)
    if (!root.FormAPI) {
      root.FormAPI = {};
    }
    root.FormAPI.Templatesv2Template = factory(root.FormAPI.ApiClient, root.FormAPI.Templatesv2TemplateDocument);
  }
}(this, function(ApiClient, Templatesv2TemplateDocument) {
  'use strict';




  /**
   * The Templatesv2Template model module.
   * @module model/Templatesv2Template
   * @version 2.10.0
   */

  /**
   * Constructs a new <code>Templatesv2Template</code>.
   * @alias module:model/Templatesv2Template
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Templatesv2Template</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Templatesv2Template} obj Optional instance to populate.
   * @return {module:model/Templatesv2Template} The populated <code>Templatesv2Template</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expiration_interval')) {
        obj['expiration_interval'] = ApiClient.convertToType(data['expiration_interval'], 'String');
      }
      if (data.hasOwnProperty('public_web_form')) {
        obj['public_web_form'] = ApiClient.convertToType(data['public_web_form'], 'Boolean');
      }
      if (data.hasOwnProperty('webhook_url')) {
        obj['webhook_url'] = ApiClient.convertToType(data['webhook_url'], 'String');
      }
      if (data.hasOwnProperty('editable_submissions')) {
        obj['editable_submissions'] = ApiClient.convertToType(data['editable_submissions'], 'Boolean');
      }
      if (data.hasOwnProperty('expire_submissions')) {
        obj['expire_submissions'] = ApiClient.convertToType(data['expire_submissions'], 'Boolean');
      }
      if (data.hasOwnProperty('expire_after')) {
        obj['expire_after'] = ApiClient.convertToType(data['expire_after'], 'Number');
      }
      if (data.hasOwnProperty('allow_additional_properties')) {
        obj['allow_additional_properties'] = ApiClient.convertToType(data['allow_additional_properties'], 'Boolean');
      }
      if (data.hasOwnProperty('document')) {
        obj['document'] = Templatesv2TemplateDocument.constructFromObject(data['document']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('public_submissions')) {
        obj['public_submissions'] = ApiClient.convertToType(data['public_submissions'], 'Boolean');
      }
      if (data.hasOwnProperty('slack_webhook_url')) {
        obj['slack_webhook_url'] = ApiClient.convertToType(data['slack_webhook_url'], 'String');
      }
      if (data.hasOwnProperty('redirect_url')) {
        obj['redirect_url'] = ApiClient.convertToType(data['redirect_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Templatesv2Template.ExpirationIntervalEnum} expiration_interval
   */
  exports.prototype['expiration_interval'] = undefined;
  /**
   * @member {Boolean} public_web_form
   */
  exports.prototype['public_web_form'] = undefined;
  /**
   * @member {String} webhook_url
   */
  exports.prototype['webhook_url'] = undefined;
  /**
   * @member {Boolean} editable_submissions
   */
  exports.prototype['editable_submissions'] = undefined;
  /**
   * @member {Boolean} expire_submissions
   */
  exports.prototype['expire_submissions'] = undefined;
  /**
   * @member {Number} expire_after
   */
  exports.prototype['expire_after'] = undefined;
  /**
   * @member {Boolean} allow_additional_properties
   */
  exports.prototype['allow_additional_properties'] = undefined;
  /**
   * @member {module:model/Templatesv2TemplateDocument} document
   */
  exports.prototype['document'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} public_submissions
   */
  exports.prototype['public_submissions'] = undefined;
  /**
   * @member {String} slack_webhook_url
   */
  exports.prototype['slack_webhook_url'] = undefined;
  /**
   * @member {String} redirect_url
   */
  exports.prototype['redirect_url'] = undefined;


  /**
   * Allowed values for the <code>expiration_interval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExpirationIntervalEnum = {
    /**
     * value: "minutes"
     * @const
     */
    "minutes": "minutes",
    /**
     * value: "hours"
     * @const
     */
    "hours": "hours",
    /**
     * value: "days"
     * @const
     */
    "days": "days"  };


  return exports;
}));


