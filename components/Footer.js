import React from "react";
import { Container, Segment } from "semantic-ui-react";
import styles from "../css_modules/component_css/Footer.module.css";

const FixedMenuLayout = () => (
  <div>
    <Segment className={styles.segment} inverted vertical>
      <Container className={styles.container}>
        <div className={styles.left_div}>
          <div className={styles.row}>
            <h3 className={styles.row_h3}>Abbas Attarwala</h3>
            <a href="mailto:abbasmattarwala@gmail.com">
              abbasmattarwala@gmail.com
            </a>
          </div>

          <div className={styles.row}>
            <h3 className={styles.row_h3}>Prasanna Desai</h3>

            <a href="mailto:prasanna.desai01@gmail.com">
              prasanna.desai01@gmail.com
            </a>
          </div>

          <div className={styles.row}>
            <h3 className={styles.row_h3}>Taral Patel</h3>
            <a href="mailto:taralpatel1946@gmail.com">
              taralpatel1946@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.right_div}>
          <h2>Government Engineering College</h2>
          <h2>Dahod</h2>
        </div>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
