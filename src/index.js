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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'api/Client', 'model/AuthenticationError', 'model/AuthenticationSuccessResponse', 'model/CombinedSubmission', 'model/CombinedSubmissionData', 'model/CreateCombinedSubmissionResponse', 'model/CreateSubmissionBatchResponse', 'model/CreateSubmissionBatchSubmissionsResponse', 'model/CreateSubmissionData', 'model/CreateSubmissionDataBatchRequest', 'model/CreateSubmissionDataBatchV1', 'model/CreateSubmissionDataRequestData', 'model/CreateSubmissionDataRequestTokenResponse', 'model/CreateSubmissionDataRequestTokenResponseToken', 'model/CreateSubmissionResponse', 'model/Error', 'model/InvalidRequest', 'model/Submission', 'model/SubmissionBatch', 'model/SubmissionBatchData', 'model/SubmissionDataRequest', 'model/Template', 'model/UpdateDataRequestResponse', 'model/UpdateSubmissionDataRequestData', 'api/PDFApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/Client'), require('./model/AuthenticationError'), require('./model/AuthenticationSuccessResponse'), require('./model/CombinedSubmission'), require('./model/CombinedSubmissionData'), require('./model/CreateCombinedSubmissionResponse'), require('./model/CreateSubmissionBatchResponse'), require('./model/CreateSubmissionBatchSubmissionsResponse'), require('./model/CreateSubmissionData'), require('./model/CreateSubmissionDataBatchRequest'), require('./model/CreateSubmissionDataBatchV1'), require('./model/CreateSubmissionDataRequestData'), require('./model/CreateSubmissionDataRequestTokenResponse'), require('./model/CreateSubmissionDataRequestTokenResponseToken'), require('./model/CreateSubmissionResponse'), require('./model/Error'), require('./model/InvalidRequest'), require('./model/Submission'), require('./model/SubmissionBatch'), require('./model/SubmissionBatchData'), require('./model/SubmissionDataRequest'), require('./model/Template'), require('./model/UpdateDataRequestResponse'), require('./model/UpdateSubmissionDataRequestData'), require('./api/PDFApi'));
  }
}(function(ApiClient, Client, AuthenticationError, AuthenticationSuccessResponse, CombinedSubmission, CombinedSubmissionData, CreateCombinedSubmissionResponse, CreateSubmissionBatchResponse, CreateSubmissionBatchSubmissionsResponse, CreateSubmissionData, CreateSubmissionDataBatchRequest, CreateSubmissionDataBatchV1, CreateSubmissionDataRequestData, CreateSubmissionDataRequestTokenResponse, CreateSubmissionDataRequestTokenResponseToken, CreateSubmissionResponse, Error, InvalidRequest, Submission, SubmissionBatch, SubmissionBatchData, SubmissionDataRequest, Template, UpdateDataRequestResponse, UpdateSubmissionDataRequestData, PDFApi) {
  'use strict';

  /**
   * An API client for the FormAPI PDF generation service.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var FormAPI = require('index'); // See note below*.
   * var xxxSvc = new FormAPI.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new FormAPI.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new FormAPI.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new FormAPI.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.2.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    // Alias that makes more sense
    Configuration: ApiClient,
    /**
     * The custom Client constructor.
     * @property {module:api/Client}
     */
    Client: Client,
    /**
     * The AuthenticationError model constructor.
     * @property {module:model/AuthenticationError}
     */
    AuthenticationError: AuthenticationError,
    /**
     * The AuthenticationSuccessResponse model constructor.
     * @property {module:model/AuthenticationSuccessResponse}
     */
    AuthenticationSuccessResponse: AuthenticationSuccessResponse,
    /**
     * The CombinedSubmission model constructor.
     * @property {module:model/CombinedSubmission}
     */
    CombinedSubmission: CombinedSubmission,
    /**
     * The CombinedSubmissionData model constructor.
     * @property {module:model/CombinedSubmissionData}
     */
    CombinedSubmissionData: CombinedSubmissionData,
    /**
     * The CreateCombinedSubmissionResponse model constructor.
     * @property {module:model/CreateCombinedSubmissionResponse}
     */
    CreateCombinedSubmissionResponse: CreateCombinedSubmissionResponse,
    /**
     * The CreateSubmissionBatchResponse model constructor.
     * @property {module:model/CreateSubmissionBatchResponse}
     */
    CreateSubmissionBatchResponse: CreateSubmissionBatchResponse,
    /**
     * The CreateSubmissionBatchSubmissionsResponse model constructor.
     * @property {module:model/CreateSubmissionBatchSubmissionsResponse}
     */
    CreateSubmissionBatchSubmissionsResponse: CreateSubmissionBatchSubmissionsResponse,
    /**
     * The CreateSubmissionData model constructor.
     * @property {module:model/CreateSubmissionData}
     */
    CreateSubmissionData: CreateSubmissionData,
    /**
     * The CreateSubmissionDataBatchRequest model constructor.
     * @property {module:model/CreateSubmissionDataBatchRequest}
     */
    CreateSubmissionDataBatchRequest: CreateSubmissionDataBatchRequest,
    /**
     * The CreateSubmissionDataBatchV1 model constructor.
     * @property {module:model/CreateSubmissionDataBatchV1}
     */
    CreateSubmissionDataBatchV1: CreateSubmissionDataBatchV1,
    /**
     * The CreateSubmissionDataRequestData model constructor.
     * @property {module:model/CreateSubmissionDataRequestData}
     */
    CreateSubmissionDataRequestData: CreateSubmissionDataRequestData,
    /**
     * The CreateSubmissionDataRequestTokenResponse model constructor.
     * @property {module:model/CreateSubmissionDataRequestTokenResponse}
     */
    CreateSubmissionDataRequestTokenResponse: CreateSubmissionDataRequestTokenResponse,
    /**
     * The CreateSubmissionDataRequestTokenResponseToken model constructor.
     * @property {module:model/CreateSubmissionDataRequestTokenResponseToken}
     */
    CreateSubmissionDataRequestTokenResponseToken: CreateSubmissionDataRequestTokenResponseToken,
    /**
     * The CreateSubmissionResponse model constructor.
     * @property {module:model/CreateSubmissionResponse}
     */
    CreateSubmissionResponse: CreateSubmissionResponse,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The InvalidRequest model constructor.
     * @property {module:model/InvalidRequest}
     */
    InvalidRequest: InvalidRequest,
    /**
     * The Submission model constructor.
     * @property {module:model/Submission}
     */
    Submission: Submission,
    /**
     * The SubmissionBatch model constructor.
     * @property {module:model/SubmissionBatch}
     */
    SubmissionBatch: SubmissionBatch,
    /**
     * The SubmissionBatchData model constructor.
     * @property {module:model/SubmissionBatchData}
     */
    SubmissionBatchData: SubmissionBatchData,
    /**
     * The SubmissionDataRequest model constructor.
     * @property {module:model/SubmissionDataRequest}
     */
    SubmissionDataRequest: SubmissionDataRequest,
    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template: Template,
    /**
     * The UpdateDataRequestResponse model constructor.
     * @property {module:model/UpdateDataRequestResponse}
     */
    UpdateDataRequestResponse: UpdateDataRequestResponse,
    /**
     * The UpdateSubmissionDataRequestData model constructor.
     * @property {module:model/UpdateSubmissionDataRequestData}
     */
    UpdateSubmissionDataRequestData: UpdateSubmissionDataRequestData,
    /**
     * The PDFApi service constructor.
     * @property {module:api/PDFApi}
     */
    PDFApi: PDFApi
  };

  return exports;
}));