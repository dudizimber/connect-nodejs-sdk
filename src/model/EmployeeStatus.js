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
 * Enum class EmployeeStatus.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "ACTIVE"
   * @const
   */
  "ACTIVE": "ACTIVE",
  /**
   * value: "INACTIVE"
   * @const
   */
  "INACTIVE": "INACTIVE"};

/**
 * Returns a <code>EmployeeStatus</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/EmployeeStatus} The enum <code>EmployeeStatus</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


