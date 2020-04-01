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
 * The CatalogQuerySortedAttribute model module.
 * @module model/CatalogQuerySortedAttribute
 */

/**
 * Constructs a new <code>CatalogQuerySortedAttribute</code>.
 * 
 * @alias module:model/CatalogQuerySortedAttribute
 * @class
 * @param attributeName {String} The attribute whose value should be used as the sort key.
 */
var exports = function(attributeName) {
  var _this = this;

  _this['attribute_name'] = attributeName;


};

/**
 * Constructs a <code>CatalogQuerySortedAttribute</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogQuerySortedAttribute} obj Optional instance to populate.
 * @return {module:model/CatalogQuerySortedAttribute} The populated <code>CatalogQuerySortedAttribute</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('attribute_name')) {
      obj['attribute_name'] = ApiClient.convertToType(data['attribute_name'], 'String');
    }
      if (data.hasOwnProperty('initial_attribute_value')) {
      obj['initial_attribute_value'] = ApiClient.convertToType(data['initial_attribute_value'], 'String');
    }
      if (data.hasOwnProperty('sort_order')) {
      obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'String');
    }
    }
  return obj;
}

/**
 * The attribute whose value should be used as the sort key.
 * @member {String} attribute_name
 */
exports.prototype['attribute_name'] = undefined;
/**
 * The first attribute value to be returned by the query. Ascending sorts will return only objects with this value or greater, while descending sorts will return only objects with this value or less. If unset, start at the beginning (for ascending sorts) or end (for descending sorts).
 * @member {String} initial_attribute_value
 */
exports.prototype['initial_attribute_value'] = undefined;
/**
 * The desired sort order, `\"ASC\"` (ascending) or `\"DESC\"` (descending). See [SortOrder](#type-sortorder) for possible values
 * @member {String} sort_order
 */
exports.prototype['sort_order'] = undefined;



module.exports = exports;



