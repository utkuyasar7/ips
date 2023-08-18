<<<<<<< HEAD
const apiUrl = "https://ipinfo.io";

=======


const apiUrl = "https://ipinfo.io";

>>>>>>> ca93057544740ffbfcc5c1f1bf4521c783fcbeb2
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
<<<<<<< HEAD
};
=======
};
>>>>>>> ca93057544740ffbfcc5c1f1bf4521c783fcbeb2
