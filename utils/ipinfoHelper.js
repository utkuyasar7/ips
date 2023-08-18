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
  
       return{
        ip : promise.ip,
        city : promise.city,
        country : promise.country,
        org : promise.org
    } 
  }
  
  module.exports = {
    getIPDetail
  };
