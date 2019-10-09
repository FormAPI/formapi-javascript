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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FormAPI) {
      root.FormAPI = {};
    }
    root.FormAPI.UpdateSubmissionDataRequestData = factory(root.FormAPI.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateSubmissionDataRequestData model module.
   * @module model/UpdateSubmissionDataRequestData
   * @version 2.13.0
   */

  /**
   * Constructs a new <code>UpdateSubmissionDataRequestData</code>.
   * @alias module:model/UpdateSubmissionDataRequestData
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>UpdateSubmissionDataRequestData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSubmissionDataRequestData} obj Optional instance to populate.
   * @return {module:model/UpdateSubmissionDataRequestData} The populated <code>UpdateSubmissionDataRequestData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Number');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('auth_type')) {
        obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
      }
      if (data.hasOwnProperty('auth_second_factor_type')) {
        obj['auth_second_factor_type'] = ApiClient.convertToType(data['auth_second_factor_type'], 'String');
      }
      if (data.hasOwnProperty('auth_provider')) {
        obj['auth_provider'] = ApiClient.convertToType(data['auth_provider'], 'String');
      }
      if (data.hasOwnProperty('auth_session_started_at')) {
        obj['auth_session_started_at'] = ApiClient.convertToType(data['auth_session_started_at'], 'String');
      }
      if (data.hasOwnProperty('auth_session_id_hash')) {
        obj['auth_session_id_hash'] = ApiClient.convertToType(data['auth_session_id_hash'], 'String');
      }
      if (data.hasOwnProperty('auth_user_id_hash')) {
        obj['auth_user_id_hash'] = ApiClient.convertToType(data['auth_user_id_hash'], 'String');
      }
      if (data.hasOwnProperty('auth_username_hash')) {
        obj['auth_username_hash'] = ApiClient.convertToType(data['auth_username_hash'], 'String');
      }
      if (data.hasOwnProperty('auth_phone_number_hash')) {
        obj['auth_phone_number_hash'] = ApiClient.convertToType(data['auth_phone_number_hash'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Number} order
   */
  exports.prototype['order'] = undefined;
  /**
   * @member {Array.<String>} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {module:model/UpdateSubmissionDataRequestData.AuthTypeEnum} auth_type
   */
  exports.prototype['auth_type'] = undefined;
  /**
   * @member {module:model/UpdateSubmissionDataRequestData.AuthSecondFactorTypeEnum} auth_second_factor_type
   */
  exports.prototype['auth_second_factor_type'] = undefined;
  /**
   * @member {String} auth_provider
   */
  exports.prototype['auth_provider'] = undefined;
  /**
   * @member {String} auth_session_started_at
   */
  exports.prototype['auth_session_started_at'] = undefined;
  /**
   * @member {String} auth_session_id_hash
   */
  exports.prototype['auth_session_id_hash'] = undefined;
  /**
   * @member {String} auth_user_id_hash
   */
  exports.prototype['auth_user_id_hash'] = undefined;
  /**
   * @member {String} auth_username_hash
   */
  exports.prototype['auth_username_hash'] = undefined;
  /**
   * @member {String} auth_phone_number_hash
   */
  exports.prototype['auth_phone_number_hash'] = undefined;


  /**
   * Allowed values for the <code>auth_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthTypeEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "password"
     * @const
     */
    "password": "password",
    /**
     * value: "oauth"
     * @const
     */
    "oauth": "oauth",
    /**
     * value: "email_link"
     * @const
     */
    "email_link": "email_link",
    /**
     * value: "phone_number"
     * @const
     */
    "phone_number": "phone_number",
    /**
     * value: "ldap"
     * @const
     */
    "ldap": "ldap",
    /**
     * value: "saml"
     * @const
     */
    "saml": "saml"  };

  /**
   * Allowed values for the <code>auth_second_factor_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthSecondFactorTypeEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "phone_number"
     * @const
     */
    "phone_number": "phone_number",
    /**
     * value: "totp"
     * @const
     */
    "totp": "totp",
    /**
     * value: "mobile_push"
     * @const
     */
    "mobile_push": "mobile_push",
    /**
     * value: "security_key"
     * @const
     */
    "security_key": "security_key",
    /**
     * value: "fingerprint"
     * @const
     */
    "fingerprint": "fingerprint"  };


  return exports;
}));


