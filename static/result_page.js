const eventIds = JSON.parse(
  new URLSearchParams(window.location.search).get("events")
);

const eventsTable = document.getElementById("eventsTable");
for (let eventId of eventIds) {
  fetch(`/events/${eventId}`).then((response) => {
    response.json().then((event) => {
      console.log("event", event);
      const association = document.createElement("div");
      association.className = "association";
      association.innerHTML = event["association"];
      eventsTable.appendChild(association);

      const description = document.createElement("div");
      description.className = "description";
      description.innerHTML = `${event["date"]}<br>${event["hours"]}<br>${event["type"]}<br>${event["description"]}`;
      eventsTable.appendChild(description);

      const linkContainer = document.createElement("div");
      linkContainer.className = "link";
      const link = document.createElement("a");
      link.href = event["link"];
      link.innerText = "LINK";
      linkContainer.appendChild(link);
      eventsTable.appendChild(linkContainer);
    });
  });
}
