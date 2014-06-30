'use strict';

module.exports = {
  env: 'production',
  ip:   process.env.OPENSHIFT_NODEJS_IP ||
        process.env.IP ||
        '0.0.0.0',
  port: process.env.OPENSHIFT_NODEJS_PORT ||
        process.env.PORT ||
        8080,
  mongo: {
    uri: 'mongodb://<dbuser>:<dbpassword>@ds047948.mongolab.com:47948/tableapp',
    options: {
      user: 'tableappUser1',
      pass: 'tablepass123'
    }
  }
};
