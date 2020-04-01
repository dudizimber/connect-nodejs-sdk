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
var Money = require('./Money');




/**
 * @deprecated
 * The AdditionalRecipientReceivableRefund model module.
 * @module model/AdditionalRecipientReceivableRefund
 */

/**
 * Constructs a new <code>AdditionalRecipientReceivableRefund</code>.
 * A refund of an [AdditionalRecipientReceivable](#type-additionalrecipientreceivable). This includes the ID of the additional recipient receivable associated to this object, as well as a reference to the [Refund](#type-refund) that created this receivable refund.
 * @alias module:model/AdditionalRecipientReceivableRefund
 * @class
 * @param id {String} The receivable refund's unique ID, issued by Square payments servers.
 * @param receivableId {String} The ID of the receivable that the refund was applied to.
 * @param refundId {String} The ID of the refund that is associated to this receivable refund.
 * @param transactionLocationId {String} The ID of the location that created the receivable. This is the location ID on the associated transaction.
 * @param amountMoney {module:model/Money} The amount of the refund. This will always be non-negative.
 */
var exports = function(id, receivableId, refundId, transactionLocationId, amountMoney) {
  var _this = this;

  _this['id'] = id;
  _this['receivable_id'] = receivableId;
  _this['refund_id'] = refundId;
  _this['transaction_location_id'] = transactionLocationId;
  _this['amount_money'] = amountMoney;

};

/**
 * Constructs a <code>AdditionalRecipientReceivableRefund</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AdditionalRecipientReceivableRefund} obj Optional instance to populate.
 * @return {module:model/AdditionalRecipientReceivableRefund} The populated <code>AdditionalRecipientReceivableRefund</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('receivable_id')) {
      obj['receivable_id'] = ApiClient.convertToType(data['receivable_id'], 'String');
    }
      if (data.hasOwnProperty('refund_id')) {
      obj['refund_id'] = ApiClient.convertToType(data['refund_id'], 'String');
    }
      if (data.hasOwnProperty('transaction_location_id')) {
      obj['transaction_location_id'] = ApiClient.convertToType(data['transaction_location_id'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
    }
  return obj;
}

/**
 * The receivable refund's unique ID, issued by Square payments servers.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The ID of the receivable that the refund was applied to.
 * @member {String} receivable_id
 */
exports.prototype['receivable_id'] = undefined;
/**
 * The ID of the refund that is associated to this receivable refund.
 * @member {String} refund_id
 */
exports.prototype['refund_id'] = undefined;
/**
 * The ID of the location that created the receivable. This is the location ID on the associated transaction.
 * @member {String} transaction_location_id
 */
exports.prototype['transaction_location_id'] = undefined;
/**
 * The amount of the refund. This will always be non-negative.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * The time when the refund was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;



module.exports = exports;



