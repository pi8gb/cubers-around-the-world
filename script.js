const map = L.map("map").setView([0, 0], 2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);

fetch("cubers.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.forEach(data => { 
        const marker = L.marker([data.latitude, data.longitude]).addTo(map);
        marker.bindPopup("<b>" + data.nickname + "</b><br>Main: " + data.main);
    });
  });