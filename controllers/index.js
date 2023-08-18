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
    const ips = await dnsHelper.resolveDomainToIPs(domain);
    const sameIpsDomains = await Promise.all(ips.map(ip => dnsHelper.findDomainsWithSameIP(ip)));
    
    res.json({ domain, ips, sameIpsDomains });
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).send('Bir hata oluştu.');
  }
}

module.exports = {
  IPController,
  searchDomain
};