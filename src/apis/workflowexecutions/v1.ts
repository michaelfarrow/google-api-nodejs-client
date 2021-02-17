// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace workflowexecutions_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Workflow Executions API
   *
   * Execute workflows created with Workflows API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const workflowexecutions = google.workflowexecutions('v1');
   * ```
   */
  export class Workflowexecutions {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Request for the CancelExecution method.
   */
  export interface Schema$CancelExecutionRequest {}
  /**
   * Error describes why the execution was abnormally terminated.
   */
  export interface Schema$Error {
    /**
     * Human readable error context, helpful for debugging purposes.
     */
    context?: string | null;
    /**
     * Error payload returned by the execution, represented as a JSON string.
     */
    payload?: string | null;
  }
  /**
   * A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows).
   */
  export interface Schema$Execution {
    /**
     * Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"\}"\}'`
     */
    argument?: string | null;
    /**
     * Output only. Marks the end of execution, successful or not.
     */
    endTime?: string | null;
    /**
     * Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`.
     */
    error?: Schema$Error;
    /**
     * Output only. The resource name of the execution. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     */
    name?: string | null;
    /**
     * Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.
     */
    result?: string | null;
    /**
     * Output only. Marks the beginning of execution.
     */
    startTime?: string | null;
    /**
     * Output only. Current state of the execution.
     */
    state?: string | null;
    /**
     * Output only. Revision of the workflow this execution is using.
     */
    workflowRevisionId?: string | null;
  }
  /**
   * Response for the ListExecutions method.
   */
  export interface Schema$ListExecutionsResponse {
    /**
     * The executions which match the request.
     */
    executions?: Schema$Execution[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    workflows: Resource$Projects$Locations$Workflows;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.workflows = new Resource$Projects$Locations$Workflows(this.context);
    }
  }

  export class Resource$Projects$Locations$Workflows {
    context: APIRequestContext;
    executions: Resource$Projects$Locations$Workflows$Executions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.executions = new Resource$Projects$Locations$Workflows$Executions(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Workflows$Executions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels an execution of the given name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workflowexecutions = google.workflowexecutions('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workflowexecutions.projects.locations.workflows.executions.cancel(
     *     {
     *       // Required. Name of the execution to be cancelled. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     *       name:
     *         'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "argument": "my_argument",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "name": "my_name",
     *   //   "result": "my_result",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "workflowRevisionId": "my_workflowRevisionId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Execution>;
    cancel(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Execution>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Cancel
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Execution> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflows$Executions$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Creates a new execution using the latest revision of the given workflow.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workflowexecutions = google.workflowexecutions('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workflowexecutions.projects.locations.workflows.executions.create(
     *     {
     *       // Required. Name of the workflow for which an execution should be created. Format: projects/{project\}/locations/{location\}/workflows/{workflow\} The latest revision of the workflow will be used.
     *       parent: 'projects/my-project/locations/my-location/workflows/my-workflow',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "argument": "my_argument",
     *         //   "endTime": "my_endTime",
     *         //   "error": {},
     *         //   "name": "my_name",
     *         //   "result": "my_result",
     *         //   "startTime": "my_startTime",
     *         //   "state": "my_state",
     *         //   "workflowRevisionId": "my_workflowRevisionId"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "argument": "my_argument",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "name": "my_name",
     *   //   "result": "my_result",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "workflowRevisionId": "my_workflowRevisionId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Execution>;
    create(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Create,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    create(callback: BodyResponseCallback<Schema$Execution>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Create
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Execution> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflows$Executions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/executions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Returns an execution of the given name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workflowexecutions = google.workflowexecutions('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workflowexecutions.projects.locations.workflows.executions.get(
     *     {
     *       // Required. Name of the execution to be retrieved. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     *       name:
     *         'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution',
     *       // Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.
     *       view: 'placeholder-value',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "argument": "my_argument",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "name": "my_name",
     *   //   "result": "my_result",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "workflowRevisionId": "my_workflowRevisionId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Execution>;
    get(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Get,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(callback: BodyResponseCallback<Schema$Execution>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Get
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Execution> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflows$Executions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const workflowexecutions = google.workflowexecutions('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workflowexecutions.projects.locations.workflows.executions.list(
     *     {
     *       // Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Name of the workflow for which the executions should be listed. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}
     *       parent: 'projects/my-project/locations/my-location/workflows/my-workflow',
     *       // Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
     *       view: 'placeholder-value',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executions": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExecutionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$List,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$List
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListExecutionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Workflows$Executions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/executions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListExecutionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExecutionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Workflows$Executions$Cancel
    extends StandardParameters {
    /**
     * Required. Name of the execution to be cancelled. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelExecutionRequest;
  }
  export interface Params$Resource$Projects$Locations$Workflows$Executions$Create
    extends StandardParameters {
    /**
     * Required. Name of the workflow for which an execution should be created. Format: projects/{project\}/locations/{location\}/workflows/{workflow\} The latest revision of the workflow will be used.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Execution;
  }
  export interface Params$Resource$Projects$Locations$Workflows$Executions$Get
    extends StandardParameters {
    /**
     * Required. Name of the execution to be retrieved. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     */
    name?: string;
    /**
     * Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Workflows$Executions$List
    extends StandardParameters {
    /**
     * Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Name of the workflow for which the executions should be listed. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}
     */
    parent?: string;
    /**
     * Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
     */
    view?: string;
  }
}
