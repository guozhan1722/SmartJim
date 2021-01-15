'use strict';
const NodeHelper = require('node_helper');

const PythonShell = require('python-shell');
var pythonStarted = false
const exec = require("child_process").exec;

module.exports = NodeHelper.create({
  
  python_start: function () {
    const self = this;
    const pyshell = new PythonShell('modules/' + this.name + '/lib/mm/facerecognition.py', { mode: 'json', args: [JSON.stringify(this.config)]});

    pyshell.on('message', function (message) {
      
      if (message.hasOwnProperty('status')){
      console.log("[" + self.name + "] " + message.status);
      }
      if (message.hasOwnProperty('login')){
        console.log("[" + self.name + "] " + "User " + self.config.users[message.login.user - 1] + " with confidence " + message.login.confidence + " logged in.");
        if(message.login.user - 1 != -1){
        self.sendSocketNotification('user', {action: "login", user: message.login.user - 1, confidence: message.login.confidence});
        }
      }
      if (message.hasOwnProperty('logout')){
        console.log("[" + self.name + "] " + "User " + self.config.users[message.logout.user - 1] + " logged out.");
        self.sendSocketNotification('user', {action: "logout", user: message.logout.user - 1});
      }
      if (message.hasOwnProperty('active')){
        console.log("[" + self.name + "] " + "Monitor active " );
        exec("caffeinate -u -t 1", null);
        //self.sendSocketNotification("ACTIVATE_MONITOR", {action: "active"});
      }
      if (message.hasOwnProperty('deactive')){
        console.log("[" + self.name + "] " + "Monitor Deactive ");
        exec("pmset displaysleepnow", null);
        //self.sendSocketNotification("DEACTIVATE_MONITOR", {action: "deactive"});
      }
      if (message.hasOwnProperty('score')){
        console.log("[" + self.name + "] " + "score = " + message.score.score);
        //self.sendSocketNotification(DEACTIVATE_MONITOR, {});
      }
          
    });

    pyshell.end(function (err) {
      if (err) throw err;
      console.log("[" + self.name + "] " + 'finished running...');
    });
  },
  
  log: function (msg) {
    console.log("[" + this.name + "] " + msg);
  },

  /**
   *
   */
  activateMonitor: function () {
  },

  /**
   *
   */
  deactivateMonitor: function () {
  },

  /**
   *
   * @param resultCallback
   */
  isMonitorOn: function (resultCallback) {
  },

  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    if(notification === 'CONFIG') {
      this.config = payload
      if(!pythonStarted) {
        pythonStarted = true;
        this.python_start();
        };
    };
    if (notification === "ACTIVATE_MONITOR") {
      this.log("activating monitor.");
      this.activateMonitor();
    }

  }
  
});
