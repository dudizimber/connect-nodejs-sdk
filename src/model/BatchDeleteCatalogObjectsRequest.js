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
 * The BatchDeleteCatalogObjectsRequest model module.
 * @module model/BatchDeleteCatalogObjectsRequest
 */

/**
 * Constructs a new <code>BatchDeleteCatalogObjectsRequest</code>.
 * 
 * @alias module:model/BatchDeleteCatalogObjectsRequest
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>BatchDeleteCatalogObjectsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BatchDeleteCatalogObjectsRequest} obj Optional instance to populate.
 * @return {module:model/BatchDeleteCatalogObjectsRequest} The populated <code>BatchDeleteCatalogObjectsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('object_ids')) {
      obj['object_ids'] = ApiClient.convertToType(data['object_ids'], ['String']);
    }
    }
  return obj;
}

/**
 * The IDs of the CatalogObjects to be deleted. When an object is deleted, other objects in the graph that depend on that object will be deleted as well (for example, deleting a CatalogItem will delete its CatalogItemVariation.
 * @member {Array.<String>} object_ids
 */
exports.prototype['object_ids'] = undefined;



module.exports = exports;



