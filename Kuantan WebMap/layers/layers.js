var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LaluanBasSediaAda_1 = new ol.format.GeoJSON();
var features_LaluanBasSediaAda_1 = format_LaluanBasSediaAda_1.readFeatures(json_LaluanBasSediaAda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaluanBasSediaAda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaluanBasSediaAda_1.addFeatures(features_LaluanBasSediaAda_1);
var lyr_LaluanBasSediaAda_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaluanBasSediaAda_1, 
                style: style_LaluanBasSediaAda_1,
                popuplayertitle: 'Laluan Bas Sedia Ada',
                interactive: true,
                title: '<img src="styles/legend/LaluanBasSediaAda_1.png" /> Laluan Bas Sedia Ada'
            });
var format_HentianBasSediaAda_2 = new ol.format.GeoJSON();
var features_HentianBasSediaAda_2 = format_HentianBasSediaAda_2.readFeatures(json_HentianBasSediaAda_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HentianBasSediaAda_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HentianBasSediaAda_2.addFeatures(features_HentianBasSediaAda_2);
var lyr_HentianBasSediaAda_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HentianBasSediaAda_2, 
                style: style_HentianBasSediaAda_2,
                popuplayertitle: 'Hentian Bas Sedia Ada',
                interactive: true,
                title: '<img src="styles/legend/HentianBasSediaAda_2.png" /> Hentian Bas Sedia Ada'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_LaluanBasSediaAda_1.setVisible(true);lyr_HentianBasSediaAda_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LaluanBasSediaAda_1,lyr_HentianBasSediaAda_2];
lyr_LaluanBasSediaAda_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Length': 'Shape_Length', });
lyr_HentianBasSediaAda_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Density': 'Density', 'Pedestrian': 'Pedestrian', 'AccessOKU': 'AccessOKU', 'MixedUseIn': 'MixedUseIn', 'DistanceSt': 'DistanceSt', 'DistanceJu': 'DistanceJu', 'TotalMarks': 'TotalMarks', 'Name': 'Name', 'Coordinate': 'Coordinate', 'Coordina_1': 'Coordina_1', 'Gambar': 'Gambar', });
lyr_LaluanBasSediaAda_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_HentianBasSediaAda_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Density': 'TextEdit', 'Pedestrian': 'TextEdit', 'AccessOKU': 'TextEdit', 'MixedUseIn': 'TextEdit', 'DistanceSt': 'TextEdit', 'DistanceJu': 'TextEdit', 'TotalMarks': 'TextEdit', 'Name': 'TextEdit', 'Coordinate': 'TextEdit', 'Coordina_1': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_LaluanBasSediaAda_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'no label', 'ref': 'hidden field', 'oneway': 'hidden field', 'maxspeed': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'Shape_Length': 'hidden field', });
lyr_HentianBasSediaAda_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Density': 'hidden field', 'Pedestrian': 'hidden field', 'AccessOKU': 'hidden field', 'MixedUseIn': 'hidden field', 'DistanceSt': 'hidden field', 'DistanceJu': 'hidden field', 'TotalMarks': 'hidden field', 'Name': 'no label', 'Coordinate': 'hidden field', 'Coordina_1': 'hidden field', 'Gambar': 'no label', });
lyr_HentianBasSediaAda_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});