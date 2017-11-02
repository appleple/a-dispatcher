# a-dispatcher

Just a simple url-dispatcher you can use with regex

```js
import Dispatcher from 'a-dispatcher';
import User from './user-info';
import Edit from './user-info';

const dispatcher = new Dispatcher();

dispatcher.addRoute('^/user', User);

dispatcher.addRoute('^/edit', Edit);

dispatcher.run(location.pathname);
```