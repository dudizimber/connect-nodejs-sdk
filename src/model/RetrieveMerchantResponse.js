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
var Merchant = require('./Merchant');




/**
 * The RetrieveMerchantResponse model module.
 * @module model/RetrieveMerchantResponse
 */

/**
 * Constructs a new <code>RetrieveMerchantResponse</code>.
 * The response object returned by the [RetrieveMerchant](#endpoint-retrieveMerchant) endpoint.
 * @alias module:model/RetrieveMerchantResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>RetrieveMerchantResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveMerchantResponse} obj Optional instance to populate.
 * @return {module:model/RetrieveMerchantResponse} The populated <code>RetrieveMerchantResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('merchant')) {
      obj['merchant'] = Merchant.constructFromObject(data['merchant']);
    }
    }
  return obj;
}

/**
 * Information on errors encountered during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The requested `Merchant` object.
 * @member {module:model/Merchant} merchant
 */
exports.prototype['merchant'] = undefined;



module.exports = exports;



