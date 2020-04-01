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
var Address = require('./Address');




/**
 * The UpdateCustomerRequest model module.
 * @module model/UpdateCustomerRequest
 */

/**
 * Constructs a new <code>UpdateCustomerRequest</code>.
 * Defines the body parameters that can be provided in a request to the UpdateCustomer endpoint.
 * @alias module:model/UpdateCustomerRequest
 * @class
 */
var exports = function() {
  var _this = this;











};

/**
 * Constructs a <code>UpdateCustomerRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpdateCustomerRequest} obj Optional instance to populate.
 * @return {module:model/UpdateCustomerRequest} The populated <code>UpdateCustomerRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('given_name')) {
      obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
    }
      if (data.hasOwnProperty('family_name')) {
      obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
    }
      if (data.hasOwnProperty('company_name')) {
      obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
    }
      if (data.hasOwnProperty('nickname')) {
      obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
    }
      if (data.hasOwnProperty('email_address')) {
      obj['email_address'] = ApiClient.convertToType(data['email_address'], 'String');
    }
      if (data.hasOwnProperty('address')) {
      obj['address'] = Address.constructFromObject(data['address']);
    }
      if (data.hasOwnProperty('phone_number')) {
      obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('note')) {
      obj['note'] = ApiClient.convertToType(data['note'], 'String');
    }
      if (data.hasOwnProperty('birthday')) {
      obj['birthday'] = ApiClient.convertToType(data['birthday'], 'String');
    }
    }
  return obj;
}

/**
 * The given (i.e., first) name associated with the customer profile.
 * @member {String} given_name
 */
exports.prototype['given_name'] = undefined;
/**
 * The family (i.e., last) name associated with the customer profile.
 * @member {String} family_name
 */
exports.prototype['family_name'] = undefined;
/**
 * A business name associated with the customer profile.
 * @member {String} company_name
 */
exports.prototype['company_name'] = undefined;
/**
 * A nickname for the customer profile.
 * @member {String} nickname
 */
exports.prototype['nickname'] = undefined;
/**
 * The email address associated with the customer profile.
 * @member {String} email_address
 */
exports.prototype['email_address'] = undefined;
/**
 * The physical address associated with the customer profile.
 * @member {module:model/Address} address
 */
exports.prototype['address'] = undefined;
/**
 * The 11-digit phone number associated with the customer profile.
 * @member {String} phone_number
 */
exports.prototype['phone_number'] = undefined;
/**
 * An optional, second ID used to associate the customer profile with an entity in another system.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * A custom note associated with the customer profile.
 * @member {String} note
 */
exports.prototype['note'] = undefined;
/**
 * The birthday associated with the customer profile, in RFC-3339 format. Year is optional, timezone and times are not allowed. For example: `0000-09-01T00:00:00-00:00` indicates a birthday on September 1st. `1998-09-01T00:00:00-00:00` indications a birthday on September 1st __1998__.
 * @member {String} birthday
 */
exports.prototype['birthday'] = undefined;



module.exports = exports;



