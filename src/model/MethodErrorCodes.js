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
 * The MethodErrorCodes model module.
 * @module model/MethodErrorCodes
 */

/**
 * Constructs a new <code>MethodErrorCodes</code>.
 * 
 * @alias module:model/MethodErrorCodes
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>MethodErrorCodes</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/MethodErrorCodes} obj Optional instance to populate.
 * @return {module:model/MethodErrorCodes} The populated <code>MethodErrorCodes</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('value')) {
      obj['value'] = ApiClient.convertToType(data['value'], ['String']);
    }
    }
  return obj;
}

/**
 *  See [ErrorCode](#type-errorcode) for possible values
 * @member {Array.<String>} value
 */
exports.prototype['value'] = undefined;



module.exports = exports;



