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
 * The CustomerCreationSourceFilter model module.
 * @module model/CustomerCreationSourceFilter
 */

/**
 * Constructs a new <code>CustomerCreationSourceFilter</code>.
 * Creation source filter.  If one or more creation sources are set, customer profiles are included in, or excluded from, the result if they match at least one of the filter criteria.
 * @alias module:model/CustomerCreationSourceFilter
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CustomerCreationSourceFilter</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CustomerCreationSourceFilter} obj Optional instance to populate.
 * @return {module:model/CustomerCreationSourceFilter} The populated <code>CustomerCreationSourceFilter</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('values')) {
      obj['values'] = ApiClient.convertToType(data['values'], ['String']);
    }
      if (data.hasOwnProperty('rule')) {
      obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
    }
    }
  return obj;
}

/**
 * The list of creation sources used as filtering criteria. See [CustomerCreationSource](#type-customercreationsource) for possible values
 * @member {Array.<String>} values
 */
exports.prototype['values'] = undefined;
/**
 * Indicates whether a customer profile matching the filter criteria should be included in the result or excluded from the result.  Default: `INCLUDE`. See [CustomerInclusionExclusion](#type-customerinclusionexclusion) for possible values
 * @member {String} rule
 */
exports.prototype['rule'] = undefined;



module.exports = exports;



