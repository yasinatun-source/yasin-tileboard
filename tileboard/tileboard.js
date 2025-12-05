// Basit placeholder tileboard.js
// Bu dosya gerçek TileBoard çekirdeği değildir, ama hemen çalışır ve alarm simülasyonu gösterir.

(function(){
    function el(tag, cls, html){
        var e = document.createElement(tag);
        if(cls) e.className = cls;
        if(html !== undefined) e.innerHTML = html;
        return e;
    }

    function render() {
        var app = document.getElementById('app');
        app.innerHTML = '';
        var page = (CONFIG.pages && CONFIG.pages[0]) ? CONFIG.pages[0] : {title: 'Panel', tiles: []};
        var header = el('h1', null, page.title);
        app.appendChild(header);

        page.tiles.forEach(function(tile){
            if(tile.type === 'alarm') {
                var t = el('div', 'tile');
                t.appendChild(el('h2', null, tile.title || 'Alarm'));
                var state = localStorage.getItem('yasin.alarm.state') || 'disarmed';
                var stateText = state === 'armed' ? 'ARMED' : 'DISARMED';
                var st = el('div', 'state', stateText);
                t.appendChild(st);

                var armBtn = el('a', 'btn', 'Arm');
                armBtn.href = '#';
                armBtn.addEventListener('click', function(e){ e.preventDefault(); localStorage.setItem('yasin.alarm.state','armed'); render(); });

                var disBtn = el('a', 'btn warn', 'Disarm');
                disBtn.href = '#';
                disBtn.addEventListener('click', function(e){ e.preventDefault(); localStorage.setItem('yasin.alarm.state','disarmed'); render(); });

                t.appendChild(armBtn);
                t.appendChild(disBtn);

                app.appendChild(t);
            } else {
                // fallback tile
                var t = el('div', 'tile');
                t.appendChild(el('h2', null, tile.title || 'Tile'));
                app.appendChild(t);
            }
        });
    }

    window.addEventListener('DOMContentLoaded', function(){ render(); });
})();
