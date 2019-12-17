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
 * Enum class CardBrand.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "OTHER_BRAND"
   * @const
   */
  "OTHER_BRAND": "OTHER_BRAND",
  /**
   * value: "VISA"
   * @const
   */
  "VISA": "VISA",
  /**
   * value: "MASTERCARD"
   * @const
   */
  "MASTERCARD": "MASTERCARD",
  /**
   * value: "AMERICAN_EXPRESS"
   * @const
   */
  "AMERICAN_EXPRESS": "AMERICAN_EXPRESS",
  /**
   * value: "DISCOVER"
   * @const
   */
  "DISCOVER": "DISCOVER",
  /**
   * value: "DISCOVER_DINERS"
   * @const
   */
  "DISCOVER_DINERS": "DISCOVER_DINERS",
  /**
   * value: "JCB"
   * @const
   */
  "JCB": "JCB",
  /**
   * value: "CHINA_UNIONPAY"
   * @const
   */
  "CHINA_UNIONPAY": "CHINA_UNIONPAY",
  /**
   * value: "SQUARE_GIFT_CARD"
   * @const
   */
  "SQUARE_GIFT_CARD": "SQUARE_GIFT_CARD"};

/**
 * Returns a <code>CardBrand</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/CardBrand} The enum <code>CardBrand</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


