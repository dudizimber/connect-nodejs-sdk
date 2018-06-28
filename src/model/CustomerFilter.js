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
var CustomerCreationSourceFilter = require('./CustomerCreationSourceFilter');
var TimeRange = require('./TimeRange');




/**
 * The CustomerFilter model module.
 * @module model/CustomerFilter
 */

/**
 * Constructs a new <code>CustomerFilter</code>.
 * Represents a set of [&#x60;CustomerQuery&#x60;](#type-customerquery) filters used to limit the set of Customers returned by [&#x60;SearchCustomers&#x60;](#endpoint-seachcustomers).
 * @alias module:model/CustomerFilter
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>CustomerFilter</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CustomerFilter} obj Optional instance to populate.
 * @return {module:model/CustomerFilter} The populated <code>CustomerFilter</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('creation_source')) {
      obj['creation_source'] = CustomerCreationSourceFilter.constructFromObject(data['creation_source']);
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = TimeRange.constructFromObject(data['created_at']);
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = TimeRange.constructFromObject(data['updated_at']);
    }
    }
  return obj;
}

/**
 * A filter to select customers based on their creation source.
 * @member {module:model/CustomerCreationSourceFilter} creation_source
 */
exports.prototype['creation_source'] = undefined;
/**
 * A filter to select customers based on when they were created.
 * @member {module:model/TimeRange} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * A filter to select customers based on when they were updated.
 * @member {module:model/TimeRange} updated_at
 */
exports.prototype['updated_at'] = undefined;



module.exports = exports;



