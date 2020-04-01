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
var V1ModifierList = require('./V1ModifierList');




/**
 * @deprecated
 * The V1CreateModifierListRequest model module.
 * @module model/V1CreateModifierListRequest
 */

/**
 * Constructs a new <code>V1CreateModifierListRequest</code>.
 * 
 * @alias module:model/V1CreateModifierListRequest
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>V1CreateModifierListRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1CreateModifierListRequest} obj Optional instance to populate.
 * @return {module:model/V1CreateModifierListRequest} The populated <code>V1CreateModifierListRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('body')) {
      obj['body'] = V1ModifierList.constructFromObject(data['body']);
    }
    }
  return obj;
}

/**
 * An object containing the fields to POST for the request.  See the corresponding object definition for field details.
 * @member {module:model/V1ModifierList} body
 */
exports.prototype['body'] = undefined;



module.exports = exports;



