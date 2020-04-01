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
 * The RevokeTokenRequest model module.
 * @module model/RevokeTokenRequest
 */

/**
 * Constructs a new <code>RevokeTokenRequest</code>.
 * 
 * @alias module:model/RevokeTokenRequest
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>RevokeTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RevokeTokenRequest} obj Optional instance to populate.
 * @return {module:model/RevokeTokenRequest} The populated <code>RevokeTokenRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('client_id')) {
      obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
    }
      if (data.hasOwnProperty('access_token')) {
      obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
    }
      if (data.hasOwnProperty('merchant_id')) {
      obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
    }
    }
  return obj;
}

/**
 * The Square issued ID for your application, available from the [application dashboard](https://connect.squareup.com/apps).
 * @member {String} client_id
 */
exports.prototype['client_id'] = undefined;
/**
 * The access token of the merchant whose token you want to revoke. Do not provide a value for merchant_id if you provide this parameter.
 * @member {String} access_token
 */
exports.prototype['access_token'] = undefined;
/**
 * The ID of the merchant whose token you want to revoke. Do not provide a value for access_token if you provide this parameter.
 * @member {String} merchant_id
 */
exports.prototype['merchant_id'] = undefined;



module.exports = exports;



