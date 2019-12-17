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
var InventoryChange = require('./InventoryChange');




/**
 * The BatchRetrieveInventoryChangesResponse model module.
 * @module model/BatchRetrieveInventoryChangesResponse
 */

/**
 * Constructs a new <code>BatchRetrieveInventoryChangesResponse</code>.
 *
 * @alias module:model/BatchRetrieveInventoryChangesResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>BatchRetrieveInventoryChangesResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BatchRetrieveInventoryChangesResponse} obj Optional instance to populate.
 * @return {module:model/BatchRetrieveInventoryChangesResponse} The populated <code>BatchRetrieveInventoryChangesResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('changes')) {
      obj['changes'] = ApiClient.convertToType(data['changes'], [InventoryChange]);
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
 * The current calculated inventory changes for the requested objects and locations.
 * @member {Array.<module:model/InventoryChange>} changes
 */
exports.prototype['changes'] = undefined;
/**
 * The pagination cursor to be used in a subsequent request. If unset, this is the final response. See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



