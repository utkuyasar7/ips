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

async function findDomainsWithSameIP(ipAddress) {
  return new Promise((resolve, reject) => {
    dns.reverse(ipAddress, (err, hostnames) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(hostnames);
    });
  });
}

module.exports = {
  resolveDomainToIPs,
  findDomainsWithSameIP
};
