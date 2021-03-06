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
 * The BreakType model module.
 * @module model/BreakType
 */

/**
 * Constructs a new <code>BreakType</code>.
 * A defined break template that sets an expectation for possible &#x60;Break&#x60;  instances on a &#x60;Shift&#x60;.
 * @alias module:model/BreakType
 * @class
 * @param locationId {String} The ID of the business location this type of break applies to.
 * @param breakName {String} A human-readable name for this type of break. Will be displayed to employees in Square products.
 * @param expectedDuration {String} Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of this break. Precision below minutes is truncated.
 * @param isPaid {Boolean} Whether this break counts towards time worked for compensation purposes.
 */
var exports = function(locationId, breakName, expectedDuration, isPaid) {
  var _this = this;


  _this['location_id'] = locationId;
  _this['break_name'] = breakName;
  _this['expected_duration'] = expectedDuration;
  _this['is_paid'] = isPaid;



};

/**
 * Constructs a <code>BreakType</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BreakType} obj Optional instance to populate.
 * @return {module:model/BreakType} The populated <code>BreakType</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('break_name')) {
      obj['break_name'] = ApiClient.convertToType(data['break_name'], 'String');
    }
      if (data.hasOwnProperty('expected_duration')) {
      obj['expected_duration'] = ApiClient.convertToType(data['expected_duration'], 'String');
    }
      if (data.hasOwnProperty('is_paid')) {
      obj['is_paid'] = ApiClient.convertToType(data['is_paid'], 'Boolean');
    }
      if (data.hasOwnProperty('version')) {
      obj['version'] = ApiClient.convertToType(data['version'], 'Number');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
    }
  return obj;
}

/**
 * UUID for this object.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the business location this type of break applies to.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * A human-readable name for this type of break. Will be displayed to employees in Square products.
 * @member {String} break_name
 */
exports.prototype['break_name'] = undefined;
/**
 * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of this break. Precision below minutes is truncated.
 * @member {String} expected_duration
 */
exports.prototype['expected_duration'] = undefined;
/**
 * Whether this break counts towards time worked for compensation purposes.
 * @member {Boolean} is_paid
 */
exports.prototype['is_paid'] = undefined;
/**
 * Used for resolving concurrency issues; request will fail if version provided does not match server version at time of request. If a value is not provided, Square's servers execute a \"blind\" write; potentially  overwriting another writer's data.
 * @member {Number} version
 */
exports.prototype['version'] = undefined;
/**
 * A read-only timestamp in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * A read-only timestamp in RFC 3339 format.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;



module.exports = exports;



