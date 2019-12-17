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
var TimeRange = require('./TimeRange');




/**
 * The SearchOrdersDateTimeFilter model module.
 * @module model/SearchOrdersDateTimeFilter
 */

/**
 * Constructs a new <code>SearchOrdersDateTimeFilter</code>.
 * Filter for &#x60;Order&#x60; objects based on whether their &#x60;CREATED_AT&#x60;, &#x60;CLOSED_AT&#x60; or &#x60;UPDATED_AT&#x60; timestamps fall within a specified time range. You can specify the time range and which timestamp to filter for. You can filter for only one time range at a time.  For each time range, the start time and end time are inclusive. If the end time is absent, it defaults to the time of the first request for the cursor.  __Important:__ If you use the DateTimeFilter in a SearchOrders query, you must also set the &#x60;sort_field&#x60; in [OrdersSort](#type-searchorderordersort) to the same field you filter for. For example, if you set the &#x60;CLOSED_AT&#x60; field in DateTimeFilter, you must also set the &#x60;sort_field&#x60; in SearchOrdersSort to &#x60;CLOSED_AT&#x60;. Otherwise, SearchOrders will throw an error. [Learn more about filtering orders by time range](/orders-api/manage-orders#important-note-on-filtering-orders-by-time-range).
 * @alias module:model/SearchOrdersDateTimeFilter
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>SearchOrdersDateTimeFilter</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchOrdersDateTimeFilter} obj Optional instance to populate.
 * @return {module:model/SearchOrdersDateTimeFilter} The populated <code>SearchOrdersDateTimeFilter</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = TimeRange.constructFromObject(data['created_at']);
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = TimeRange.constructFromObject(data['updated_at']);
    }
      if (data.hasOwnProperty('closed_at')) {
      obj['closed_at'] = TimeRange.constructFromObject(data['closed_at']);
    }
    }
  return obj;
}

/**
 * Time range for filtering on the `created_at` timestamp. If you use this value, you must also set the `sort_field` in the OrdersSearchSort object to `CREATED_AT`.
 * @member {module:model/TimeRange} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * Time range for filtering on the `updated_at` timestamp. If you use this value, you must also set the `sort_field` in the OrdersSearchSort object to `UPDATED_AT`.
 * @member {module:model/TimeRange} updated_at
 */
exports.prototype['updated_at'] = undefined;
/**
 * Time range for filtering on the `closed_at` timestamp. If you use this value, you must also set the `sort_field` in the OrdersSearchSort object to `CLOSED_AT`.
 * @member {module:model/TimeRange} closed_at
 */
exports.prototype['closed_at'] = undefined;



module.exports = exports;



