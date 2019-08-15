/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var CancelPaymentByIdempotencyKeyRequest = require('../model/CancelPaymentByIdempotencyKeyRequest');
var CancelPaymentByIdempotencyKeyResponse = require('../model/CancelPaymentByIdempotencyKeyResponse');
var CancelPaymentResponse = require('../model/CancelPaymentResponse');
var CompletePaymentResponse = require('../model/CompletePaymentResponse');
var CreatePaymentRequest = require('../model/CreatePaymentRequest');
var CreatePaymentResponse = require('../model/CreatePaymentResponse');
var GetPaymentResponse = require('../model/GetPaymentResponse');
var ListPaymentsResponse = require('../model/ListPaymentsResponse');

/**
 * Payments service.
 * @module api/PaymentsApi
 */

/**
 * Constructs a new PaymentsApi. 
 * @alias module:api/PaymentsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * CancelPayment
   * Cancels a payment. If you set &#x60;autocomplete&#x60; to false when creating a payment,  you can cancel the payment using this endpoint. For more information, see [Delayed Payments](/payments-api/take-payments#delayed-payments).
   * @param {String} paymentId &#x60;payment_id&#x60; identifying the payment to be canceled.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CancelPaymentResponse} and HTTP response
   */
  this.cancelPaymentWithHttpInfo = function(paymentId) {
    var postBody = null;

    // verify the required parameter 'paymentId' is set
    if (paymentId === undefined || paymentId === null) {
      throw new Error("Missing the required parameter 'paymentId' when calling cancelPayment");
    }


    var pathParams = {
      'payment_id': paymentId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-08-14';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CancelPaymentResponse;

    return this.apiClient.callApi(
      '/v2/payments/{payment_id}/cancel', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CancelPayment
   * Cancels a payment. If you set &#x60;autocomplete&#x60; to false when creating a payment,  you can cancel the payment using this endpoint. For more information, see [Delayed Payments](/payments-api/take-payments#delayed-payments).
   * @param {String} paymentId &#x60;payment_id&#x60; identifying the payment to be canceled.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CancelPaymentResponse}
   */
  this.cancelPayment = function(paymentId) {
    return this.cancelPaymentWithHttpInfo(paymentId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CancelPaymentByIdempotencyKey
   * Cancels a payment identified by the idenpotency key that is specified the request.  Use this method when status of a CreatePayment request is unknown. For example, after you send a CreatePayment request a network error occurs and you don&#39;t get a response. In this case, you can direct Square to cancel the payment using this endpoint. In the request, you provide the same idempotency key that you provided in your CreatePayment request you want  to cancel. After cancelling the payment, you can submit your CreatePayment request again. Note that if no payment with the specified idempotency key is found, no action is taken, the end  point returns successfully.
   * @param {module:model/CancelPaymentByIdempotencyKeyRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CancelPaymentByIdempotencyKeyResponse} and HTTP response
   */
  this.cancelPaymentByIdempotencyKeyWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling cancelPaymentByIdempotencyKey");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-08-14';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CancelPaymentByIdempotencyKeyResponse;

    return this.apiClient.callApi(
      '/v2/payments/cancel', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CancelPaymentByIdempotencyKey
   * Cancels a payment identified by the idenpotency key that is specified the request.  Use this method when status of a CreatePayment request is unknown. For example, after you send a CreatePayment request a network error occurs and you don&#39;t get a response. In this case, you can direct Square to cancel the payment using this endpoint. In the request, you provide the same idempotency key that you provided in your CreatePayment request you want  to cancel. After cancelling the payment, you can submit your CreatePayment request again. Note that if no payment with the specified idempotency key is found, no action is taken, the end  point returns successfully.
   * @param {module:model/CancelPaymentByIdempotencyKeyRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CancelPaymentByIdempotencyKeyResponse}
   */
  this.cancelPaymentByIdempotencyKey = function(body) {
    return this.cancelPaymentByIdempotencyKeyWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CompletePayment
   * Completes a payment.  By default, payments are set to complete immediately after they are created.  If you set autocomplete to false when creating a payment,  you can complete the payment using this endpoint. For more information, see [Delayed Payments](/payments-api/take-payments#delayed-payments).
   * @param {String} paymentId Unique ID identifying the payment to be completed.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CompletePaymentResponse} and HTTP response
   */
  this.completePaymentWithHttpInfo = function(paymentId) {
    var postBody = null;

    // verify the required parameter 'paymentId' is set
    if (paymentId === undefined || paymentId === null) {
      throw new Error("Missing the required parameter 'paymentId' when calling completePayment");
    }


    var pathParams = {
      'payment_id': paymentId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-08-14';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CompletePaymentResponse;

    return this.apiClient.callApi(
      '/v2/payments/{payment_id}/complete', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CompletePayment
   * Completes a payment.  By default, payments are set to complete immediately after they are created.  If you set autocomplete to false when creating a payment,  you can complete the payment using this endpoint. For more information, see [Delayed Payments](/payments-api/take-payments#delayed-payments).
   * @param {String} paymentId Unique ID identifying the payment to be completed.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CompletePaymentResponse}
   */
  this.completePayment = function(paymentId) {
    return this.completePaymentWithHttpInfo(paymentId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreatePayment
   * Charges a payment source, for example, a card  represented by customer&#39;s card on file or a card nonce. In addition  to the payment source, the request must also include the  amount to accept for the payment.  There are several optional parameters that you can include in the request.  For example, tip money, whether to autocomplete the payment, or a reference ID to correlate this payment with another system.  For more information about these  payment options, see [Take Payments](/payments-api/take-payments).  The &#x60;PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS&#x60; OAuth permission is required to enable application fees.
   * @param {module:model/CreatePaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreatePaymentResponse} and HTTP response
   */
  this.createPaymentWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createPayment");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-08-14';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreatePaymentResponse;

    return this.apiClient.callApi(
      '/v2/payments', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreatePayment
   * Charges a payment source, for example, a card  represented by customer&#39;s card on file or a card nonce. In addition  to the payment source, the request must also include the  amount to accept for the payment.  There are several optional parameters that you can include in the request.  For example, tip money, whether to autocomplete the payment, or a reference ID to correlate this payment with another system.  For more information about these  payment options, see [Take Payments](/payments-api/take-payments).  The &#x60;PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS&#x60; OAuth permission is required to enable application fees.
   * @param {module:model/CreatePaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreatePaymentResponse}
   */
  this.createPayment = function(body) {
    return this.createPaymentWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * GetPayment
   * Retrieves details for a specific Payment.
   * @param {String} paymentId Unique ID for the desired &#x60;Payment&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPaymentResponse} and HTTP response
   */
  this.getPaymentWithHttpInfo = function(paymentId) {
    var postBody = null;

    // verify the required parameter 'paymentId' is set
    if (paymentId === undefined || paymentId === null) {
      throw new Error("Missing the required parameter 'paymentId' when calling getPayment");
    }


    var pathParams = {
      'payment_id': paymentId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-08-14';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = GetPaymentResponse;

    return this.apiClient.callApi(
      '/v2/payments/{payment_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * GetPayment
   * Retrieves details for a specific Payment.
   * @param {String} paymentId Unique ID for the desired &#x60;Payment&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPaymentResponse}
   */
  this.getPayment = function(paymentId) {
    return this.getPaymentWithHttpInfo(paymentId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListPayments
   * Retrieves a list of payments taken by the account making the request.  Max results per page: 100
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime Timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one year.
   * @param {String} opts.endTime Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
   * @param {String} opts.sortOrder The order in which results are listed. - &#x60;ASC&#x60; - oldest to newest - &#x60;DESC&#x60; - newest to oldest (default).
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](/basics/api101/pagination) for more information.
   * @param {String} opts.locationId ID of location associated with payment
   * @param {Number} opts.total The exact amount in the total_money for a &#x60;Payment&#x60;.
   * @param {String} opts.last4 The last 4 digits of &#x60;Payment&#x60; card.
   * @param {String} opts.cardBrand The brand of &#x60;Payment&#x60; card. For example, &#x60;VISA&#x60;
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListPaymentsResponse} and HTTP response
   */
  this.listPaymentsWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'begin_time': opts['beginTime'],
      'end_time': opts['endTime'],
      'sort_order': opts['sortOrder'],
      'cursor': opts['cursor'],
      'location_id': opts['locationId'],
      'total': opts['total'],
      'last_4': opts['last4'],
      'card_brand': opts['cardBrand']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-08-14';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListPaymentsResponse;

    return this.apiClient.callApi(
      '/v2/payments', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListPayments
   * Retrieves a list of payments taken by the account making the request.  Max results per page: 100
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime Timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one year.
   * @param {String} opts.endTime Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
   * @param {String} opts.sortOrder The order in which results are listed. - &#x60;ASC&#x60; - oldest to newest - &#x60;DESC&#x60; - newest to oldest (default).
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](/basics/api101/pagination) for more information.
   * @param {String} opts.locationId ID of location associated with payment
   * @param {Number} opts.total The exact amount in the total_money for a &#x60;Payment&#x60;.
   * @param {String} opts.last4 The last 4 digits of &#x60;Payment&#x60; card.
   * @param {String} opts.cardBrand The brand of &#x60;Payment&#x60; card. For example, &#x60;VISA&#x60;
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPaymentsResponse}
   */
  this.listPayments = function(opts) {
    return this.listPaymentsWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};