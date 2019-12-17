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
var V1Variation = require('./V1Variation');




/**
 * @deprecated
 * The V1UpdateVariationRequest model module.
 * @module model/V1UpdateVariationRequest
 */

/**
 * Constructs a new <code>V1UpdateVariationRequest</code>.
 *
 * @alias module:model/V1UpdateVariationRequest
 * @class
 * @param body {module:model/V1Variation} An object containing the fields to POST for the request.  See the corresponding object definition for field details.
 */
var exports = function(body) {
  var _this = this;

  _this['body'] = body;
};

/**
 * Constructs a <code>V1UpdateVariationRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1UpdateVariationRequest} obj Optional instance to populate.
 * @return {module:model/V1UpdateVariationRequest} The populated <code>V1UpdateVariationRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
      obj['body'] = V1Variation.constructFromObject(data['body']);
    }
    }
  return obj;
}

/**
 * An object containing the fields to POST for the request.  See the corresponding object definition for field details.
 * @member {module:model/V1Variation} body
 */
exports.prototype['body'] = undefined;



module.exports = exports;



