const dnsHelper = require("../utils/dnsHelper");
const ipInfoHelper = require("../utils/ipinfoHelper");

async function IPController(req, res) {
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {
    const ipDetails = await ipInfoHelper.getIPDetail(clientIP);
    res.json(ipDetails);
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).send('Bir hata oluştu.');
  }
}

async function searchDomain(req, res) {
  const domain = req.body.domain;

  try {
    console.log("1. Domain:", domain);
    
    const ips = await dnsHelper.resolveDomainToIPs(domain);
    console.log("2. IPs:", ips);

    const ipDetails = await ipInfoHelper.getIPDetail(ips);
    console.log("3. IP Details:", ipDetails);

    res.json({ domain, ipDetails });
  } catch (error) {
    console.error('Hata:', error);
    
    console.log("1. Domain (Error Case):", domain);
    
    const ips = await dnsHelper.resolveDomainToIPs(domain);
    console.log("2. IPs (Error Case):", ips);

    const ipDetails = await ipInfoHelper.getIPDetail(ips);
    console.log("3. IP Details (Error Case):", ipDetails);

    res.status(500).send('Bir hata oluştu.');
  }
}

module.exports = {
  IPController,
  searchDomain
};
