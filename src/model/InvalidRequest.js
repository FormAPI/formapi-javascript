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
    root.FormAPI.InvalidRequest = factory(root.FormAPI.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InvalidRequest model module.
   * @module model/InvalidRequest
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>InvalidRequest</code>.
   * @alias module:model/InvalidRequest
   * @class
   * @param status {module:model/InvalidRequest.StatusEnum} 
   * @param errors {Array.<String>} 
   */
  var exports = function(status, errors) {
    var _this = this;

    _this['status'] = status;
    _this['errors'] = errors;
  };

  /**
   * Constructs a <code>InvalidRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvalidRequest} obj Optional instance to populate.
   * @return {module:model/InvalidRequest} The populated <code>InvalidRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InvalidRequest.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<String>} errors
   */
  exports.prototype['errors'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));


