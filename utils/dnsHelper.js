const dns = require('dns');

async function resolveDomainToIPs(domain) {
  return new Promise((resolve, reject) => {
    dns.resolve(domain, 'A', (err, addresses) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(addresses);
    });
  });
}




module.exports = {
  resolveDomainToIPs,

};
