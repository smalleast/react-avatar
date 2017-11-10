import './dev.scss';
import ReactAvatar from './main';


class App extends React.Component {
  _alert() {
    alert('123456789')
  }

  render() {
    return (
      <div className="hello-react-avatar">
        <ReactAvatar size="50px" url="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg"
                     className="test1"/>
        <ReactAvatar size="80px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg" className="test2"/>
        <ReactAvatar size="100px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg"
                     className="test3"/>
        <ReactAvatar size={{width: '300px', height: '100px'}} onClick={this._alert.bind()} radius="5px"
                     url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg" className="test3"/>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
