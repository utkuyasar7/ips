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
    console.log(ips)
    const ipDetails = await ipInfoHelper.getIPDetail(ips);
    

    res.json({ domain, ipDetails });
  } catch (error) {
    console.error('Hata:', error);
    
    console.log("1. Domain (Error Case):", domain);
    
    const ips = await dnsHelper.resolveDomainToIPs(domain);
    

    const ipDetails = await ipInfoHelper.getIPDetail(ips);
    

    res.status(500).send({domain,ipDetails});
  }
}

module.exports = {
  IPController,
  searchDomain
};
