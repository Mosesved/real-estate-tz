// Broker (Agent) controller

exports.registerBroker = (req, res) => {
  res.send('Broker registration endpoint');
};

exports.getBrokers = (req, res) => {
  res.send('List of brokers');
};
