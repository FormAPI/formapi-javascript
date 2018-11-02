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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FormAPI) {
      root.FormAPI = {};
    }
    root.FormAPI.CreateSubmissionDataBatchRequest = factory(root.FormAPI.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateSubmissionDataBatchRequest model module.
   * @module model/CreateSubmissionDataBatchRequest
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>CreateSubmissionDataBatchRequest</code>.
   * @alias module:model/CreateSubmissionDataBatchRequest
   * @class
   * @param templateId {String} 
   * @param data {Object} 
   */
  var exports = function(templateId, data) {
    var _this = this;

    _this['template_id'] = templateId;

    _this['data'] = data;



  };

  /**
   * Constructs a <code>CreateSubmissionDataBatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSubmissionDataBatchRequest} obj Optional instance to populate.
   * @return {module:model/CreateSubmissionDataBatchRequest} The populated <code>CreateSubmissionDataBatchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('template_id')) {
        obj['template_id'] = ApiClient.convertToType(data['template_id'], 'String');
      }
      if (data.hasOwnProperty('test')) {
        obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'String');
      }
      if (data.hasOwnProperty('css')) {
        obj['css'] = ApiClient.convertToType(data['css'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} template_id
   */
  exports.prototype['template_id'] = undefined;
  /**
   * @member {Boolean} test
   */
  exports.prototype['test'] = undefined;
  /**
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {String} html
   */
  exports.prototype['html'] = undefined;
  /**
   * @member {String} css
   */
  exports.prototype['css'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));


