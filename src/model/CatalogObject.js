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
var CatalogCategory = require('./CatalogCategory');
var CatalogCustomAttributeDefinition = require('./CatalogCustomAttributeDefinition');
var CatalogCustomAttributeValue = require('./CatalogCustomAttributeValue');
var CatalogDiscount = require('./CatalogDiscount');
var CatalogImage = require('./CatalogImage');
var CatalogItem = require('./CatalogItem');
var CatalogItemOption = require('./CatalogItemOption');
var CatalogItemOptionValue = require('./CatalogItemOptionValue');
var CatalogItemVariation = require('./CatalogItemVariation');
var CatalogMeasurementUnit = require('./CatalogMeasurementUnit');
var CatalogModifier = require('./CatalogModifier');
var CatalogModifierList = require('./CatalogModifierList');
var CatalogPricingRule = require('./CatalogPricingRule');
var CatalogProductSet = require('./CatalogProductSet');
var CatalogTax = require('./CatalogTax');
var CatalogTimePeriod = require('./CatalogTimePeriod');
var CatalogV1Id = require('./CatalogV1Id');




/**
 * The CatalogObject model module.
 * @module model/CatalogObject
 */

/**
 * Constructs a new <code>CatalogObject</code>.
 * The wrapper object for object types in the Catalog data model. The type of a particular &#x60;CatalogObject&#x60; is determined by the value of &#x60;type&#x60; and only the corresponding data field may be set.  - if type &#x3D; &#x60;ITEM&#x60;, only &#x60;item_data&#x60; will be populated and it will contain a valid &#x60;CatalogItem&#x60; object. - if type &#x3D; &#x60;ITEM_VARIATION&#x60;, only &#x60;item_variation_data&#x60; will be populated and it will contain a valid &#x60;CatalogItemVariation&#x60; object. - if type &#x3D; &#x60;MODIFIER&#x60;, only &#x60;modifier_data&#x60; will be populated and it will contain a valid &#x60;CatalogModifier&#x60; object. - if type &#x3D; &#x60;MODIFIER_LIST&#x60;, only &#x60;modifier_list_data&#x60; will be populated and it will contain a valid &#x60;CatalogModifierList&#x60; object. - if type &#x3D; &#x60;CATEGORY&#x60;, only &#x60;category_data&#x60; will be populated and it will contain a valid &#x60;CatalogCategory&#x60; object. - if type &#x3D; &#x60;DISCOUNT&#x60;, only &#x60;discount_data&#x60; will be populated and it will contain a valid &#x60;CatalogDiscount&#x60; object. - if type &#x3D; &#x60;TAX&#x60;, only &#x60;tax_data&#x60; will be populated and it will contain a valid &#x60;CatalogTax&#x60; object. - if type &#x3D; &#x60;IMAGE&#x60;, only &#x60;image_data&#x60; will be populated and it will contain a valid &#x60;CatalogImage&#x60; object.  For a more detailed discussion of the Catalog data model, please see the [Design a Catalog](/catalog-api/design-a-catalog) guide.
 * @alias module:model/CatalogObject
 * @class
 * @param type {String} The type of this object. Each object type has expected properties expressed in a structured format within its corresponding `*_data` field below. See [CatalogObjectType](#type-catalogobjecttype) for possible values
 * @param id {String} An identifier to reference this object in the catalog. When a new `CatalogObject` is inserted, the client should set the id to a temporary identifier starting with a \"`#`\" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.  When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
 */
var exports = function(type, id) {
  var _this = this;

  _this['type'] = type;
  _this['id'] = id;
























};

