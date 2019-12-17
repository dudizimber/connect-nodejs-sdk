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
 * Enum class OrderState.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "OPEN"
   * @const
   */
  "OPEN": "OPEN",
  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED",
  /**
   * value: "CANCELED"
   * @const
   */
  "CANCELED": "CANCELED"};

/**
 * Returns a <code>OrderState</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/OrderState} The enum <code>OrderState</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


