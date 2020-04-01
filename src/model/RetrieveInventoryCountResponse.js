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
var InventoryCount = require('./InventoryCount');




/**
 * The RetrieveInventoryCountResponse model module.
 * @module model/RetrieveInventoryCountResponse
 */

/**
 * Constructs a new <code>RetrieveInventoryCountResponse</code>.
 * 
 * @alias module:model/RetrieveInventoryCountResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>RetrieveInventoryCountResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveInventoryCountResponse} obj Optional instance to populate.
 * @return {module:model/RetrieveInventoryCountResponse} The populated <code>RetrieveInventoryCountResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('counts')) {
      obj['counts'] = ApiClient.convertToType(data['counts'], [InventoryCount]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
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
 * The current calculated inventory counts for the requested object and locations.
 * @member {Array.<module:model/InventoryCount>} counts
 */
exports.prototype['counts'] = undefined;
/**
 * The pagination cursor to be used in a subsequent request. If unset, this is the final response.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



