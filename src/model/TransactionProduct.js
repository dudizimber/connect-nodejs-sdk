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
 * Enum class TransactionProduct.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "REGISTER"
   * @const
   */
  "REGISTER": "REGISTER",
  /**
   * value: "EXTERNAL_API"
   * @const
   */
  "EXTERNAL_API": "EXTERNAL_API",
  /**
   * value: "BILLING"
   * @const
   */
  "BILLING": "BILLING",
  /**
   * value: "APPOINTMENTS"
   * @const
   */
  "APPOINTMENTS": "APPOINTMENTS",
  /**
   * value: "INVOICES"
   * @const
   */
  "INVOICES": "INVOICES",
  /**
   * value: "ONLINE_STORE"
   * @const
   */
  "ONLINE_STORE": "ONLINE_STORE",
  /**
   * value: "PAYROLL"
   * @const
   */
  "PAYROLL": "PAYROLL",
  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER"};

/**
 * Returns a <code>TransactionProduct</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/TransactionProduct} The enum <code>TransactionProduct</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


