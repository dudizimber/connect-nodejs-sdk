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
const SquareConnect = require('../../src/index');

describe('RefundPaymentRequest', function() {
  beforeEach(function() {
    this.api = new SquareConnect.RefundPaymentRequest();
  });

  it('should create an instance of RefundPaymentRequest', function() {
    // uncomment below and update the code to test RefundPaymentRequest
    //var instane = new SquareConnect.RefundPaymentRequest();
    //expect(instance).to.be.a(SquareConnect.RefundPaymentRequest);
  });

  it('should have the property idempotencyKey (base name: "idempotency_key")', function() {
    // uncomment below and update the code to test the property idempotencyKey
    //var instane = new SquareConnect.RefundPaymentRequest();
    //expect(instance).to.be();
  });
  it('should have the property amountMoney (base name: "amount_money")', function() {
    // uncomment below and update the code to test the property amountMoney
    //var instane = new SquareConnect.RefundPaymentRequest();
    //expect(instance).to.be();
  });
  it('should have the property appFeeMoney (base name: "app_fee_money")', function() {
    // uncomment below and update the code to test the property appFeeMoney
    //var instane = new SquareConnect.RefundPaymentRequest();
    //expect(instance).to.be();
  });
  it('should have the property paymentId (base name: "payment_id")', function() {
    // uncomment below and update the code to test the property paymentId
    //var instane = new SquareConnect.RefundPaymentRequest();
    //expect(instance).to.be();
  });
  it('should have the property reason (base name: "reason")', function() {
    // uncomment below and update the code to test the property reason
    //var instane = new SquareConnect.RefundPaymentRequest();
    //expect(instance).to.be();
  });
});
