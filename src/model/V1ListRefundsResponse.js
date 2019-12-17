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
var V1Refund = require('./V1Refund');




/**
 * The V1ListRefundsResponse model module.
 * @module model/V1ListRefundsResponse
 */

/**
 * Constructs a new <code>V1ListRefundsResponse</code>.
 *
 * @alias module:model/V1ListRefundsResponse
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>V1ListRefundsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1ListRefundsResponse} obj Optional instance to populate.
 * @return {module:model/V1ListRefundsResponse} The populated <code>V1ListRefundsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
      obj['items'] = ApiClient.convertToType(data['items'], [V1Refund]);
    }
    }
  return obj;
}

/**
 *
 * @member {Array.<module:model/V1Refund>} items
 */
exports.prototype['items'] = undefined;



module.exports = exports;



