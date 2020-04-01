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
 * The V1ListEmployeeRolesRequest model module.
 * @module model/V1ListEmployeeRolesRequest
 */

/**
 * Constructs a new <code>V1ListEmployeeRolesRequest</code>.
 * 
 * @alias module:model/V1ListEmployeeRolesRequest
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>V1ListEmployeeRolesRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1ListEmployeeRolesRequest} obj Optional instance to populate.
 * @return {module:model/V1ListEmployeeRolesRequest} The populated <code>V1ListEmployeeRolesRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('order')) {
      obj['order'] = ApiClient.convertToType(data['order'], 'String');
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
      if (data.hasOwnProperty('batch_token')) {
      obj['batch_token'] = ApiClient.convertToType(data['batch_token'], 'String');
    }
    }
  return obj;
}

/**
 * The order in which employees are listed in the response, based on their created_at field.Default value: ASC See [SortOrder](#type-sortorder) for possible values
 * @member {String} order
 */
exports.prototype['order'] = undefined;
/**
 * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
 * @member {String} batch_token
 */
exports.prototype['batch_token'] = undefined;



module.exports = exports;



