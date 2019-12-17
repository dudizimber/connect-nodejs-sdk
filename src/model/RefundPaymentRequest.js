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
var Money = require('./Money');




/**
 * The RefundPaymentRequest model module.
 * @module model/RefundPaymentRequest
 */

/**
 * Constructs a new <code>RefundPaymentRequest</code>.
 * Refunds a payment.
 * @alias module:model/RefundPaymentRequest
 * @class
 * @param idempotencyKey {String}  A unique string that identifies this RefundPayment request. Key can be any valid string but must be unique for every RefundPayment request. For more information, see [Idempotency keys](https://developer.squareup.com/docs/working-with-apis/idempotency).
 * @param amountMoney {module:model/Money} The amount of money to refund.  Cannot be more than the `total_money` value of the payment minus the total amount of all previously completed refunds for this payment.  Must be specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents. See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.  The currency code must match the currency associated with the business that is charging the card.
 */
var exports = function(idempotencyKey, amountMoney) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;
  _this['amount_money'] = amountMoney;



};

/**
 * Constructs a <code>RefundPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RefundPaymentRequest} obj Optional instance to populate.
 * @return {module:model/RefundPaymentRequest} The populated <code>RefundPaymentRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('app_fee_money')) {
      obj['app_fee_money'] = Money.constructFromObject(data['app_fee_money']);
    }
      if (data.hasOwnProperty('payment_id')) {
      obj['payment_id'] = ApiClient.convertToType(data['payment_id'], 'String');
    }
      if (data.hasOwnProperty('reason')) {
      obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
    }
    }
  return obj;
}

/**
 *  A unique string that identifies this RefundPayment request. Key can be any valid string but must be unique for every RefundPayment request. For more information, see [Idempotency keys](https://developer.squareup.com/docs/working-with-apis/idempotency).
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The amount of money to refund.  Cannot be more than the `total_money` value of the payment minus the total amount of all previously completed refunds for this payment.  Must be specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents. See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.  The currency code must match the currency associated with the business that is charging the card.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * Amount of money the developer will contribute to help cover the refunded amount. Specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents.  Value cannot be more than the `amount_money`.  You can specify this parameter in a refund request only if the same parameter was also included when taking the payment. This is part of the application fee  scenario the API supports. For more information, see [Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees)
 * @member {module:model/Money} app_fee_money
 */
exports.prototype['app_fee_money'] = undefined;
/**
 * Unique ID of the payment being refunded.
 * @member {String} payment_id
 */
exports.prototype['payment_id'] = undefined;
/**
 * A description of the reason for the refund.
 * @member {String} reason
 */
exports.prototype['reason'] = undefined;



module.exports = exports;



