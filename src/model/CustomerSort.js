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
 * The CustomerSort model module.
 * @module model/CustomerSort
 */

/**
 * Constructs a new <code>CustomerSort</code>.
 * Indicates the field to use for sorting customer profiles.
 * @alias module:model/CustomerSort
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CustomerSort</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CustomerSort} obj Optional instance to populate.
 * @return {module:model/CustomerSort} The populated <code>CustomerSort</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('field')) {
      obj['field'] = ApiClient.convertToType(data['field'], 'String');
    }
      if (data.hasOwnProperty('order')) {
      obj['order'] = ApiClient.convertToType(data['order'], 'String');
    }
    }
  return obj;
}

/**
 * Indicates the information used to sort the results. For example, by creation date.  Default: `DEFAULT`. See [CustomerSortField](#type-customersortfield) for possible values
 * @member {String} field
 */
exports.prototype['field'] = undefined;
/**
 * Indicates the order in which results should be displayed based on the value of the sort field. String comparisons use standard alphabetic comparison to determine order. Strings representing numbers are sorted as strings.  Default: `ASC`. See [SortOrder](#type-sortorder) for possible values
 * @member {String} order
 */
exports.prototype['order'] = undefined;



module.exports = exports;



