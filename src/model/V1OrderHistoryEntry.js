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
 * The V1OrderHistoryEntry model module.
 * @module model/V1OrderHistoryEntry
 */

/**
 * Constructs a new <code>V1OrderHistoryEntry</code>.
 * V1OrderHistoryEntry
 * @alias module:model/V1OrderHistoryEntry
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>V1OrderHistoryEntry</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1OrderHistoryEntry} obj Optional instance to populate.
 * @return {module:model/V1OrderHistoryEntry} The populated <code>V1OrderHistoryEntry</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('action')) {
      obj['action'] = ApiClient.convertToType(data['action'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
    }
  return obj;
}

/**
 * The type of action performed on the order. See [V1OrderHistoryEntryAction](#type-v1orderhistoryentryaction) for possible values
 * @member {String} action
 */
exports.prototype['action'] = undefined;
/**
 * The time when the action was performed, in ISO 8601 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;



module.exports = exports;



