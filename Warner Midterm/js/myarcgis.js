var map;
require([
	"esri/map", 
	"esri/layers/ArcGISDynamicMapServiceLayer", 
	"esri/dijit/BasemapToggle", 
	"dojo/domReady!"
	],function(
		Map, 
		ArcGISDynamicMapServiceLayer,  
		BasemapToggle
		) {
	esriConfig.defaults.io.proxyUrl = "/proxy/";
	
	map = new Map("map", {
		basemap: "streets",
		center: [-88, 33],
		zoom: 5,
		});
	
	var toggle = new BasemapToggle({
		map: map,
		basemap: "hybrid"
	}, "BasemapToggle");
	toggle.startup();

	var temp = new ArcGISDynamicMapServiceLayer("http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer", {opacity: 0.75});
		map.addLayer(temp);	
	
	var wind = new ArcGISDynamicMapServiceLayer("http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_windspeed_offsets/MapServer", {opacity: 0.25});	
		map.addLayer(wind);
		
	var precip = new ArcGISDynamicMapServiceLayer("http://gis.ncdc.noaa.gov/arcgis/rest/services/cmb/climate_glance/MapServer/50", {opacity: 0.5});
		map.addLayer(precip);
	
	map.addLayer(temp, wind, precip, toggle);
});