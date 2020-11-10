import graphicCreator from './graphic.js';
import handleServiceStatus from './services.js';
import handleServiceUptime from './service-uptime.js';
import handleIncidents from './incidents.js';
import graphicCountryCreator from './graphic-countries.js';
import handleStatus from './status-bar.js';

graphicCreator();
handleServiceStatus();
handleServiceUptime();
handleIncidents();
graphicCountryCreator();
handleStatus();



