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
    define(['../ApiClient', '../model/FoldersFolder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FoldersFolder'));
  } else {
    // Browser globals (root is window)
    if (!root.FormAPI) {
      root.FormAPI = {};
    }
    root.FormAPI.CreateFolderData = factory(root.FormAPI.ApiClient, root.FormAPI.FoldersFolder);
  }
}(this, function(ApiClient, FoldersFolder) {
  'use strict';




  /**
   * The CreateFolderData model module.
   * @module model/CreateFolderData
   * @version 2.14.0
   */

  /**
   * Constructs a new <code>CreateFolderData</code>.
   * @alias module:model/CreateFolderData
   * @class
   * @param folder {module:model/FoldersFolder} 
   */
  var exports = function(folder) {
    var _this = this;

    _this['folder'] = folder;
  };

  /**
   * Constructs a <code>CreateFolderData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFolderData} obj Optional instance to populate.
   * @return {module:model/CreateFolderData} The populated <code>CreateFolderData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('folder')) {
        obj['folder'] = FoldersFolder.constructFromObject(data['folder']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FoldersFolder} folder
   */
  exports.prototype['folder'] = undefined;



  return exports;
}));


