// Basit demo konfigürasyonu — gerçek alarm entity ile bağlanmaz,
// placeholder olarak UI gösterir. Daha sonra gerçek TileBoard veya tam js ile değiştirilebilir.

var CONFIG = {
    pages: [
        {
            title: "Ana Panel",
            tiles: [
                {
                    id: 'alarm',
                    title: 'Ev Alarmı',
                    type: 'alarm',
                }
            ]
        }
    ]
};
