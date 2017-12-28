
import { h, render, Component } from 'preact';

import styles from '../styles.css';

class FilePreview extends Component {
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
        <img src={props.data.location} class={styles.previewIMG}/>
      </div>
    );
  }
}

export default FilePreview;
