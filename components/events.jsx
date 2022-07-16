import React from "react";

import s from "../styles/events.module.css";

function Events({ events }) {
  return (
    <section className={s.eventsSection}>
      <div className={s.eventsTitle}>
        <h2 className={s.eventsTitleText}>Куда сходить:</h2>
      </div>
      <div className={s.eventsSectionListContainer}>
        <ul className={s.eventsSectionList}>
          {events.map((e, i) => {
            return (
              <li className={s.eventsSectionListItem} key={i}>
                <div className={s.eventsSectionListInner}>
                  <span className={s.eventsSectionListItemDate}>
                    {new Date(e.date).toLocaleDateString().slice(0, -5)}
                  </span>
                  <h4 className={s.eventsSectionListItemTitle}>{e.title}</h4>

                  <a className={s.eventsSectionListItemLink} href="#">
                    ➝
                  </a>
                </div>
                <span className={s.eventsSectionListItemTime}>
                  {e.time_start}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Events;
