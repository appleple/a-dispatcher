/**
 * 正規表現URLディスパッチ
 */
export default class UrlDispatcher {
    constructor() {
        this.routes = [];
    }

    addRoute(path, func) {
        this.routes.push([path, func]);
    }

    run(path) {
        for (let i = 0; i < this.routes.length; ++i) {
        const func = this.routes[i];
        const match = path.match(func[0]);

        match && func[1](match);
        }
    }
}