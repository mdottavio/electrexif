
import { h, render, Component } from 'preact';

import styles from '../styles.css';

class FileDataDimensions extends Component {
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
      <div class={styles.fileExifDataSize}>
        width: {props.data.getTag('PixelYDimension') ? `${props.data.getTag('PixelYDimension').value}px` : '-'},
        height: {props.data.getTag('PixelXDimension') ? `${props.data.getTag('PixelXDimension').value}px` : '-'}
      </div>
    );
  }
}

export default FileDataDimensions;
