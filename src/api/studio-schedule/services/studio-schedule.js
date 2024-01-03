'use strict';

/**
 * studio-schedule service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::studio-schedule.studio-schedule');
