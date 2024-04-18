(function (_0x54a9b4, _0x65bda8) {
  const _0x30e70f = _0x16d8,
    _0x1c69aa = _0x54a9b4();
  while (!![]) {
    try {
      const _0x5c5274 =
        -parseInt(_0x30e70f(0xd4)) / 0x1 +
        -parseInt(_0x30e70f(0xe1)) / 0x2 +
        -parseInt(_0x30e70f(0xe4)) / 0x3 +
        -parseInt(_0x30e70f(0xe9)) / 0x4 +
        (parseInt(_0x30e70f(0xe3)) / 0x5) * (-parseInt(_0x30e70f(0xe7)) / 0x6) +
        (parseInt(_0x30e70f(0xd8)) / 0x7) * (parseInt(_0x30e70f(0xde)) / 0x8) +
        (-parseInt(_0x30e70f(0xd7)) / 0x9) * (-parseInt(_0x30e70f(0xd6)) / 0xa);
      if (_0x5c5274 === _0x65bda8) break;
      else _0x1c69aa['push'](_0x1c69aa['shift']());
    } catch (_0x1f802a) {
      _0x1c69aa['push'](_0x1c69aa['shift']());
    }
  }
})(_0x3cbe, 0xad9f5);
function _0x16d8(_0xb879f9, _0x5de867) {
  const _0x3cbecd = _0x3cbe();
  return (
    (_0x16d8 = function (_0x16d89c, _0x123df8) {
      _0x16d89c = _0x16d89c - 0xd1;
      let _0x3cf5e8 = _0x3cbecd[_0x16d89c];
      return _0x3cf5e8;
    }),
    _0x16d8(_0xb879f9, _0x5de867)
  );
}
function _0x3cbe() {
  const _0x31e962 = [
    '\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>',
    'parse',
    'getElementById',
    '3144920bAFbpz',
    '<i\x20class=\x22fa-solid\x20fa-heart\x22></i>',
    ')\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    '1111378NSpFuk',
    'push',
    '20SqNzVH',
    '2741898ZIUBqh',
    'stringify',
    '\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22prd\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
    '1028334gWrzTL',
    'getItem',
    '5510428ceuxgY',
    '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fav\x22\x20onclick=\x22addToFavs(',
    'favs',
    'prdContainer',
    'includes',
    '<i\x20class=\x22fa-regular\x20fa-heart\x22></i>',
    '543150ZAtkEI',
    'name',
    '10rgTaoy',
    '36008055qHmiUP',
    '14bhKTvf',
    'filter',
    'setItem',
  ];
  _0x3cbe = function () {
    return _0x31e962;
  };
  return _0x3cbe();
}
function render() {
  const _0x31abde = _0x16d8;
  let _0x512a12 = JSON[_0x31abde(0xdc)](
      localStorage[_0x31abde(0xe8)]('prds') || '[]'
    ),
    _0x422890 = JSON['parse'](
      localStorage[_0x31abde(0xe8)](_0x31abde(0xeb)) || '[]'
    ),
    _0x149fcf = '';
  for (let _0x341d38 = 0x0; _0x341d38 < _0x512a12['length']; _0x341d38++) {
    _0x149fcf +=
      _0x31abde(0xe6) +
      _0x512a12[_0x341d38]['picture'] +
      _0x31abde(0xdb) +
      _0x512a12[_0x341d38][_0x31abde(0xd5)] +
      _0x31abde(0xea) +
      _0x512a12[_0x341d38]['id'] +
      _0x31abde(0xe0) +
      (_0x422890['includes'](_0x512a12[_0x341d38]['id'])
        ? _0x31abde(0xdf)
        : _0x31abde(0xd3)) +
      '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
  }
  document[_0x31abde(0xdd)](_0x31abde(0xd1))['innerHTML'] = _0x149fcf;
}
function addToFavs(_0x4e5798) {
  const _0x45abf3 = _0x16d8;
  let _0x678444 = JSON[_0x45abf3(0xdc)](
    localStorage[_0x45abf3(0xe8)](_0x45abf3(0xeb)) || '[]'
  );
  if (_0x678444[_0x45abf3(0xd2)](_0x4e5798)) {
    let _0x544407 = _0x678444[_0x45abf3(0xd9)]((_0x1209fb) => {
      return _0x1209fb != _0x4e5798;
    });
    localStorage[_0x45abf3(0xda)](
      _0x45abf3(0xeb),
      JSON[_0x45abf3(0xe5)](_0x544407)
    );
  } else
    _0x678444[_0x45abf3(0xe2)](_0x4e5798),
      localStorage['setItem'](
        _0x45abf3(0xeb),
        JSON[_0x45abf3(0xe5)](_0x678444)
      );
  render();
}
render();
