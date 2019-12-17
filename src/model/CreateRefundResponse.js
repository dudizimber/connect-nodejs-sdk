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
 * Swagger Codegen version: 2.20191217.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Error = require('./Error');
var Refund = require('./Refund');




/**
 * @deprecated
 * The CreateRefundResponse model module.
 * @module model/CreateRefundResponse
 */

/**
 * Constructs a new <code>CreateRefundResponse</code>.
 * Defines the fields that are included in the response body of a request to the [CreateRefund](#endpoint-createrefund) endpoint.  One of &#x60;errors&#x60; or &#x60;refund&#x60; is present in a given response (never both).
 * @alias module:model/CreateRefundResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CreateRefundResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateRefundResponse} obj Optional instance to populate.
 * @return {module:model/CreateRefundResponse} The populated <code>CreateRefundResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('refund')) {
      obj['refund'] = Refund.constructFromObject(data['refund']);
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The created refund.
 * @member {module:model/Refund} refund
 */
exports.prototype['refund'] = undefined;



module.exports = exports;



