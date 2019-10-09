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
    define(['../ApiClient', '../model/SubmissionAction', '../model/SubmissionDataRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubmissionAction'), require('./SubmissionDataRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.FormAPI) {
      root.FormAPI = {};
    }
    root.FormAPI.Submission = factory(root.FormAPI.ApiClient, root.FormAPI.SubmissionAction, root.FormAPI.SubmissionDataRequest);
  }
}(this, function(ApiClient, SubmissionAction, SubmissionDataRequest) {
  'use strict';




  /**
   * The Submission model module.
   * @module model/Submission
   * @version 2.13.0
   */

  /**
   * Constructs a new <code>Submission</code>.
   * @alias module:model/Submission
   * @class
   * @param id {String} 
   * @param test {Boolean} 
   * @param expired {Boolean} 
   * @param state {module:model/Submission.StateEnum} 
   */
  var exports = function(id, test, expired, state) {
    var _this = this;

    _this['id'] = id;

    _this['test'] = test;

    _this['expired'] = expired;


    _this['state'] = state;






  };

  /**
   * Constructs a <code>Submission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Submission} obj Optional instance to populate.
   * @return {module:model/Submission} The populated <code>Submission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('template_id')) {
        obj['template_id'] = ApiClient.convertToType(data['template_id'], 'String');
      }
      if (data.hasOwnProperty('test')) {
        obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
      }
      if (data.hasOwnProperty('editable')) {
        obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
      }
      if (data.hasOwnProperty('expired')) {
        obj['expired'] = ApiClient.convertToType(data['expired'], 'Boolean');
      }
      if (data.hasOwnProperty('expires_at')) {
        obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
      }
      if (data.hasOwnProperty('processed_at')) {
        obj['processed_at'] = ApiClient.convertToType(data['processed_at'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('download_url')) {
        obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
      }
      if (data.hasOwnProperty('permanent_download_url')) {
        obj['permanent_download_url'] = ApiClient.convertToType(data['permanent_download_url'], 'String');
      }
      if (data.hasOwnProperty('batch_id')) {
        obj['batch_id'] = ApiClient.convertToType(data['batch_id'], 'String');
      }
      if (data.hasOwnProperty('data_requests')) {
        obj['data_requests'] = ApiClient.convertToType(data['data_requests'], [SubmissionDataRequest]);
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], [SubmissionAction]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} template_id
   */
  exports.prototype['template_id'] = undefined;
  /**
   * @member {Boolean} test
   */
  exports.prototype['test'] = undefined;
  /**
   * @member {Boolean} editable
   */
  exports.prototype['editable'] = undefined;
  /**
   * @member {Boolean} expired
   */
  exports.prototype['expired'] = undefined;
  /**
   * @member {String} expires_at
   */
  exports.prototype['expires_at'] = undefined;
  /**
   * @member {String} processed_at
   */
  exports.prototype['processed_at'] = undefined;
  /**
   * @member {module:model/Submission.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {String} download_url
   */
  exports.prototype['download_url'] = undefined;
  /**
   * @member {String} permanent_download_url
   */
  exports.prototype['permanent_download_url'] = undefined;
  /**
   * @member {String} batch_id
   */
  exports.prototype['batch_id'] = undefined;
  /**
   * @member {Array.<module:model/SubmissionDataRequest>} data_requests
   */
  exports.prototype['data_requests'] = undefined;
  /**
   * @member {Array.<module:model/SubmissionAction>} actions
   */
  exports.prototype['actions'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "processed"
     * @const
     */
    "processed": "processed",
    /**
     * value: "invalid_data"
     * @const
     */
    "invalid_data": "invalid_data",
    /**
     * value: "error"
     * @const
     */
    "error": "error",
    /**
     * value: "image_download_failed"
     * @const
     */
    "image_download_failed": "image_download_failed",
    /**
     * value: "image_processing_failed"
     * @const
     */
    "image_processing_failed": "image_processing_failed",
    /**
     * value: "waiting_for_data_requests"
     * @const
     */
    "waiting_for_data_requests": "waiting_for_data_requests",
    /**
     * value: "syntax_error"
     * @const
     */
    "syntax_error": "syntax_error",
    /**
     * value: "account_suspended"
     * @const
     */
    "account_suspended": "account_suspended",
    /**
     * value: "license_revoked"
     * @const
     */
    "license_revoked": "license_revoked"  };


  return exports;
}));


