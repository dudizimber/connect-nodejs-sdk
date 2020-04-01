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
 * The CreateDisputeEvidenceFileRequest model module.
 * Note: This model is in beta.
 * @module model/CreateDisputeEvidenceFileRequest
 */

/**
 * Constructs a new <code>CreateDisputeEvidenceFileRequest</code>.
 * Defines parameters for a CreateDisputeEvidenceFile request.
 * @alias module:model/CreateDisputeEvidenceFileRequest
 * @class
 * @param idempotencyKey {String} Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency).
 */
var exports = function(idempotencyKey) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;


};

/**
 * Constructs a <code>CreateDisputeEvidenceFileRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateDisputeEvidenceFileRequest} obj Optional instance to populate.
 * @return {module:model/CreateDisputeEvidenceFileRequest} The populated <code>CreateDisputeEvidenceFileRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('evidence_type')) {
      obj['evidence_type'] = ApiClient.convertToType(data['evidence_type'], 'String');
    }
      if (data.hasOwnProperty('content_type')) {
      obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
    }
    }
  return obj;
}

/**
 * Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency).
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The type of evidence you are uploading. See [DisputeEvidenceType](#type-disputeevidencetype) for possible values
 * @member {String} evidence_type
 */
exports.prototype['evidence_type'] = undefined;
/**
 * The MIME type of the uploaded file. One of image/heic, image/heif, image/jpeg, application/pdf,  image/png, image/tiff.
 * @member {String} content_type
 */
exports.prototype['content_type'] = undefined;



module.exports = exports;



