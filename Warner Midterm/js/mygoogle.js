var map;
function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: {lat: 40, lng: -105}
	});

	var sst = new google.maps.KmlLayer({
		url:'http://droughtmonitor.unl.edu/data/kmz/usdm_current.kmz',
		map: map,
		preserveViewport: true
	});
	sst.setMap(map);
	
	var temp = new google.maps.KmlLayer({
		url:'http://www.srh.noaa.gov/gis/kml/raws/rawslink.kml',
		map: map,
		preserveViewport: true
	});
	temp.setMap(map);
}