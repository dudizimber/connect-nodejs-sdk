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
var Error = require('./Error');
var Transaction = require('./Transaction');




/**
 * @deprecated
 * The ChargeResponse model module.
 * @module model/ChargeResponse
 */

/**
 * Constructs a new <code>ChargeResponse</code>.
 * Defines the fields that are included in the response body of a request to the [Charge](#endpoint-charge) endpoint.  One of &#x60;errors&#x60; or &#x60;transaction&#x60; is present in a given response (never both).
 * @alias module:model/ChargeResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>ChargeResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ChargeResponse} obj Optional instance to populate.
 * @return {module:model/ChargeResponse} The populated <code>ChargeResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('transaction')) {
      obj['transaction'] = Transaction.constructFromObject(data['transaction']);
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
 * The created transaction.
 * @member {module:model/Transaction} transaction
 */
exports.prototype['transaction'] = undefined;



module.exports = exports;



