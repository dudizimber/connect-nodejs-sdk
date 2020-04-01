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
 * The MeasurementUnitCustom model module.
 * Note: This model is in beta.
 * @module model/MeasurementUnitCustom
 */

/**
 * Constructs a new <code>MeasurementUnitCustom</code>.
 * The information needed to define a custom unit, provided by the seller.
 * @alias module:model/MeasurementUnitCustom
 * @class
 * @param name {String} The name of the custom unit, for example \"bushel\".
 * @param abbreviation {String} The abbreviation of the custom unit, such as \"bsh\" (bushel). This appears in the cart for the Point of Sale app, and in reports.
 */
var exports = function(name, abbreviation) {
  var _this = this;

  _this['name'] = name;
  _this['abbreviation'] = abbreviation;
};

/**
 * Constructs a <code>MeasurementUnitCustom</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/MeasurementUnitCustom} obj Optional instance to populate.
 * @return {module:model/MeasurementUnitCustom} The populated <code>MeasurementUnitCustom</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('abbreviation')) {
      obj['abbreviation'] = ApiClient.convertToType(data['abbreviation'], 'String');
    }
    }
  return obj;
}

/**
 * The name of the custom unit, for example \"bushel\".
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The abbreviation of the custom unit, such as \"bsh\" (bushel). This appears in the cart for the Point of Sale app, and in reports.
 * @member {String} abbreviation
 */
exports.prototype['abbreviation'] = undefined;



module.exports = exports;



