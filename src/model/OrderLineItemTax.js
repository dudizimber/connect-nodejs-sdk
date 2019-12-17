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
var Money = require('./Money');




/**
 * The OrderLineItemTax model module.
 * @module model/OrderLineItemTax
 */

/**
 * Constructs a new <code>OrderLineItemTax</code>.
 * Represents a tax that applies to one or more line item in the order.  Fixed-amount, order-scoped taxes are distributed across all non-zero line item totals. The amount distributed to each line item is relative to the amount the item contributes to the order subtotal.
 * @alias module:model/OrderLineItemTax
 * @class
 */
var exports = function() {
  var _this = this;









};

/**
 * Constructs a <code>OrderLineItemTax</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderLineItemTax} obj Optional instance to populate.
 * @return {module:model/OrderLineItemTax} The populated <code>OrderLineItemTax</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('percentage')) {
      obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
    }
      if (data.hasOwnProperty('metadata')) {
      obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = Money.constructFromObject(data['applied_money']);
    }
      if (data.hasOwnProperty('scope')) {
      obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the tax only within this order.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * The catalog object id referencing `CatalogTax`.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The tax's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * Indicates the calculation method used to apply the tax. See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values
 * @member {String} type
 */
exports.prototype['type'] = undefined;
/**
 * The percentage of the tax, as a string representation of a decimal number. For example, a value of `\"7.25\"` corresponds to a percentage of 7.25%.
 * @member {String} percentage
 */
exports.prototype['percentage'] = undefined;
/**
 * Application-defined data attached to this tax. Metadata fields are intended to store descriptive references or associations with an entity in another system or store brief information about the object. Square does not process this field; it only stores and returns it in relevant API calls. Do not use metadata to store any sensitive information (personally identifiable information, card details, etc.).  Keys written by applications must be 60 characters or less and must be in the character set `[a-zA-Z0-9_-]`. Entries may also include metadata generated by Square. These keys are prefixed with a namespace, separated from the key with a ':' character.  Values have a max length of 255 characters.  An application may have up to 10 entries per metadata field.  Entries written by applications are private and can only be read or modified by the same application.  See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
 * @member {Object.<String, String>} metadata
 */
exports.prototype['metadata'] = undefined;
/**
 * The amount of the money applied by the tax in the order.
 * @member {module:model/Money} applied_money
 */
exports.prototype['applied_money'] = undefined;
/**
 * Indicates the level at which the tax applies. For `ORDER` scoped taxes, Square generates references in `applied_taxes` on all order line items that do not have them. For `LINE_ITEM` scoped taxes, the tax will only apply to line items with references in their `applied_taxes` field.  This field is immutable. To change the scope, you must delete the tax and re-add it as a new tax. See [OrderLineItemTaxScope](#type-orderlineitemtaxscope) for possible values
 * @member {String} scope
 */
exports.prototype['scope'] = undefined;



module.exports = exports;



