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
var BusinessHoursPeriod = require('./BusinessHoursPeriod');




/**
 * The BusinessHours model module.
 * @module model/BusinessHours
 */

/**
 * Constructs a new <code>BusinessHours</code>.
 * Represents the hours of operation for a business location.
 * @alias module:model/BusinessHours
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>BusinessHours</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BusinessHours} obj Optional instance to populate.
 * @return {module:model/BusinessHours} The populated <code>BusinessHours</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('periods')) {
      obj['periods'] = ApiClient.convertToType(data['periods'], [BusinessHoursPeriod]);
    }
    }
  return obj;
}

/**
 * The list of time periods during which the business is open. There may be at most 10 periods per day.
 * @member {Array.<module:model/BusinessHoursPeriod>} periods
 */
exports.prototype['periods'] = undefined;



module.exports = exports;



