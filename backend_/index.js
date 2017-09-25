const express = require('./config/express');
require('./config/database');
require('./config/routes')(express);