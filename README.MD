#react-avatar
> Avatar for react.

## props:
| name | type | value | description |
| :----| :----| :----| :----|
| className  | string | '' | Customize css class |
| url  | string | 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg' | Image url |
| title  | string | 'My picture' | Image title |
| size  | string | '30px' | Image size(width/height) |
| radius  | string | '10px' | border radius for image |


## usage:
+ install:
```bash
npm install --save smalleast/react-avatar

```

+ code:
```javascript
import ReactAvatar from 'react-avatar';

 _alert() {
    alert('123456789')
  }

  render() {
    return (
      <div className="hello-react-avatar">
        <ReactAvatar size="50px" url="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg"
                     class-name="test1"/>
        <ReactAvatar size="80px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg" class-name="test2"/>
        <ReactAvatar size="100px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg"
                     class-name="test3"/>
        <ReactAvatar size={{width: '300px', height: '100px'}} onClick={this._alert.bind()} radius="5px"
                     url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg" class-name="test3"/>
      </div>
    );
  }
```


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
