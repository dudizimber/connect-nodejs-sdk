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
var CatalogObjectBatch = require('./CatalogObjectBatch');




/**
 * The BatchUpsertCatalogObjectsRequest model module.
 * @module model/BatchUpsertCatalogObjectsRequest
 */

/**
 * Constructs a new <code>BatchUpsertCatalogObjectsRequest</code>.
 *
 * @alias module:model/BatchUpsertCatalogObjectsRequest
 * @class
 * @param idempotencyKey {String} A value you specify that uniquely identifies this request among all your requests. A common way to create a valid idempotency key is to use a Universally unique identifier (UUID).  If you're unsure whether a particular request was successful, you can reattempt it with the same idempotency key without worrying about creating duplicate objects.  See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
 */
var exports = function(idempotencyKey) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;

};

/**
 * Constructs a <code>BatchUpsertCatalogObjectsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BatchUpsertCatalogObjectsRequest} obj Optional instance to populate.
 * @return {module:model/BatchUpsertCatalogObjectsRequest} The populated <code>BatchUpsertCatalogObjectsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('batches')) {
      obj['batches'] = ApiClient.convertToType(data['batches'], [CatalogObjectBatch]);
    }
    }
  return obj;
}

/**
 * A value you specify that uniquely identifies this request among all your requests. A common way to create a valid idempotency key is to use a Universally unique identifier (UUID).  If you're unsure whether a particular request was successful, you can reattempt it with the same idempotency key without worrying about creating duplicate objects.  See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * A batch of CatalogObjects to be inserted/updated atomically. The objects within a batch will be inserted in an all-or-nothing fashion, i.e., if an error occurs attempting to insert or update an object within a batch, the entire batch will be rejected. However, an error in one batch will not affect other batches within the same request.  For each object, its `updated_at` field is ignored and replaced with a current [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates), and its `is_deleted` field must not be set to `true`.  To modify an existing object, supply its ID. To create a new object, use an ID starting with `#`. These IDs may be used to create relationships between an object and attributes of other objects that reference it. For example, you can create a CatalogItem with ID `#ABC` and a CatalogItemVariation with its `item_id` attribute set to `#ABC` in order to associate the CatalogItemVariation with its parent CatalogItem.  Any `#`-prefixed IDs are valid only within a single atomic batch, and will be replaced by server-generated IDs.  Each batch may contain up to 1,000 objects. The total number of objects across all batches for a single request may not exceed 10,000. If either of these limits is violated, an error will be returned and no objects will be inserted or updated.
 * @member {Array.<module:model/CatalogObjectBatch>} batches
 */
exports.prototype['batches'] = undefined;



module.exports = exports;



