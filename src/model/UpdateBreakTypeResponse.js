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
var BreakType = require('./BreakType');
var Error = require('./Error');




/**
 * The UpdateBreakTypeResponse model module.
 * @module model/UpdateBreakTypeResponse
 */

/**
 * Constructs a new <code>UpdateBreakTypeResponse</code>.
 * A response to a request to update a &#x60;BreakType&#x60;. Contains the requested &#x60;BreakType&#x60; objects. May contain a set of &#x60;Error&#x60; objects if the request resulted in errors.
 * @alias module:model/UpdateBreakTypeResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>UpdateBreakTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpdateBreakTypeResponse} obj Optional instance to populate.
 * @return {module:model/UpdateBreakTypeResponse} The populated <code>UpdateBreakTypeResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('break_type')) {
      obj['break_type'] = BreakType.constructFromObject(data['break_type']);
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The response object.
 * @member {module:model/BreakType} break_type
 */
exports.prototype['break_type'] = undefined;
/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



