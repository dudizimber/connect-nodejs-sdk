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
var CatalogQueryFilteredItemsCustomAttributeFilter = require('./CatalogQueryFilteredItemsCustomAttributeFilter');




/**
 * The CatalogQueryFilteredItems model module.
 * @module model/CatalogQueryFilteredItems
 */

/**
 * Constructs a new <code>CatalogQueryFilteredItems</code>.
 * 
 * @alias module:model/CatalogQueryFilteredItems
 * @class
 */
var exports = function() {
  var _this = this;











};

/**
 * Constructs a <code>CatalogQueryFilteredItems</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogQueryFilteredItems} obj Optional instance to populate.
 * @return {module:model/CatalogQueryFilteredItems} The populated <code>CatalogQueryFilteredItems</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('text_filter')) {
      obj['text_filter'] = ApiClient.convertToType(data['text_filter'], 'String');
    }
      if (data.hasOwnProperty('search_vendor_code')) {
      obj['search_vendor_code'] = ApiClient.convertToType(data['search_vendor_code'], 'Boolean');
    }
      if (data.hasOwnProperty('category_ids')) {
      obj['category_ids'] = ApiClient.convertToType(data['category_ids'], ['String']);
    }
      if (data.hasOwnProperty('stock_levels')) {
      obj['stock_levels'] = ApiClient.convertToType(data['stock_levels'], ['String']);
    }
      if (data.hasOwnProperty('enabled_location_ids')) {
      obj['enabled_location_ids'] = ApiClient.convertToType(data['enabled_location_ids'], ['String']);
    }
      if (data.hasOwnProperty('vendor_ids')) {
      obj['vendor_ids'] = ApiClient.convertToType(data['vendor_ids'], ['String']);
    }
      if (data.hasOwnProperty('product_types')) {
      obj['product_types'] = ApiClient.convertToType(data['product_types'], ['String']);
    }
      if (data.hasOwnProperty('custom_attribute_filters')) {
      obj['custom_attribute_filters'] = ApiClient.convertToType(data['custom_attribute_filters'], [CatalogQueryFilteredItemsCustomAttributeFilter]);
    }
      if (data.hasOwnProperty('does_not_exist')) {
      obj['does_not_exist'] = ApiClient.convertToType(data['does_not_exist'], ['String']);
    }
      if (data.hasOwnProperty('sort_order')) {
      obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'String');
    }
    }
  return obj;
}

/**
 * 
 * @member {String} text_filter
 */
exports.prototype['text_filter'] = undefined;
/**
 * 
 * @member {Boolean} search_vendor_code
 */
exports.prototype['search_vendor_code'] = undefined;
/**
 * 
 * @member {Array.<String>} category_ids
 */
exports.prototype['category_ids'] = undefined;
/**
 *  See [CatalogQueryFilteredItemsStockLevel](#type-catalogqueryfiltereditemsstocklevel) for possible values
 * @member {Array.<String>} stock_levels
 */
exports.prototype['stock_levels'] = undefined;
/**
 * 
 * @member {Array.<String>} enabled_location_ids
 */
exports.prototype['enabled_location_ids'] = undefined;
/**
 * 
 * @member {Array.<String>} vendor_ids
 */
exports.prototype['vendor_ids'] = undefined;
/**
 *  See [CatalogItemProductType](#type-catalogitemproducttype) for possible values
 * @member {Array.<String>} product_types
 */
exports.prototype['product_types'] = undefined;
/**
 * 
 * @member {Array.<module:model/CatalogQueryFilteredItemsCustomAttributeFilter>} custom_attribute_filters
 */
exports.prototype['custom_attribute_filters'] = undefined;
/**
 *  See [CatalogQueryFilteredItemsNullableAttribute](#type-catalogqueryfiltereditemsnullableattribute) for possible values
 * @member {Array.<String>} does_not_exist
 */
exports.prototype['does_not_exist'] = undefined;
/**
 *  See [SortOrder](#type-sortorder) for possible values
 * @member {String} sort_order
 */
exports.prototype['sort_order'] = undefined;



module.exports = exports;



