
import { h, render, Component } from 'preact';
import styles from './styles.css';

class DragBox extends Component {
  /**
   * Class constructor
   * @ignore
   */
  constructor() {
    super();

    this.state = {
      isDragging: false,
      files: [],
    };
    this.startDragging = this.startDragging.bind(this);
    this.stopDragging = this.stopDragging.bind(this);
  }

  /**
   * Start the dragging event; prevent dafault actions and
   * set the dragging flag;
   * @param  {Object} e Drag event.
   */
  startDragging(e) {
    e.preventDefault();
		e.stopPropagation();
    this.setState({
      isDragging: true
    });
  }


  /**
   * Stop the dragging event; prevent dafault actions and
   * set the dragging flag;
   * @param  {Object} e Drag event.
   */
  stopDragging(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      isDragging: false
    });
  }

  /**
   * Component Render function
   * @param  {Object} props
   * @property {Function} onChange action to be fired when the user drop a file.
   */
  render(props) {
    return (
      <div class={styles.box + (this.state.isDragging ? ' ' + styles.dragging : '')}
        ondragover={this.startDragging}
        ondragenter={this.startDragging}
        ondragleave={this.stopDragging}
        ondragend={this.stopDragging}
        ondrop={(e)=> {
          this.stopDragging(e);
          props.onChange(e.dataTransfer.files);
        }}>
        <p class={styles.boxText}>
          {(props.error) ? 'No exif information found. Drop another file':'Drop your files here.'}
        </p>

      </div>
    );
  }
}

export default DragBox;
