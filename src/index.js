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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './api/Client', './model/AuthenticationError', './model/AuthenticationSuccessResponse', './model/CombinePdfsData', './model/CombinedSubmission', './model/CombinedSubmissionAction', './model/CombinedSubmissionData', './model/CreateCombinedSubmissionResponse', './model/CreateCustomFileData', './model/CreateCustomFileResponse', './model/CreateFolderData', './model/CreateSubmissionBatchResponse', './model/CreateSubmissionBatchSubmissionsResponse', './model/CreateSubmissionDataRequestData', './model/CreateSubmissionDataRequestTokenResponse', './model/CreateSubmissionDataRequestTokenResponseToken', './model/CreateSubmissionResponse', './model/CreateTemplateData', './model/CustomFile', './model/Error', './model/Folder', './model/FoldersFolder', './model/InvalidRequest', './model/MoveFolderData', './model/MoveTemplateData', './model/PendingTemplate', './model/RenameFolderData', './model/Submission', './model/SubmissionAction', './model/SubmissionBatch', './model/SubmissionBatchData', './model/SubmissionData', './model/SubmissionDataBatchRequest', './model/SubmissionDataRequest', './model/Template', './model/Templatesv2Template', './model/Templatesv2TemplateDocument', './model/Templatesv2TemplateDocumentMetadata', './model/UpdateDataRequestResponse', './model/UpdateSubmissionDataRequestData', './api/PDFApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/Client'), require('./model/AuthenticationError'), require('./model/AuthenticationSuccessResponse'), require('./model/CombinePdfsData'), require('./model/CombinedSubmission'), require('./model/CombinedSubmissionAction'), require('./model/CombinedSubmissionData'), require('./model/CreateCombinedSubmissionResponse'), require('./model/CreateCustomFileData'), require('./model/CreateCustomFileResponse'), require('./model/CreateFolderData'), require('./model/CreateSubmissionBatchResponse'), require('./model/CreateSubmissionBatchSubmissionsResponse'), require('./model/CreateSubmissionDataRequestData'), require('./model/CreateSubmissionDataRequestTokenResponse'), require('./model/CreateSubmissionDataRequestTokenResponseToken'), require('./model/CreateSubmissionResponse'), require('./model/CreateTemplateData'), require('./model/CustomFile'), require('./model/Error'), require('./model/Folder'), require('./model/FoldersFolder'), require('./model/InvalidRequest'), require('./model/MoveFolderData'), require('./model/MoveTemplateData'), require('./model/PendingTemplate'), require('./model/RenameFolderData'), require('./model/Submission'), require('./model/SubmissionAction'), require('./model/SubmissionBatch'), require('./model/SubmissionBatchData'), require('./model/SubmissionData'), require('./model/SubmissionDataBatchRequest'), require('./model/SubmissionDataRequest'), require('./model/Template'), require('./model/Templatesv2Template'), require('./model/Templatesv2TemplateDocument'), require('./model/Templatesv2TemplateDocumentMetadata'), require('./model/UpdateDataRequestResponse'), require('./model/UpdateSubmissionDataRequestData'), require('./api/PDFApi'));
  }
}(function(ApiClient, Client, AuthenticationError, AuthenticationSuccessResponse, CombinePdfsData, CombinedSubmission, CombinedSubmissionAction, CombinedSubmissionData, CreateCombinedSubmissionResponse, CreateCustomFileData, CreateCustomFileResponse, CreateFolderData, CreateSubmissionBatchResponse, CreateSubmissionBatchSubmissionsResponse, CreateSubmissionDataRequestData, CreateSubmissionDataRequestTokenResponse, CreateSubmissionDataRequestTokenResponseToken, CreateSubmissionResponse, CreateTemplateData, CustomFile, Error, Folder, FoldersFolder, InvalidRequest, MoveFolderData, MoveTemplateData, PendingTemplate, RenameFolderData, Submission, SubmissionAction, SubmissionBatch, SubmissionBatchData, SubmissionData, SubmissionDataBatchRequest, SubmissionDataRequest, Template, Templatesv2Template, Templatesv2TemplateDocument, Templatesv2TemplateDocumentMetadata, UpdateDataRequestResponse, UpdateSubmissionDataRequestData, PDFApi) {
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
   * @version 2.14.0
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
     * The CombinePdfsData model constructor.
     * @property {module:model/CombinePdfsData}
     */
    CombinePdfsData: CombinePdfsData,
    /**
     * The CombinedSubmission model constructor.
     * @property {module:model/CombinedSubmission}
     */
    CombinedSubmission: CombinedSubmission,
    /**
     * The CombinedSubmissionAction model constructor.
     * @property {module:model/CombinedSubmissionAction}
     */
    CombinedSubmissionAction: CombinedSubmissionAction,
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
     * The CreateCustomFileData model constructor.
     * @property {module:model/CreateCustomFileData}
     */
    CreateCustomFileData: CreateCustomFileData,
    /**
     * The CreateCustomFileResponse model constructor.
     * @property {module:model/CreateCustomFileResponse}
     */
    CreateCustomFileResponse: CreateCustomFileResponse,
    /**
     * The CreateFolderData model constructor.
     * @property {module:model/CreateFolderData}
     */
    CreateFolderData: CreateFolderData,
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
     * The CreateTemplateData model constructor.
     * @property {module:model/CreateTemplateData}
     */
    CreateTemplateData: CreateTemplateData,
    /**
     * The CustomFile model constructor.
     * @property {module:model/CustomFile}
     */
    CustomFile: CustomFile,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Folder model constructor.
     * @property {module:model/Folder}
     */
    Folder: Folder,
    /**
     * The FoldersFolder model constructor.
     * @property {module:model/FoldersFolder}
     */
    FoldersFolder: FoldersFolder,
    /**
     * The InvalidRequest model constructor.
     * @property {module:model/InvalidRequest}
     */
    InvalidRequest: InvalidRequest,
    /**
     * The MoveFolderData model constructor.
     * @property {module:model/MoveFolderData}
     */
    MoveFolderData: MoveFolderData,
    /**
     * The MoveTemplateData model constructor.
     * @property {module:model/MoveTemplateData}
     */
    MoveTemplateData: MoveTemplateData,
    /**
     * The PendingTemplate model constructor.
     * @property {module:model/PendingTemplate}
     */
    PendingTemplate: PendingTemplate,
    /**
     * The RenameFolderData model constructor.
     * @property {module:model/RenameFolderData}
     */
    RenameFolderData: RenameFolderData,
    /**
     * The Submission model constructor.
     * @property {module:model/Submission}
     */
    Submission: Submission,
    /**
     * The SubmissionAction model constructor.
     * @property {module:model/SubmissionAction}
     */
    SubmissionAction: SubmissionAction,
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
     * The SubmissionData model constructor.
     * @property {module:model/SubmissionData}
     */
    SubmissionData: SubmissionData,
    /**
     * The SubmissionDataBatchRequest model constructor.
     * @property {module:model/SubmissionDataBatchRequest}
     */
    SubmissionDataBatchRequest: SubmissionDataBatchRequest,
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
     * The Templatesv2Template model constructor.
     * @property {module:model/Templatesv2Template}
     */
    Templatesv2Template: Templatesv2Template,
    /**
     * The Templatesv2TemplateDocument model constructor.
     * @property {module:model/Templatesv2TemplateDocument}
     */
    Templatesv2TemplateDocument: Templatesv2TemplateDocument,
    /**
     * The Templatesv2TemplateDocumentMetadata model constructor.
     * @property {module:model/Templatesv2TemplateDocumentMetadata}
     */
    Templatesv2TemplateDocumentMetadata: Templatesv2TemplateDocumentMetadata,
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
