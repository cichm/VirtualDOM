import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';

const createVApp = (count) => createElement('div', {
    attrs: {
        id: 'app',
        dataCount: count,
    },
    children: [
        String(count),
        createElement('img', {
            attrs: {
                src: 'https://media.giphy.com/media/3o6fJfwuo2xIb2rHc4/giphy.gif'
            }
        })
    ],
});

let count = 0;
let vApp = createVApp(count);
const $app = render(vApp);

let $rootElement = mount($app, document.getElementById('app'));

setInterval(() => {
    const vNewApp = createVApp(Math.floor(Math.random() * 10));
    const patch = diff(vApp, vNewApp);
    $rootElement = patch($rootElement);
    vApp = vNewApp;
}, 1000);