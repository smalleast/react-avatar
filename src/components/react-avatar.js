import './style.scss';

export default class extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    url: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    radius: PropTypes.string,
    cover: PropTypes.bool
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
    const {className, radius, title, url, cover, onClick} = this.props;
    return (
      <div
        onClick={onClick}
        style={{
          width: size.width,
          height: size.height,
          borderRadius: radius
        }} className={classNames('react-avatar', className)}>
        <img src={url} alt={title} data-cover={cover}/>
      </div>
    );
  }
}
