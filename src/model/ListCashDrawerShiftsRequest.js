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
 * The ListCashDrawerShiftsRequest model module.
 * @module model/ListCashDrawerShiftsRequest
 */

/**
 * Constructs a new <code>ListCashDrawerShiftsRequest</code>.
 * 
 * @alias module:model/ListCashDrawerShiftsRequest
 * @class
 * @param locationId {String} The ID of the location to query for a list of cash drawer shifts.
 */
var exports = function(locationId) {
  var _this = this;

  _this['location_id'] = locationId;





};

/**
 * Constructs a <code>ListCashDrawerShiftsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListCashDrawerShiftsRequest} obj Optional instance to populate.
 * @return {module:model/ListCashDrawerShiftsRequest} The populated <code>ListCashDrawerShiftsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('sort_order')) {
      obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'String');
    }
      if (data.hasOwnProperty('begin_time')) {
      obj['begin_time'] = ApiClient.convertToType(data['begin_time'], 'String');
    }
      if (data.hasOwnProperty('end_time')) {
      obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * The ID of the location to query for a list of cash drawer shifts.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC See [SortOrder](#type-sortorder) for possible values
 * @member {String} sort_order
 */
exports.prototype['sort_order'] = undefined;
/**
 * The inclusive start time of the query on opened_at, in ISO 8601 format.
 * @member {String} begin_time
 */
exports.prototype['begin_time'] = undefined;
/**
 * The exclusive end date of the query on opened_at, in ISO 8601 format.
 * @member {String} end_time
 */
exports.prototype['end_time'] = undefined;
/**
 * Number of cash drawer shift events in a page of results (200 by default, 1000 max).
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * Opaque cursor for fetching the next page of results.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



