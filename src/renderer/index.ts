import { Group, PlainText } from '../../LiteLoaderQQNT-Euphony/src/index.js';

export const onSettingWindowCreated = (view: HTMLElement) => {
  console.log('Setting window has just been created');

  let clickCount = 0;
  const domParser = new DOMParser();
  const doms = domParser.parseFromString([
    '<div>',
    '<h1>Hello world!</h1>',
    '<button id="template-count">Count: 0</button>',
    '<button id="template-greet">Greet as Misa</button>',
    '</div>',
  ].join(''), 'text/html');

  (doms.body.querySelector('#template-count') as HTMLButtonElement).addEventListener('click', (e) => {
    clickCount++;
    (e.target as HTMLButtonElement).innerHTML = `Count: ${clickCount}`;
  });

  (doms.body.querySelector('#template-greet') as HTMLButtonElement).addEventListener('click', () => {
    sakamichi_msg_bot.greeting('Misa');
    const group = Group.make(233755438);
    group.sendMessage(new PlainText('test'));
  });

  doms.body.childNodes.forEach((dom) => {
    view.appendChild(dom);
  });
};