NEO (use NASA Api instead of scraping)
	-[] default NEO 99942 Apophis hard coded
	-[] countdown timer to the next NEO 
	(countdown timer: https://www.youtube.com/watch?v=dtKciwk_si4&t=20s)- an API is used at end of video too
	-[] Use NASA API for data: 
	https://data.nasa.gov/apis?id=r588-f7pr
	https://api.nasa.gov/#:~:text=NeoWs%20(Near%20Earth%20Object%20Web,browse%20the%20overall%20data%2Dset.
	-[] displays NEO: NAME / SIZE / DISTANCE (on closest approach)/ DATE & TIME (on closest approach)
	-[] has images that adjust and provide close approach distance and size representation
	-[] Earth, Moon, and Astroid visual to show the astroids closest approach to earth (lunar miss_distance)
	-[] Astroid min(solid) - max(transparent) est size compared to a known object (eg football stadium)
	-[] Add RedLight toggle for better night sky viewing option

Lunar Distance (Earth-Moon distance)
https://en.wikipedia.org/wiki/Lunar_distance_(astronomy)


Transpiling SCSS into CSS
	https://code.visualstudio.com/docs/languages/css#_transpiling-sass-and-less-into-css


Data-set: All the data is from the NASA JPL Asteroid team (http://neo.jpl.nasa.gov/).
This API is maintained by SpaceRocks Team: David Greenfield, Arezu Sarvestani, Jason English and Peter Baunach.

https://api.nasa.gov/#:~:text=NeoWs%20(Near%20Earth%20Object%20Web,browse%20the%20overall%20data%2Dset.
GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY