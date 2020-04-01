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
var Error = require('./Error');
var V1Money = require('./V1Money');
var V1OrderHistoryEntry = require('./V1OrderHistoryEntry');
var V1Tender = require('./V1Tender');




/**
 * The V1Order model module.
 * @module model/V1Order
 */

/**
 * Constructs a new <code>V1Order</code>.
 * V1Order
 * @alias module:model/V1Order
 * @class
 */
var exports = function() {
  var _this = this;


























};

/**
 * Constructs a <code>V1Order</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Order} obj Optional instance to populate.
 * @return {module:model/V1Order} The populated <code>V1Order</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('buyer_email')) {
      obj['buyer_email'] = ApiClient.convertToType(data['buyer_email'], 'String');
    }
      if (data.hasOwnProperty('recipient_name')) {
      obj['recipient_name'] = ApiClient.convertToType(data['recipient_name'], 'String');
    }
      if (data.hasOwnProperty('recipient_phone_number')) {
      obj['recipient_phone_number'] = ApiClient.convertToType(data['recipient_phone_number'], 'String');
    }
      if (data.hasOwnProperty('state')) {
      obj['state'] = ApiClient.convertToType(data['state'], 'String');
    }
      if (data.hasOwnProperty('shipping_address')) {
      obj['shipping_address'] = Address.constructFromObject(data['shipping_address']);
    }
      if (data.hasOwnProperty('subtotal_money')) {
      obj['subtotal_money'] = V1Money.constructFromObject(data['subtotal_money']);
    }
      if (data.hasOwnProperty('total_shipping_money')) {
      obj['total_shipping_money'] = V1Money.constructFromObject(data['total_shipping_money']);
    }
      if (data.hasOwnProperty('total_tax_money')) {
      obj['total_tax_money'] = V1Money.constructFromObject(data['total_tax_money']);
    }
      if (data.hasOwnProperty('total_price_money')) {
      obj['total_price_money'] = V1Money.constructFromObject(data['total_price_money']);
    }
      if (data.hasOwnProperty('total_discount_money')) {
      obj['total_discount_money'] = V1Money.constructFromObject(data['total_discount_money']);
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
      if (data.hasOwnProperty('expires_at')) {
      obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
    }
      if (data.hasOwnProperty('payment_id')) {
      obj['payment_id'] = ApiClient.convertToType(data['payment_id'], 'String');
    }
      if (data.hasOwnProperty('buyer_note')) {
      obj['buyer_note'] = ApiClient.convertToType(data['buyer_note'], 'String');
    }
      if (data.hasOwnProperty('completed_note')) {
      obj['completed_note'] = ApiClient.convertToType(data['completed_note'], 'String');
    }
      if (data.hasOwnProperty('refunded_note')) {
      obj['refunded_note'] = ApiClient.convertToType(data['refunded_note'], 'String');
    }
      if (data.hasOwnProperty('canceled_note')) {
      obj['canceled_note'] = ApiClient.convertToType(data['canceled_note'], 'String');
    }
      if (data.hasOwnProperty('tender')) {
      obj['tender'] = V1Tender.constructFromObject(data['tender']);
    }
      if (data.hasOwnProperty('order_history')) {
      obj['order_history'] = ApiClient.convertToType(data['order_history'], [V1OrderHistoryEntry]);
    }
      if (data.hasOwnProperty('promo_code')) {
      obj['promo_code'] = ApiClient.convertToType(data['promo_code'], 'String');
    }
      if (data.hasOwnProperty('btc_receive_address')) {
      obj['btc_receive_address'] = ApiClient.convertToType(data['btc_receive_address'], 'String');
    }
      if (data.hasOwnProperty('btc_price_satoshi')) {
      obj['btc_price_satoshi'] = ApiClient.convertToType(data['btc_price_satoshi'], 'Number');
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The order's unique identifier.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The email address of the order's buyer.
 * @member {String} buyer_email
 */
exports.prototype['buyer_email'] = undefined;
/**
 * The name of the order's buyer.
 * @member {String} recipient_name
 */
exports.prototype['recipient_name'] = undefined;
/**
 * The phone number to use for the order's delivery.
 * @member {String} recipient_phone_number
 */
exports.prototype['recipient_phone_number'] = undefined;
/**
 * Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. See [V1OrderState](#type-v1orderstate) for possible values
 * @member {String} state
 */
exports.prototype['state'] = undefined;
/**
 * The address to ship the order to.
 * @member {module:model/Address} shipping_address
 */
exports.prototype['shipping_address'] = undefined;
/**
 * The amount of all items purchased in the order, before taxes and shipping.
 * @member {module:model/V1Money} subtotal_money
 */
exports.prototype['subtotal_money'] = undefined;
/**
 * The shipping cost for the order.
 * @member {module:model/V1Money} total_shipping_money
 */
exports.prototype['total_shipping_money'] = undefined;
/**
 * The total of all taxes applied to the order.
 * @member {module:model/V1Money} total_tax_money
 */
exports.prototype['total_tax_money'] = undefined;
/**
 * The total cost of the order.
 * @member {module:model/V1Money} total_price_money
 */
exports.prototype['total_price_money'] = undefined;
/**
 * The total of all discounts applied to the order.
 * @member {module:model/V1Money} total_discount_money
 */
exports.prototype['total_discount_money'] = undefined;
/**
 * The time when the order was created, in ISO 8601 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The time when the order was last modified, in ISO 8601 format.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;
/**
 * The time when the order expires if no action is taken, in ISO 8601 format.
 * @member {String} expires_at
 */
exports.prototype['expires_at'] = undefined;
/**
 * The unique identifier of the payment associated with the order.
 * @member {String} payment_id
 */
exports.prototype['payment_id'] = undefined;
/**
 * A note provided by the buyer when the order was created, if any.
 * @member {String} buyer_note
 */
exports.prototype['buyer_note'] = undefined;
/**
 * A note provided by the merchant when the order's state was set to COMPLETED, if any
 * @member {String} completed_note
 */
exports.prototype['completed_note'] = undefined;
/**
 * A note provided by the merchant when the order's state was set to REFUNDED, if any.
 * @member {String} refunded_note
 */
exports.prototype['refunded_note'] = undefined;
/**
 * A note provided by the merchant when the order's state was set to CANCELED, if any.
 * @member {String} canceled_note
 */
exports.prototype['canceled_note'] = undefined;
/**
 * The tender used to pay for the order.
 * @member {module:model/V1Tender} tender
 */
exports.prototype['tender'] = undefined;
/**
 * The history of actions associated with the order.
 * @member {Array.<module:model/V1OrderHistoryEntry>} order_history
 */
exports.prototype['order_history'] = undefined;
/**
 * The promo code provided by the buyer, if any.
 * @member {String} promo_code
 */
exports.prototype['promo_code'] = undefined;
/**
 * For Bitcoin transactions, the address that the buyer sent Bitcoin to.
 * @member {String} btc_receive_address
 */
exports.prototype['btc_receive_address'] = undefined;
/**
 * For Bitcoin transactions, the price of the buyer's order in satoshi (100 million satoshi equals 1 BTC).
 * @member {Number} btc_price_satoshi
 */
exports.prototype['btc_price_satoshi'] = undefined;



module.exports = exports;



