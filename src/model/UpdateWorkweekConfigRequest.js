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
var WorkweekConfig = require('./WorkweekConfig');




/**
 * The UpdateWorkweekConfigRequest model module.
 * @module model/UpdateWorkweekConfigRequest
 */

/**
 * Constructs a new <code>UpdateWorkweekConfigRequest</code>.
 * A request to update a &#x60;WorkweekConfig&#x60; object
 * @alias module:model/UpdateWorkweekConfigRequest
 * @class
 * @param workweekConfig {module:model/WorkweekConfig} The updated `WorkweekConfig` object.
 */
var exports = function(workweekConfig) {
  var _this = this;

  _this['workweek_config'] = workweekConfig;
};

/**
 * Constructs a <code>UpdateWorkweekConfigRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpdateWorkweekConfigRequest} obj Optional instance to populate.
 * @return {module:model/UpdateWorkweekConfigRequest} The populated <code>UpdateWorkweekConfigRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    //obj = obj || new exports();
 obj = obj || {};

      if (data.hasOwnProperty('workweek_config')) {
      obj['workweek_config'] = WorkweekConfig.constructFromObject(data['workweek_config']);
    }
    }
  return obj;
}

/**
 * The updated `WorkweekConfig` object.
 * @member {module:model/WorkweekConfig} workweek_config
 */
exports.prototype['workweek_config'] = undefined;



module.exports = exports;



