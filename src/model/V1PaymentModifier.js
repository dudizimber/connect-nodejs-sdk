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
var V1Money = require('./V1Money');




/**
 * The V1PaymentModifier model module.
 * @module model/V1PaymentModifier
 */

/**
 * Constructs a new <code>V1PaymentModifier</code>.
 * V1PaymentModifier
 * @alias module:model/V1PaymentModifier
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>V1PaymentModifier</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1PaymentModifier} obj Optional instance to populate.
 * @return {module:model/V1PaymentModifier} The populated <code>V1PaymentModifier</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = V1Money.constructFromObject(data['applied_money']);
    }
      if (data.hasOwnProperty('modifier_option_id')) {
      obj['modifier_option_id'] = ApiClient.convertToType(data['modifier_option_id'], 'String');
    }
    }
  return obj;
}

/**
 * The modifier option's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The amount of money that this modifier option adds to the payment.
 * @member {module:model/V1Money} applied_money
 */
exports.prototype['applied_money'] = undefined;
/**
 * TThe ID of the applied modifier option, if available. Modifier options applied in older versions of Square Register might not have an ID.
 * @member {String} modifier_option_id
 */
exports.prototype['modifier_option_id'] = undefined;



module.exports = exports;



