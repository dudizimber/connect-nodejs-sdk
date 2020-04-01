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
var Location = require('./Location');




/**
 * The CreateLocationRequest model module.
 * Note: This model is in beta.
 * @module model/CreateLocationRequest
 */

/**
 * Constructs a new <code>CreateLocationRequest</code>.
 * Request object for the [CreateLocation](#endpoint-createlocation) endpoint.
 * @alias module:model/CreateLocationRequest
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>CreateLocationRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateLocationRequest} obj Optional instance to populate.
 * @return {module:model/CreateLocationRequest} The populated <code>CreateLocationRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('location')) {
      obj['location'] = Location.constructFromObject(data['location']);
    }
    }
  return obj;
}

/**
 * The initial values of the location being created. The `name` field is required. All other fields are optional. Unspecified fields will be set to default values using existing location data.
 * @member {module:model/Location} location
 */
exports.prototype['location'] = undefined;



module.exports = exports;