/**
 * Constructs a <code>CatalogObject</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogObject} obj Optional instance to populate.
 * @return {module:model/CatalogObject} The populated <code>CatalogObject</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
      if (data.hasOwnProperty('version')) {
      obj['version'] = ApiClient.convertToType(data['version'], 'Number');
    }
      if (data.hasOwnProperty('is_deleted')) {
      obj['is_deleted'] = ApiClient.convertToType(data['is_deleted'], 'Boolean');
    }
      if (data.hasOwnProperty('custom_attribute_values')) {
      obj['custom_attribute_values'] = ApiClient.convertToType(data['custom_attribute_values'], {'String': CatalogCustomAttributeValue});
    }
      if (data.hasOwnProperty('catalog_v1_ids')) {
      obj['catalog_v1_ids'] = ApiClient.convertToType(data['catalog_v1_ids'], [CatalogV1Id]);
    }
      if (data.hasOwnProperty('present_at_all_locations')) {
      obj['present_at_all_locations'] = ApiClient.convertToType(data['present_at_all_locations'], 'Boolean');
    }
      if (data.hasOwnProperty('present_at_location_ids')) {
      obj['present_at_location_ids'] = ApiClient.convertToType(data['present_at_location_ids'], ['String']);
    }
      if (data.hasOwnProperty('absent_at_location_ids')) {
      obj['absent_at_location_ids'] = ApiClient.convertToType(data['absent_at_location_ids'], ['String']);
    }
      if (data.hasOwnProperty('image_id')) {
      obj['image_id'] = ApiClient.convertToType(data['image_id'], 'String');
    }
      if (data.hasOwnProperty('item_data')) {
      obj['item_data'] = CatalogItem.constructFromObject(data['item_data']);
    }
      if (data.hasOwnProperty('category_data')) {
      obj['category_data'] = CatalogCategory.constructFromObject(data['category_data']);
    }
      if (data.hasOwnProperty('item_variation_data')) {
      obj['item_variation_data'] = CatalogItemVariation.constructFromObject(data['item_variation_data']);
    }
      if (data.hasOwnProperty('tax_data')) {
      obj['tax_data'] = CatalogTax.constructFromObject(data['tax_data']);
    }
      if (data.hasOwnProperty('discount_data')) {
      obj['discount_data'] = CatalogDiscount.constructFromObject(data['discount_data']);
    }
      if (data.hasOwnProperty('modifier_list_data')) {
      obj['modifier_list_data'] = CatalogModifierList.constructFromObject(data['modifier_list_data']);
    }
      if (data.hasOwnProperty('modifier_data')) {
      obj['modifier_data'] = CatalogModifier.constructFromObject(data['modifier_data']);
    }
      if (data.hasOwnProperty('time_period_data')) {
      obj['time_period_data'] = CatalogTimePeriod.constructFromObject(data['time_period_data']);
    }
      if (data.hasOwnProperty('product_set_data')) {
      obj['product_set_data'] = CatalogProductSet.constructFromObject(data['product_set_data']);
    }
      if (data.hasOwnProperty('pricing_rule_data')) {
      obj['pricing_rule_data'] = CatalogPricingRule.constructFromObject(data['pricing_rule_data']);
    }
      if (data.hasOwnProperty('image_data')) {
      obj['image_data'] = CatalogImage.constructFromObject(data['image_data']);
    }
      if (data.hasOwnProperty('measurement_unit_data')) {
      obj['measurement_unit_data'] = CatalogMeasurementUnit.constructFromObject(data['measurement_unit_data']);
    }
      if (data.hasOwnProperty('item_option_data')) {
      obj['item_option_data'] = CatalogItemOption.constructFromObject(data['item_option_data']);
    }
      if (data.hasOwnProperty('item_option_value_data')) {
      obj['item_option_value_data'] = CatalogItemOptionValue.constructFromObject(data['item_option_value_data']);
    }
      if (data.hasOwnProperty('custom_attribute_definition_data')) {
      obj['custom_attribute_definition_data'] = CatalogCustomAttributeDefinition.constructFromObject(data['custom_attribute_definition_data']);
    }
    }
  return obj;
}

/**
 * The type of this object. Each object type has expected properties expressed in a structured format within its corresponding `*_data` field below. See [CatalogObjectType](#type-catalogobjecttype) for possible values
 * @member {String} type
 */
exports.prototype['type'] = undefined;
/**
 * An identifier to reference this object in the catalog. When a new `CatalogObject` is inserted, the client should set the id to a temporary identifier starting with a \"`#`\" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.  When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * Last modification [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) in RFC 3339 format, e.g., `\"2016-08-15T23:59:33.123Z\"` would indicate the UTC time (denoted by `Z`) of August 15, 2016 at 23:59:33 and 123 milliseconds.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;
/**
 * The version of the object. When updating an object, the version supplied must match the version in the database, otherwise the write will be rejected as conflicting.
 * @member {Number} version
 */
exports.prototype['version'] = undefined;
/**
 * If `true`, the object has been deleted from the database. Must be `false` for new objects being inserted. When deleted, the `updated_at` field will equal the deletion time.
 * @member {Boolean} is_deleted
 */
exports.prototype['is_deleted'] = undefined;
/**
 * Application-defined key/value attributes that are set at a global (location-independent) level. Values from the `*_data` fields may not be duplicated. Custom Attribute fields are intended to store additional information about a Catalog Object or associations with an entity in another system. Do not use custom attributes to store any sensitive information (personally identifiable information, card details, etc.).  For CustomAttributesDefinitions defined by the app making the request, the map key is the key defined in CustomAttributeDefinition (eg. “reference_id”). For CustomAttributesDefinitions by other apps, the map key is the key defined in CustomAttributeDefinition prefixed with the application ID and a colon (eg. “abcd1234:reference_id”).
 * @member {Object.<String, module:model/CatalogCustomAttributeValue>} custom_attribute_values
 */
