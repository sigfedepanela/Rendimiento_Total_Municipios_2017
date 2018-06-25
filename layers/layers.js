var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_MunicipiosProductoresdePaneladeColombia_1 = new ol.format.GeoJSON();
var features_MunicipiosProductoresdePaneladeColombia_1 = format_MunicipiosProductoresdePaneladeColombia_1.readFeatures(json_MunicipiosProductoresdePaneladeColombia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosProductoresdePaneladeColombia_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MunicipiosProductoresdePaneladeColombia_1.addFeatures(features_MunicipiosProductoresdePaneladeColombia_1);var lyr_MunicipiosProductoresdePaneladeColombia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosProductoresdePaneladeColombia_1, 
                style: style_MunicipiosProductoresdePaneladeColombia_1,
    title: 'Municipios Productores de Panela de Colombia <br />\
    <img src="styles/legend/MunicipiosProductoresdePaneladeColombia_1_0.png" />  0 - 3 <br />\
    <img src="styles/legend/MunicipiosProductoresdePaneladeColombia_1_1.png" />  3 - 5 <br />\
    <img src="styles/legend/MunicipiosProductoresdePaneladeColombia_1_2.png" />  5 - 7 <br />\
    <img src="styles/legend/MunicipiosProductoresdePaneladeColombia_1_3.png" />  7 - 9 <br />\
    <img src="styles/legend/MunicipiosProductoresdePaneladeColombia_1_4.png" />  9 - 15 <br />'
        });var format_DepartamentosdeColombia_2 = new ol.format.GeoJSON();
var features_DepartamentosdeColombia_2 = format_DepartamentosdeColombia_2.readFeatures(json_DepartamentosdeColombia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosdeColombia_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DepartamentosdeColombia_2.addFeatures(features_DepartamentosdeColombia_2);var lyr_DepartamentosdeColombia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosdeColombia_2, 
                style: style_DepartamentosdeColombia_2,
                title: '<img src="styles/legend/DepartamentosdeColombia_2.png" /> Departamentos de Colombia'
            });var format_RendimientodeCaaPaneleraToneladasHa2017_3 = new ol.format.GeoJSON();
var features_RendimientodeCaaPaneleraToneladasHa2017_3 = format_RendimientodeCaaPaneleraToneladasHa2017_3.readFeatures(json_RendimientodeCaaPaneleraToneladasHa2017_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientodeCaaPaneleraToneladasHa2017_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RendimientodeCaaPaneleraToneladasHa2017_3.addFeatures(features_RendimientodeCaaPaneleraToneladasHa2017_3);var lyr_RendimientodeCaaPaneleraToneladasHa2017_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientodeCaaPaneleraToneladasHa2017_3, 
                style: style_RendimientodeCaaPaneleraToneladasHa2017_3,
                title: '<img src="styles/legend/RendimientodeCaaPaneleraToneladasHa2017_3.png" /> Rendimiento de Caña Panelera (Toneladas/Ha) - 2017'
            });

lyr_LimiteDepartamental_0.setVisible(true);lyr_MunicipiosProductoresdePaneladeColombia_1.setVisible(true);lyr_DepartamentosdeColombia_2.setVisible(true);lyr_RendimientodeCaaPaneleraToneladasHa2017_3.setVisible(false);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_MunicipiosProductoresdePaneladeColombia_1,lyr_DepartamentosdeColombia_2,lyr_RendimientodeCaaPaneleraToneladasHa2017_3];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'No': 'No', });
lyr_MunicipiosProductoresdePaneladeColombia_1.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'Rend.(Ton/': 'Rend.(Ton/', });
lyr_DepartamentosdeColombia_2.set('fieldAliases', {'DEPT': 'DEPT', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_RendimientodeCaaPaneleraToneladasHa2017_3.set('fieldAliases', {});
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', 'No': 'TextEdit', });
lyr_MunicipiosProductoresdePaneladeColombia_1.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'Rend.(Ton/': 'TextEdit', });
lyr_DepartamentosdeColombia_2.set('fieldImages', {'DEPT': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_RendimientodeCaaPaneleraToneladasHa2017_3.set('fieldImages', {});
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', 'No': 'inline label', });
lyr_MunicipiosProductoresdePaneladeColombia_1.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'Rend.(Ton/': 'inline label', });
lyr_DepartamentosdeColombia_2.set('fieldLabels', {'DEPT': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_RendimientodeCaaPaneleraToneladasHa2017_3.set('fieldLabels', {});
lyr_RendimientodeCaaPaneleraToneladasHa2017_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});