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




/**
 * The CatalogProductSet model module.
 * Note: This model is in beta.
 * @module model/CatalogProductSet
 */

/**
 * Constructs a new <code>CatalogProductSet</code>.
 * Represents a collection of catalog objects for the purpose of applying a &#x60;PricingRule&#x60;. Including a catalog object will include all of its subtypes. For example, including a category in a product set will include all of its items and associated item variations in the product set. Including an item in a product set will also include its item variations.
 * @alias module:model/CatalogProductSet
 * @class
 */
var exports = function() {
  var _this = this;








};

/**
 * Constructs a <code>CatalogProductSet</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogProductSet} obj Optional instance to populate.
 * @return {module:model/CatalogProductSet} The populated <code>CatalogProductSet</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('product_ids_any')) {
      obj['product_ids_any'] = ApiClient.convertToType(data['product_ids_any'], ['String']);
    }
      if (data.hasOwnProperty('product_ids_all')) {
      obj['product_ids_all'] = ApiClient.convertToType(data['product_ids_all'], ['String']);
    }
      if (data.hasOwnProperty('quantity_exact')) {
      obj['quantity_exact'] = ApiClient.convertToType(data['quantity_exact'], 'Number');
    }
      if (data.hasOwnProperty('quantity_min')) {
      obj['quantity_min'] = ApiClient.convertToType(data['quantity_min'], 'Number');
    }
      if (data.hasOwnProperty('quantity_max')) {
      obj['quantity_max'] = ApiClient.convertToType(data['quantity_max'], 'Number');
    }
      if (data.hasOwnProperty('all_products')) {
      obj['all_products'] = ApiClient.convertToType(data['all_products'], 'Boolean');
    }
    }
  return obj;
}

/**
 * User-defined name for the product set. For example, \"Clearance Items\" or \"Winter Sale Items\".
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 *  Unique IDs for any `CatalogObject` included in this product set. Any number of these catalog objects can be in an order for a pricing rule to apply.  This can be used with `product_ids_all` in a parent `CatalogProductSet` to match groups of products for a bulk discount, such as a discount for an entree and side combo.  Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.  Max: 500 catalog object IDs.
 * @member {Array.<String>} product_ids_any
 */
exports.prototype['product_ids_any'] = undefined;
/**
 * Unique IDs for any `CatalogObject` included in this product set. All objects in this set must be included in an order for a pricing rule to apply.  Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.  Max: 500 catalog object IDs.
 * @member {Array.<String>} product_ids_all
 */
exports.prototype['product_ids_all'] = undefined;
/**
 * If set, there must be exactly this many items from `products_any` or `products_all` in the cart for the discount to apply.  Cannot be combined with either `quantity_min` or `quantity_max`.
 * @member {Number} quantity_exact
 */
exports.prototype['quantity_exact'] = undefined;
/**
 * If set, there must be at least this many items from `products_any` or `products_all` in a cart for the discount to apply. See `quantity_exact`. Defaults to 0 if `quantity_exact`, `quantity_min` and `quantity_max` are all unspecified.
 * @member {Number} quantity_min
 */
exports.prototype['quantity_min'] = undefined;
/**
 * If set, the pricing rule will apply to a maximum of this many items from `products_any` or `products_all`.
 * @member {Number} quantity_max
 */
exports.prototype['quantity_max'] = undefined;
/**
 * If set to `true`, the product set will include every item in the catalog.  Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.
 * @member {Boolean} all_products
 */
exports.prototype['all_products'] = undefined;



module.exports = exports;



