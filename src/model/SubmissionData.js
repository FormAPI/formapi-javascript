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
    define(['../ApiClient', '../model/CreateSubmissionDataRequestData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateSubmissionDataRequestData'));
  } else {
    // Browser globals (root is window)
    if (!root.FormAPI) {
      root.FormAPI = {};
    }
    root.FormAPI.SubmissionData = factory(root.FormAPI.ApiClient, root.FormAPI.CreateSubmissionDataRequestData);
  }
}(this, function(ApiClient, CreateSubmissionDataRequestData) {
  'use strict';




  /**
   * The SubmissionData model module.
   * @module model/SubmissionData
   * @version 2.14.0
   */

  /**
   * Constructs a new <code>SubmissionData</code>.
   * @alias module:model/SubmissionData
   * @class
   * @param data {Object} 
   */
  var exports = function(data) {
    var _this = this;


    _this['data'] = data;




  };

  /**
   * Constructs a <code>SubmissionData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubmissionData} obj Optional instance to populate.
   * @return {module:model/SubmissionData} The populated <code>SubmissionData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
      if (data.hasOwnProperty('data_requests')) {
        obj['data_requests'] = ApiClient.convertToType(data['data_requests'], [CreateSubmissionDataRequestData]);
      }
    }
    return obj;
  }

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
  /**
   * @member {Array.<module:model/CreateSubmissionDataRequestData>} data_requests
   */
  exports.prototype['data_requests'] = undefined;



  return exports;
}));


