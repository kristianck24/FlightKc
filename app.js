const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08:11",
    destination: "FINLAND",
    flight: "FN 244",
    gate: "A 01",
    remarks: "ON TIME",
  },
  {
    time: "07:34",
    destination: "CANADA",
    flight: "CA 345",
    gate: "K 34",
    remarks: "ON TIME",
  },
  {
    time: "14:23",
    destination: "MEXICO",
    flight: "MX 654",
    gate: "C 23",
    remarks: "ON TIME",
  },
  {
    time: "16:50",
    destination: "GERMANY",
    flight: "GR 675",
    gate: "R 43",
    remarks: "ON TIME",
  },
  {
    time: "20:25",
    destination: "CHICAGO",
    flight: "CH 892",
    gate: "D 00",
    remarks: "ON TIME",
  },
];

function populatedTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");
      console.log(
        "🚀 ~ file: app.js:47 ~ populatedTable ~ flightDetail",
        flightDetail
        );
        tableCell.innerText = flight[flightDetail];
        
        tableRow.appendChild(tableCell);

    }
    tableBody.append(tableRow);
  }
}

populatedTable();
