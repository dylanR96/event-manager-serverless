import "./events.css";
import { useNavigate } from "react-router";

const Events = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="main__header-wrapper">
          <h1 className="main__events-header">Events</h1>
        </div>
        <div className="main__events">
          <div className="event-dates-wrapper">
            <div className="event-dates">
              <h4>21</h4>
              <h4>MAR</h4>
            </div>
            <div className="event-dates">
              <h4>29</h4>
              <h4>MAR</h4>
            </div>
            <div className="event-dates">
              <h4>10</h4>
              <h4>APR</h4>
            </div>
            <div className="event-dates">
              <h4>17</h4>
              <h4>APR</h4>
            </div>
          </div>
          <div>
            <div className="main__event-info">
              <div className="event-info-wrapper">
                <h2 className="event-artist">Lasse-Stefanz</h2>
                <h4 className="event-location">Kjell Härnqvistsalen</h4>
                <div>
                  <h4>19.00 - 21.00</h4>
                  <h4>350 sek</h4>
                </div>
                <div>
                  <button onClick={() => navigate("/app/ticket")}>Buy</button>
                </div>
              </div>
            </div>
            <div className="main__event-info">
              <div>
                <h2 className="event-artist">Pelle trubadur</h2>
                <h4 className="event-location">Pubelipuben</h4>
                <div>
                  <h4>22.00 - 00.00</h4>
                  <h4>110 sek</h4>
                </div>
                <div>
                  <button onClick={() => navigate("/app/ticket")}>Buy</button>
                </div>
              </div>
            </div>
            <div className="main__event-info">
              <div>
                <h2 className="event-artist">Kajsas kör</h2>
                <h4 className="event-location">Götaplatsen</h4>
                <div>
                  <h4>15.00 - 16.00</h4>
                  <h4>99 sek</h4>
                </div>
                <div>
                  <button onClick={() => navigate("/app/ticket")}>Buy</button>
                </div>
              </div>
            </div>
            <div className="main__event-info">
              <div>
                <h2 className="event-artist">Klubb Untz</h2>
                <h4 className="event-location">Din favoritkällare</h4>
                <div>
                  <h4>22.00 - du tröttnar</h4>
                  <h4>150 sek</h4>
                </div>
                <div>
                  <button onClick={() => navigate("/app/ticket")}>Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
