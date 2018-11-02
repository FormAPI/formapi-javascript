# formapi

FormAPI - JavaScript client for formapi
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: 2.2.0
- Build package: io.formapi.codegen.FormApiJavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install formapi --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your formapi from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('formapi')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var FormAPI = require('formapi');

var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME'
api_token_basic.password = 'YOUR PASSWORD'

var api = new FormAPI.PDFApi()
var templateId = tpl_000000000000000001; // {String} 
var createSubmissionDataBatchV1 = [new FormAPI.CreateSubmissionDataBatchV1()]; // {[CreateSubmissionDataBatchV1]} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.batchGeneratePdfV1(templateId, createSubmissionDataBatchV1, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://app.formapi.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FormAPI.PDFApi* | [**batchGeneratePdfV1**](docs/PDFApi.md#batchGeneratePdfV1) | **POST** /templates/{template_id}/submissions/batch | Generates multiple PDFs
*FormAPI.PDFApi* | [**batchGeneratePdfs**](docs/PDFApi.md#batchGeneratePdfs) | **POST** /submissions/batches | Generates multiple PDFs
*FormAPI.PDFApi* | [**combineSubmissions**](docs/PDFApi.md#combineSubmissions) | **POST** /combined_submissions | Merge generated PDFs together
*FormAPI.PDFApi* | [**createDataRequestToken**](docs/PDFApi.md#createDataRequestToken) | **POST** /data_requests/{data_request_id}/tokens | Creates a new data request token for form authentication
*FormAPI.PDFApi* | [**expireCombinedSubmission**](docs/PDFApi.md#expireCombinedSubmission) | **DELETE** /combined_submissions/{combined_submission_id} | Expire a combined submission
*FormAPI.PDFApi* | [**expireSubmission**](docs/PDFApi.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a PDF submission
*FormAPI.PDFApi* | [**generatePDF**](docs/PDFApi.md#generatePDF) | **POST** /templates/{template_id}/submissions | Generates a new PDF
*FormAPI.PDFApi* | [**getCombinedSubmission**](docs/PDFApi.md#getCombinedSubmission) | **GET** /combined_submissions/{combined_submission_id} | Check the status of a combined submission (merged PDFs)
*FormAPI.PDFApi* | [**getDataRequest**](docs/PDFApi.md#getDataRequest) | **GET** /data_requests/{data_request_id} | Look up a submission data request
*FormAPI.PDFApi* | [**getSubmission**](docs/PDFApi.md#getSubmission) | **GET** /submissions/{submission_id} | Check the status of a PDF
*FormAPI.PDFApi* | [**getSubmissionBatch**](docs/PDFApi.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Check the status of a submission batch job
*FormAPI.PDFApi* | [**getTemplates**](docs/PDFApi.md#getTemplates) | **GET** /templates | Get a list of all templates
*FormAPI.PDFApi* | [**testAuthentication**](docs/PDFApi.md#testAuthentication) | **GET** /authentication | Test Authentication
*FormAPI.PDFApi* | [**updateDataRequest**](docs/PDFApi.md#updateDataRequest) | **PUT** /data_requests/{data_request_id} | Update a submission data request


## Documentation for Models

 - [FormAPI.AuthenticationError](docs/AuthenticationError.md)
 - [FormAPI.AuthenticationSuccessResponse](docs/AuthenticationSuccessResponse.md)
 - [FormAPI.CombinedSubmission](docs/CombinedSubmission.md)
 - [FormAPI.CombinedSubmissionData](docs/CombinedSubmissionData.md)
 - [FormAPI.CreateCombinedSubmissionResponse](docs/CreateCombinedSubmissionResponse.md)
 - [FormAPI.CreateSubmissionBatchResponse](docs/CreateSubmissionBatchResponse.md)
 - [FormAPI.CreateSubmissionBatchSubmissionsResponse](docs/CreateSubmissionBatchSubmissionsResponse.md)
 - [FormAPI.CreateSubmissionData](docs/CreateSubmissionData.md)
 - [FormAPI.CreateSubmissionDataBatchRequest](docs/CreateSubmissionDataBatchRequest.md)
 - [FormAPI.CreateSubmissionDataBatchV1](docs/CreateSubmissionDataBatchV1.md)
 - [FormAPI.CreateSubmissionDataRequestData](docs/CreateSubmissionDataRequestData.md)
 - [FormAPI.CreateSubmissionDataRequestTokenResponse](docs/CreateSubmissionDataRequestTokenResponse.md)
 - [FormAPI.CreateSubmissionDataRequestTokenResponseToken](docs/CreateSubmissionDataRequestTokenResponseToken.md)
 - [FormAPI.CreateSubmissionResponse](docs/CreateSubmissionResponse.md)
 - [FormAPI.Error](docs/Error.md)
 - [FormAPI.InvalidRequest](docs/InvalidRequest.md)
 - [FormAPI.Submission](docs/Submission.md)
 - [FormAPI.SubmissionBatch](docs/SubmissionBatch.md)
 - [FormAPI.SubmissionBatchData](docs/SubmissionBatchData.md)
 - [FormAPI.SubmissionDataRequest](docs/SubmissionDataRequest.md)
 - [FormAPI.Template](docs/Template.md)
 - [FormAPI.UpdateDataRequestResponse](docs/UpdateDataRequestResponse.md)
 - [FormAPI.UpdateSubmissionDataRequestData](docs/UpdateSubmissionDataRequestData.md)


## Documentation for Authorization


### api_token_basic

- **Type**: HTTP basic authentication
