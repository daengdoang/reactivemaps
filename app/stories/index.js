import React from 'react';
import { storiesOf, addDecorator } from "@kadira/storybook";
import { withKnobs, text, number, array, object, select, boolean } from "@kadira/storybook-addon-knobs";
import { Appbase } from "appbase-js";

import GeoDistanceSliderDefault from "./GeoDistanceSlider.stories";
import GeoDistanceDropdownDefault from "./GeoDistanceDropdown.stories";
import GoogleSearchDefault from "./GoogleSearch.stories";
import ReactiveMapDefault from "./ReactiveMap.stories";

require ("../../bower_components/materialize/dist/css/materialize.min.css");
require ("../../dist/css/vendor.min.css");
require ("../../dist/css/style.min.css");

storiesOf("GeoDistanceSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", () => (
		<GeoDistanceSliderDefault
			defaultSelected={50}
			unit="mi"
			placeholder="Search Location"
		/>
	))
	.add("With Title", () => (
		<GeoDistanceSliderDefault
			defaultSelected={50}
			unit="mi"
			title="Geo Distance Search"
			placeholder="Search Location"
		/>
	))
	.add("With Range Labels", () => (
		<GeoDistanceSliderDefault
			defaultSelected={50}
			unit="mi"
			title="Geo Distance Search"
			placeholder="Search Location"
			rangeLabels={
				{
					"start": "Start",
					"end": "End"
				}
			}
		/>
	))
	.add("Playground", () => (
		<GeoDistanceSliderDefault
			defaultSelected={number("defaultSelected", 50)}
			unit={text("unit", "mi")}
			title={text("title", "Geo Distance Slider")}
			placeholder={text("placeholder", "Search Location")}
			range={object("range", {
				"start": 0,
				"end": 50
			})}
			rangeLabels={object("rangeLabels", {
				"start": "Start",
				"end": "End"
			})}
		/>
	));

storiesOf("GeoDistanceDropdown", module)
	.addDecorator(withKnobs)
	.add("Basic", () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{"start": 0, "end": 100, "label": "Less than 100 miles"},
				{"start": 101, "end": 200, "label": "Between 100 and 200 miles"},
				{"start": 201, "end": 500, "label": "Between 200 and 500 miles"},
				{"start": 501, "end": 1000, "label": "Above 500 miles"}]
			}
			// distanceOptions={[20,50,100,150]}
			placeholder="Search Location"
		/>
	))
	.add("With Title", () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{"start": 0, "end": 100, "label": "Less than 100 miles"},
				{"start": 101, "end": 200, "label": "Between 100 and 200 miles"},
				{"start": 201, "end": 500, "label": "Between 200 and 500 miles"},
				{"start": 501, "end": 1000, "label": "Above 500 miles"}]
			}
			// distanceOptions={[20,50,100,150]}
			title="Geo Distance Search"
			placeholder="Search Location"
		/>
	))
	.add("With Default Selected", () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{"start": 0, "end": 100, "label": "Less than 100 miles"},
				{"start": 101, "end": 200, "label": "Between 100 and 200 miles"},
				{"start": 201, "end": 500, "label": "Between 200 and 500 miles"},
				{"start": 501, "end": 1000, "label": "Above 500 miles"}]
			}
			defaultSelected="Between 200 and 500 miles"
			title="Geo Distance Search"
			placeholder="Search Location"
		/>
	))
	.add("Playground", () => (
		<GeoDistanceDropdownDefault
			data={
				[{"start": 0, "end": 100, "label": "Less than 100 miles"},
				{"start": 101, "end": 200, "label": "Between 100 and 200 miles"},
				{"start": 201, "end": 500, "label": "Between 200 and 500 miles"},
				{"start": 501, "end": 1000, "label": "Above 500 miles"}]
			}
			unit={text("unit", "mi")}
			title={text("title", "Geo Distance Slider")}
			defaultSelected={text("defaultSelected", "Between 200 and 500 miles")}
			placeholder={text("placeholder", "Search Location")}
		/>
	));

storiesOf("GoogleSearch", module)
	.addDecorator(withKnobs)
	.add("Basic - Direction Demo", () => (
		<GoogleSearchDefault />
	));


storiesOf("ReactiveMap", module)
	.addDecorator(withKnobs)
	.add("Basic", () => (
		<ReactiveMapDefault />
	))
	.add("With Title", () => (
		<ReactiveMapDefault
			title="Reactive Maps"
		/>
	))
	.add("With Popover onClick", () => (
		<ReactiveMapDefault
			title="Reactive Maps"
			showPopoverOn="onClick"
		/>
	))
	.add("With Popover onMouseOver", () => (
		<ReactiveMapDefault
			title="Reactive Maps"
			showPopoverOn="onMouseover"
		/>
	))
	.add("Playground", () => (
		<ReactiveMapDefault
			title={text("title", "Reactive maps")}
			showPopoverOn={select("showPopoverOn", {'onClick': 'onClick', 'onMouseover':'onMouseover'}, 'onClick')}
			markerCluster={boolean("markerCluster", true)}
			autoCenter={boolean("autoCenter", true)}
			showSearchAsMove={boolean("showSearchAsMove", true)}
			setSearchAsMove={boolean("setSearchAsMove", false)}
			showMapStyles={boolean("showMapStyles", false)}
			mapStyle={select("mapStyle", {'Standard':'Standard', 'Blue Essence':'Blue Essence', 'Blue Water':'Blue Water', 'Flat Map':'Flat Map', 'Light Monochrome':'Light Monochrome', 'Midnight Commander':'Midnight Commander', 'Unsaturated Browns':'Unsaturated Browns'}, 'Standard')}
			size={number('size', 100)}
			streamActiveTime={number("streamActiveTime", 5)}
			streamAutoCenter={boolean("streamAutoCenter", true)}
			rotateOnUpdate={boolean("rotateOnUpdate", false)}
			showMarkers={boolean("showMarkers", true)}
			clearOnEmpty={boolean("clearOnEmpty", true)}
			defaultPin={text('defaultPin', 'https://cdn.rawgit.com/appbaseio/reactivemaps/6500c73a/dist/images/historic-pin.png')}
			streamPin={text('streamPin', 'https://cdn.rawgit.com/appbaseio/reactivemaps/6500c73a/dist/images/stream-pin.png')}
		/>
	));
