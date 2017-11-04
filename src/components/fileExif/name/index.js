
import { h, render, Component } from 'preact';

import styles from '../styles.css';

class FileName extends Component {
  /**
   * Class constructor
   * @ignore
   */
  constructor() {
    super();

  }

  /**
   * Component Render function
   * @param  {Object} data component information
   */
  render(props) {
    return (
      <div class={styles.fileExif}>
        <p class={styles.fileExifName}>{props.data.name}</p>
      </div>
    );
  }
}

export default FileName;
