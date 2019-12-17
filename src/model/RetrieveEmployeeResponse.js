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
var Employee = require('./Employee');
var Error = require('./Error');




/**
 * The RetrieveEmployeeResponse model module.
 * @module model/RetrieveEmployeeResponse
 */

/**
 * Constructs a new <code>RetrieveEmployeeResponse</code>.
 *
 * @alias module:model/RetrieveEmployeeResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>RetrieveEmployeeResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveEmployeeResponse} obj Optional instance to populate.
 * @return {module:model/RetrieveEmployeeResponse} The populated <code>RetrieveEmployeeResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('employee')) {
      obj['employee'] = Employee.constructFromObject(data['employee']);
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The response object.
 * @member {module:model/Employee} employee
 */
exports.prototype['employee'] = undefined;
/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



