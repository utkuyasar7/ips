

const apiUrl = "https://ipinfo.io";


async function getIPDetail(ip) {
  const url = `${apiUrl}/${ip}/json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();

    return {
      ip: data.ip,
      city: data.city,
      country: data.country,
      org: data.org
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getIPDetail

};
