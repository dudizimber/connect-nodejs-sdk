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




/**
 * The V1ListSettlementsRequest model module.
 * @module model/V1ListSettlementsRequest
 */

/**
 * Constructs a new <code>V1ListSettlementsRequest</code>.
 * 
 * @alias module:model/V1ListSettlementsRequest
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>V1ListSettlementsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1ListSettlementsRequest} obj Optional instance to populate.
 * @return {module:model/V1ListSettlementsRequest} The populated <code>V1ListSettlementsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('order')) {
      obj['order'] = ApiClient.convertToType(data['order'], 'String');
    }
      if (data.hasOwnProperty('begin_time')) {
      obj['begin_time'] = ApiClient.convertToType(data['begin_time'], 'String');
    }
      if (data.hasOwnProperty('end_time')) {
      obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('batch_token')) {
      obj['batch_token'] = ApiClient.convertToType(data['batch_token'], 'String');
    }
    }
  return obj;
}

/**
 * The order in which settlements are listed in the response. See [SortOrder](#type-sortorder) for possible values
 * @member {String} order
 */
exports.prototype['order'] = undefined;
/**
 * The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
 * @member {String} begin_time
 */
exports.prototype['begin_time'] = undefined;
/**
 * The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
 * @member {String} end_time
 */
exports.prototype['end_time'] = undefined;
/**
 * The maximum number of settlements to return in a single response. This value cannot exceed 200.
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED). See [V1ListSettlementsRequestStatus](#type-v1listsettlementsrequeststatus) for possible values
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
 * @member {String} batch_token
 */
exports.prototype['batch_token'] = undefined;



module.exports = exports;



