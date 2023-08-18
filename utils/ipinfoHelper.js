const apiUrl = "https://ipinfo.io"

function getIPDetail(ip) {
    const url = `${apiUrl}/${ip}/json`;
  
    const promise = fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
      });
  
    return promise;
  }
  
  module.exports = {
    getIPDetail
  };