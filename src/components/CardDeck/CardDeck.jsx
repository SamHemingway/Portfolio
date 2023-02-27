import React from "react";
import styles from "./CardDeck.module.css";
import { Disclosure as Card } from "@headlessui/react";
import Parser from "html-react-parser";

function CardDeck({ data }) {
  const [collapsed, setCollapsed] = React.useState(true);

  function checkInnerWidth() {
    window.innerWidth > 785 ? setCollapsed(false) : setCollapsed(true);
  }

  React.useEffect(() => {
    checkInnerWidth();
    window.addEventListener("resize", checkInnerWidth);
  }, []);

  const plusIcon = (
    <svg
      viewBox="0 0 100 100"
      className={styles.icon}
    >
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="40"
        className={styles.iconCircle}
      ></ellipse>
      <path
        className={styles.iconLine}
        d="M 50 30 L 50 70"
      ></path>
      <path
        className={styles.iconLine}
        d="M 70 50 L 30 50"
      ></path>
    </svg>
  );

  const minusIcon = (
    <svg
      viewBox="0 0 100 100"
      className={styles.icon}
    >
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="40"
        className={styles.iconCircle}
      ></ellipse>
      <path
        className={styles.iconLine}
        d="M 70 50 L 30 50"
      ></path>
      <path
        className={styles.iconLine}
        d="M 70 50 L 30 50"
      ></path>
    </svg>
  );
  return (
    <ul className={styles.deck}>
      {data.map((item, index) => {
        return (
          <Card
            as="li"
            key={index}
            className={styles.card}
            defaultOpen
          >
            {({ open }) => {
              const icon = open ? minusIcon : plusIcon;
              return (
                <>
                  <Card.Button className={styles.cardTitle}>
                    {`Collapsed: ${collapsed}`}
                    {icon}
                  </Card.Button>
                  <Card.Panel className={styles.cardBody}>
                    {Parser(item.content)}
                  </Card.Panel>
                </>
              );
            }}
          </Card>
        );
      })}
    </ul>
  );
}

export default CardDeck;
