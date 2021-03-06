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
 * Enum class BankAccountType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "CHECKING"
   * @const
   */
  "CHECKING": "CHECKING",
  /**
   * value: "SAVINGS"
   * @const
   */
  "SAVINGS": "SAVINGS",
  /**
   * value: "INVESTMENT"
   * @const
   */
  "INVESTMENT": "INVESTMENT",
  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER",
  /**
   * value: "BUSINESS_CHECKING"
   * @const
   */
  "BUSINESS_CHECKING": "BUSINESS_CHECKING"};

/**
 * Returns a <code>BankAccountType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/BankAccountType} The enum <code>BankAccountType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


