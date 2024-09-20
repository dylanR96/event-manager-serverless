import { TicketContext } from "../provider/myProvider";
import { useContext } from "react";

interface EventDetails {
  date: string;
  artist: string;
  local: string;
  timeFrom: string;
  timeTo: string;
  price: string;
}

type EventName = "Lasse" | "Pelle" | "Kajsa" | "Klubb";

const events: { [key in EventName]: EventDetails } = {
  Lasse: {
    date: "21 MAR",
    artist: "Lasse-Stefanz",
    local: "Kjell Härnqvistsalen",
    timeFrom: "19.00",
    timeTo: "21.00",
    price: "350 sek",
  },
  Pelle: {
    date: "29 MAR",
    artist: "Pelle trubadur",
    local: "Pubelipuben",
    timeFrom: "22.00",
    timeTo: "00.00",
    price: "110 sek",
  },
  Kajsa: {
    date: "10 APR",
    artist: "Kajsas kör",
    local: "Götaplatsen",
    timeFrom: "15.00",
    timeTo: "16.00",
    price: "99 sek",
  },
  Klubb: {
    date: "17 APR",
    artist: "Klubb Untz",
    local: "Din favoritkällare",
    timeFrom: "22.00",
    timeTo: "du tröttnar",
    price: "150 sek",
  },
};

const Ticket = () => {
  const context = useContext(TicketContext);

  const { value } = context as { value: EventName };

  const choosenEvent = events[value] || null;
  return (
    <>
      <div className="main">
        <div className="main__ticket-display">
          {choosenEvent ? (
            <>
              <div className="main__artist">
                <h4>WHAT</h4>

                <h1>{choosenEvent.artist}</h1>
              </div>
              <div className="main__local">
                <h4>WHERE</h4>
                <h2>{choosenEvent.local}</h2>
              </div>
              <div className="main__info-events">
                <div className="main__event-when">
                  <h6>WHEN</h6>

                  <h4>{choosenEvent.date}</h4>
                </div>
                <div className="main__event-from">
                  <h6>FROM</h6>
                  <h4>{choosenEvent.timeFrom}</h4>
                </div>
                <div className="main__event-to">
                  <h6>To</h6>
                  <h4>{choosenEvent.timeTo}</h4>
                </div>
              </div>
            </>
          ) : (
            <h2>No event selected</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Ticket;
