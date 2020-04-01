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
 * The CatalogQueryRange model module.
 * @module model/CatalogQueryRange
 */

/**
 * Constructs a new <code>CatalogQueryRange</code>.
 * 
 * @alias module:model/CatalogQueryRange
 * @class
 * @param attributeName {String} The name of the attribute to be searched.
 */
var exports = function(attributeName) {
  var _this = this;

  _this['attribute_name'] = attributeName;


};

/**
 * Constructs a <code>CatalogQueryRange</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogQueryRange} obj Optional instance to populate.
 * @return {module:model/CatalogQueryRange} The populated <code>CatalogQueryRange</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('attribute_name')) {
      obj['attribute_name'] = ApiClient.convertToType(data['attribute_name'], 'String');
    }
      if (data.hasOwnProperty('attribute_min_value')) {
      obj['attribute_min_value'] = ApiClient.convertToType(data['attribute_min_value'], 'Number');
    }
      if (data.hasOwnProperty('attribute_max_value')) {
      obj['attribute_max_value'] = ApiClient.convertToType(data['attribute_max_value'], 'Number');
    }
    }
  return obj;
}

/**
 * The name of the attribute to be searched.
 * @member {String} attribute_name
 */
exports.prototype['attribute_name'] = undefined;
/**
 * The desired minimum value for the search attribute (inclusive).
 * @member {Number} attribute_min_value
 */
exports.prototype['attribute_min_value'] = undefined;
/**
 * The desired maximum value for the search attribute (inclusive).
 * @member {Number} attribute_max_value
 */
exports.prototype['attribute_max_value'] = undefined;



module.exports = exports;



