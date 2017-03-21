import './style.scss';
import classNames from 'classnames';
export default class extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    url: React.PropTypes.string,
    title: React.PropTypes.string,
    size: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
    ]),
    radius: React.PropTypes.string,
  };

  static defaultProps = {
    radius: '100px',
    size: '32px',
    title: ''
  };

  processSize() {
    let size = this.props.size;
    if (typeof size === 'string') {
      return {
        width: size,
        height: size
      };
    }
    return size;
  }

  render() {
    const size = this.processSize(this.props.size);
    const {className, radius, title,  url, onClick} = this.props;
    return (
      <div
        onClick={onClick}
        style={{
          width: size.width,
          height: size.height,
          borderRadius: radius
        }} className={classNames('react-avatar', className)}>
        <img src={url} alt={title}/>
      </div>
    );
  }
}