exports.prototype['custom_attribute_values'] = undefined;
/**
 * The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs.
 * @member {Array.<module:model/CatalogV1Id>} catalog_v1_ids
 */
exports.prototype['catalog_v1_ids'] = undefined;
/**
 * If `true`, this object is present at all locations (including future locations), except where specified in the `absent_at_location_ids` field. If `false`, this object is not present at any locations (including future locations), except where specified in the `present_at_location_ids` field. If not specified, defaults to `true`.
 * @member {Boolean} present_at_all_locations
 */
exports.prototype['present_at_all_locations'] = undefined;
/**
 * A list of locations where the object is present, even if `present_at_all_locations` is `false`.
 * @member {Array.<String>} present_at_location_ids
 */
exports.prototype['present_at_location_ids'] = undefined;
/**
 * A list of locations where the object is not present, even if `present_at_all_locations` is `true`.
 * @member {Array.<String>} absent_at_location_ids
 */
exports.prototype['absent_at_location_ids'] = undefined;
/**
 * Identifies the `CatalogImage` attached to this `CatalogObject`.
 * @member {String} image_id
 */
exports.prototype['image_id'] = undefined;
/**
 * Structured data for a `CatalogItem`, set for CatalogObjects of type `ITEM`.
 * @member {module:model/CatalogItem} item_data
 */
exports.prototype['item_data'] = undefined;
/**
 * Structured data for a `CatalogCategory`, set for CatalogObjects of type `CATEGORY`.
 * @member {module:model/CatalogCategory} category_data
 */
exports.prototype['category_data'] = undefined;
/**
 * Structured data for a `CatalogItemVariation`, set for CatalogObjects of type `ITEM_VARIATION`.
 * @member {module:model/CatalogItemVariation} item_variation_data
 */
exports.prototype['item_variation_data'] = undefined;
/**
 * Structured data for a `CatalogTax`, set for CatalogObjects of type `TAX`.
 * @member {module:model/CatalogTax} tax_data
 */
exports.prototype['tax_data'] = undefined;
/**
 * Structured data for a `CatalogDiscount`, set for CatalogObjects of type `DISCOUNT`.
 * @member {module:model/CatalogDiscount} discount_data
 */
exports.prototype['discount_data'] = undefined;
/**
 * Structured data for a `CatalogModifierList`, set for CatalogObjects of type `MODIFIER_LIST`.
 * @member {module:model/CatalogModifierList} modifier_list_data
 */
exports.prototype['modifier_list_data'] = undefined;
/**
 * Structured data for a `CatalogModifier`, set for CatalogObjects of type `MODIFIER`.
 * @member {module:model/CatalogModifier} modifier_data
 */
exports.prototype['modifier_data'] = undefined;
/**
 * Structured data for a `CatalogTimePeriod`, set for CatalogObjects of type `TIME_PERIOD`.
 * @member {module:model/CatalogTimePeriod} time_period_data
 */
exports.prototype['time_period_data'] = undefined;
/**
 * Structured data for a `CatalogProductSet`, set for CatalogObjects of type `PRODUCT_SET`.
 * @member {module:model/CatalogProductSet} product_set_data
 */
exports.prototype['product_set_data'] = undefined;
/**
 * Structured data for a `CatalogPricingRule`, set for CatalogObjects of type `PRICING_RULE`.
 * @member {module:model/CatalogPricingRule} pricing_rule_data
 */
exports.prototype['pricing_rule_data'] = undefined;
/**
 * Structured data for a `CatalogImage`, set for CatalogObjects of type `IMAGE`.
 * @member {module:model/CatalogImage} image_data
 */
exports.prototype['image_data'] = undefined;
/**
 * Structured data for a `CatalogMeasurementUnit`, set for CatalogObjects of type `MEASUREMENT_UNIT`.
 * @member {module:model/CatalogMeasurementUnit} measurement_unit_data
 */
exports.prototype['measurement_unit_data'] = undefined;
/**
 * Structured data for a `CatalogItemOption`, set for CatalogObjects of type `ITEM_OPTION`.
 * @member {module:model/CatalogItemOption} item_option_data
 */
exports.prototype['item_option_data'] = undefined;
/**
 * Structured data for a `CatalogItemOptionValue`, set for CatalogObjects of type `ITEM_OPTION_VAL`.
 * @member {module:model/CatalogItemOptionValue} item_option_value_data
 */
exports.prototype['item_option_value_data'] = undefined;
/**
 * Structured data for a `CatalogCustomAttributeDefinition`, set for CatalogObjects of type `CUSTOM_ATTRIBUTE_DEFINITION`.
 * @member {module:model/CatalogCustomAttributeDefinition} custom_attribute_definition_data
 */
exports.prototype['custom_attribute_definition_data'] = undefined;



module.exports = exports;



