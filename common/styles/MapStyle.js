export const MapStyle = {
    "version": 8,
    "name": "Light",
    "metadata": {
        "mapbox:autocomposite": true,
        "mapbox:type": "default",
        "mapbox:origin": "light-v9",
        "mapbox:groups": {
            "1444934828655.3389": {"name": "Aeroways", "collapsed": true},
            "1444933322393.2852": {
                "name": "POI labels  (scalerank 1)",
                "collapsed": true
            },
            "1444862578782.6787": {"name": "Road labels", "collapsed": true},
            "1444855786460.0557": {"name": "Roads", "collapsed": true},
            "1444934295202.7542": {
                "name": "Admin boundaries",
                "collapsed": true
            },
            "1444856151690.9143": {"name": "State labels", "collapsed": true},
            "1444933721429.3076": {"name": "Road labels", "collapsed": true},
            "1444933358918.2366": {
                "name": "POI labels (scalerank 2)",
                "collapsed": true
            },
            "1444933808272.805": {"name": "Water labels", "collapsed": true},
            "1444933372896.5967": {
                "name": "POI labels (scalerank 3)",
                "collapsed": true
            },
            "1444855799204.86": {"name": "Bridges", "collapsed": true},
            "1444856087950.3635": {"name": "Marine labels", "collapsed": true},
            "1456969573402.7817": {"name": "Hillshading", "collapsed": true},
            "1444862510685.128": {"name": "City labels", "collapsed": true},
            "1444855769305.6016": {"name": "Tunnels", "collapsed": true},
            "1456970288113.8113": {"name": "Landcover", "collapsed": false},
            "1444856144497.7825": {"name": "Country labels", "collapsed": true}
        },
        "mapbox:sdk-support": {
            "js": "0.50.0",
            "android": "6.7.0",
            "ios": "4.6.0"
        }
    },
    "center": [-1.2578354732521575, 51.75176402683286],
    "zoom": 14.70999713616552,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/erictong/cjq9kk7nscbqn2rllekokwmfq",
    "glyphs": "mapbox://fonts/erictong/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {"background-color": "hsl(161, 10%, 97%)"}
        },
        {
            "id": "parks",
            "type": "fill",
            "source": "composite",
            "source-layer": "landuse",
            "filter": ["==", "class", "park"],
            "layout": {},
            "paint": {
                "fill-color": "hsl(152, 42%, 92%)",
                "fill-opacity": {"base": 1, "stops": [[5, 0], [6, 0.75]]}
            }
        },
        {
            "id": "waterway-river-canal",
            "type": "line",
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "filter": [
                "any",
                ["==", "class", "canal"],
                ["==", "class", "river"]
            ],
            "layout": {
                "line-cap": {"base": 1, "stops": [[0, "butt"], [11, "round"]]},
                "line-join": "round"
            },
            "paint": {
                "line-color": "#cbd3d4",
                "line-width": {"base": 1.3, "stops": [[8.5, 0.1], [20, 8]]},
                "line-opacity": {"base": 1, "stops": [[8, 0], [8.5, 1]]}
            }
        },
        {
            "id": "water",
            "type": "fill",
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": {"fill-color": "hsl(202, 45%, 89%)"}
        },
        {
            "id": "road-pedestrian-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "pedestrian"],
                    ["==", "structure", "none"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[14, 2], [18, 14.5]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-gap-width": 0,
                "line-opacity": {
                    "base": 1,
                    "stops": [[6, 0], [7, 0.4], [9, 0.5], [10, 1]]
                }
            }
        },
        {
            "id": "road-street-low",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["all", ["==", "class", "street"], ["==", "structure", "none"]]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12.5, 0.5], [14, 2], [18, 18]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": {
                    "stops": [[11, 0], [11.25, 1], [14, 1], [14.01, 0]]
                }
            }
        },
        {
            "id": "road-street_limited-low",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "street_limited"],
                    ["==", "structure", "none"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12.5, 0.5], [14, 2], [18, 18]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": {
                    "stops": [[11, 0], [11.25, 1], [14, 1], [14.01, 0]]
                }
            }
        },
        {
            "id": "road-service-link-track-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "trunk_link"],
                    ["!in", "structure", "bridge", "tunnel"],
                    ["in", "class", "link", "service", "track"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-gap-width": {"base": 1.5, "stops": [[14, 0.5], [18, 12]]},
                "line-opacity": {
                    "base": 1,
                    "stops": [[6, 0], [7, 0.4], [9, 0.5], [10, 1]]
                }
            }
        },
        {
            "id": "road-street_limited-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "street_limited"],
                    ["==", "structure", "none"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[13, 0], [14, 2], [18, 18]]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [[6, 0], [7, 0.4], [9, 0.5], [10, 1]]
                }
            }
        },
        {
            "id": "road-street-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["all", ["==", "class", "street"], ["==", "structure", "none"]]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[13, 0], [14, 2], [18, 18]]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [[6, 0], [7, 0.4], [9, 0.5], [10, 1]]
                }
            }
        },
        {
            "id": "road-main-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["in", "class", "secondary", "tertiary"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.2, "stops": [[10, 0.75], [18, 2]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[8.5, 0.5], [10, 0.75], [18, 26]]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [[6, 0], [7, 0.4], [9, 0.5], [10, 1]]
                }
            }
        },
        {
            "id": "road-primary-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "class", "primary"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[5, 0.75], [16, 2]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-gap-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]},
                "line-opacity": {
                    "base": 1,
                    "stops": [[6, 0], [7, 0.4], [9, 0.5], [10, 1]]
                }
            }
        },
        {
            "id": "road-motorway_link-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "class", "motorway_link"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [[6, 0], [7, 0.4], [9, 0.5], [10, 1]]
                }
            }
        },
        {
            "id": "road-trunk_link-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "type", "trunk_link"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [[6, 0], [7, 0.4], [9, 0.5], [10, 1]]
                }
            }
        },
        {
            "id": "road-trunk-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "class", "trunk"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[7, 0.5], [10, 1], [16, 2]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[5, 0.5], [9, 1.4], [18, 32]]
                },
                "line-opacity": {"base": 1, "stops": [[6, 0], [6.1, 1]]}
            }
        },
        {
            "id": "road-motorway-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "class", "motorway"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[7, 0.5], [10, 1], [16, 2]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-gap-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]},
                "line-opacity": 1
            }
        },
        {
            "id": "road-construction",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "construction"],
                    ["==", "structure", "none"]
                ]
            ],
            "layout": {"line-join": "miter"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12.5, 0.5], [14, 2], [18, 18]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": {"base": 1, "stops": [[13.99, 0], [14, 1]]},
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [14, [0.4, 0.8]],
                        [15, [0.3, 0.6]],
                        [16, [0.2, 0.3]],
                        [17, [0.2, 0.25]],
                        [18, [0.15, 0.15]]
                    ]
                }
            }
        },
        {
            "id": "road-sidewalks",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["in", "type", "crossing", "sidewalk"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[15, 1], [18, 4]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [14, [1, 0]],
                        [15, [1.75, 1]],
                        [16, [1, 0.75]],
                        [17, [1, 0.5]]
                    ]
                },
                "line-opacity": {"base": 1, "stops": [[16, 0], [16.25, 1]]}
            }
        },
        {
            "id": "road-path",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["!in", "type", "crossing", "sidewalk", "steps"],
                    ["==", "class", "path"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[15, 1], [18, 4]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [14, [1, 0]],
                        [15, [1.75, 1]],
                        [16, [1, 0.75]],
                        [17, [1, 0.5]]
                    ]
                },
                "line-opacity": {"base": 1, "stops": [[14, 0], [14.25, 1]]}
            }
        },
        {
            "id": "road-steps",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "type", "steps"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[15, 1], [18, 4]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [14, [1, 0]],
                        [15, [1.75, 1]],
                        [16, [1, 0.75]],
                        [17, [0.3, 0.3]]
                    ]
                },
                "line-opacity": {"base": 1, "stops": [[14, 0], [14.25, 1]]}
            }
        },
        {
            "id": "road-trunk_link",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "type", "trunk_link"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "road-motorway_link",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "class", "motorway_link"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "road-pedestrian",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "pedestrian"],
                    ["==", "structure", "none"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[14, 0.5], [18, 12]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": 1,
                "line-dasharray": {
                    "base": 1,
                    "stops": [[14, [1, 0]], [15, [1.5, 0.4]], [16, [1, 0.2]]]
                }
            }
        },
        {
            "id": "road-service-link-track",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "trunk_link"],
                    ["!in", "structure", "bridge", "tunnel"],
                    ["in", "class", "link", "service", "track"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[14, 0.5], [18, 12]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                }
            }
        },
        {
            "id": "road-street_limited",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "street_limited"],
                    ["==", "structure", "none"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12.5, 0.5], [14, 2], [18, 18]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": {"base": 1, "stops": [[13.99, 0], [14, 1]]}
            }
        },
        {
            "id": "road-street",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["all", ["==", "class", "street"], ["==", "structure", "none"]]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12.5, 0.5], [14, 2], [18, 18]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": {"base": 1, "stops": [[13.99, 0], [14, 1]]}
            }
        },
        {
            "id": "road-secondary-tertiary",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["in", "class", "secondary", "tertiary"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[8.5, 0.5], [10, 0.75], [18, 26]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": {"base": 1.2, "stops": [[5, 0], [5.5, 1]]}
            }
        },
        {
            "id": "road-primary",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "class", "primary"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": {"base": 1.2, "stops": [[5, 0], [5.5, 1]]}
            }
        },
        {
            "id": "road-trunk",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 5,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "class", "trunk"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[5, 0.5], [9, 1.4], [18, 32]]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "road-motorway",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["==", "class", "motorway"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]},
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "road-rail",
            "type": "line",
            "metadata": {"mapbox:group": "1444855786460.0557"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "structure", "bridge", "tunnel"],
                    ["in", "class", "major_rail", "minor_rail"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [9, "hsl(156, 8%, 93%)"],
                        [11, "hsl(156, 11%, 94%)"]
                    ]
                },
                "line-width": {"base": 1, "stops": [[14, 0.75], [20, 1]]}
            }
        },
        {
            "id": "bridge-pedestrian-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "pedestrian"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[14, 2], [18, 14.5]]},
                "line-color": "#e8edeb",
                "line-gap-width": 0,
                "line-opacity": {"base": 1, "stops": [[13.99, 0], [14, 1]]}
            }
        },
        {
            "id": "bridge-street-low",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "street"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12.5, 0.5], [14, 2], [18, 18]]
                },
                "line-color": "#fff",
                "line-opacity": {
                    "stops": [[11.5, 0], [12, 1], [14, 1], [14.01, 0]]
                }
            }
        },
        {
            "id": "bridge-street_limited-low",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "street_limited"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12.5, 0.5], [14, 2], [18, 18]]
                },
                "line-color": "#fff",
                "line-opacity": {
                    "stops": [[11.5, 0], [12, 1], [14, 1], [14.01, 0]]
                }
            }
        },
        {
            "id": "bridge-service-link-track-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "trunk_link"],
                    ["==", "structure", "bridge"],
                    ["in", "class", "link", "service", "track"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": "#e8edeb",
                "line-gap-width": {"base": 1.5, "stops": [[14, 0.5], [18, 12]]}
            }
        },
        {
            "id": "bridge-street_limited-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "street_limited"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": "#e8edeb",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[13, 0], [14, 2], [18, 18]]
                }
            }
        },
        {
            "id": "bridge-street-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "street"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": "#e8edeb",
                "line-opacity": {"base": 1, "stops": [[13.99, 0], [14, 1]]},
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[13, 0], [14, 2], [18, 18]]
                }
            }
        },
        {
            "id": "bridge-secondary-tertiary-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "structure", "bridge"],
                    ["in", "class", "secondary", "tertiary"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.2, "stops": [[10, 0.75], [18, 2]]},
                "line-color": "#e8edeb",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[8.5, 0.5], [10, 0.75], [18, 26]]
                },
                "line-translate": [0, 0]
            }
        },
        {
            "id": "bridge-primary-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "primary"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[5, 0.75], [16, 2]]},
                "line-color": "#e8edeb",
                "line-gap-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]},
                "line-translate": [0, 0]
            }
        },
        {
            "id": "bridge-trunk_link-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "structure", "bridge"],
                    ["==", "type", "trunk_link"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": "#e8edeb",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-opacity": {"base": 1, "stops": [[10.99, 0], [11, 1]]}
            }
        },
        {
            "id": "bridge-motorway_link-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["<=", "layer", 1],
                    ["==", "class", "motorway_link"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": "#e8edeb",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "bridge-trunk-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["all", ["==", "class", "trunk"], ["==", "structure", "bridge"]]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[10, 1], [16, 2]]},
                "line-color": "#e8edeb",
                "line-gap-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]}
            }
        },
        {
            "id": "bridge-motorway-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "motorway"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[7, 0.5], [10, 1], [16, 2]]
                },
                "line-color": "#e8edeb",
                "line-gap-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]}
            }
        },
        {
            "id": "bridge-construction",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "construction"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "miter"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12.5, 0.5], [14, 2], [18, 18]]
                },
                "line-color": "#fff",
                "line-opacity": {"base": 1, "stops": [[13.99, 0], [14, 1]]},
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [14, [0.4, 0.8]],
                        [15, [0.3, 0.6]],
                        [16, [0.2, 0.3]],
                        [17, [0.2, 0.25]],
                        [18, [0.15, 0.15]]
                    ]
                }
            }
        },
        {
            "id": "bridge-path",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "steps"],
                    ["==", "class", "path"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[15, 1], [18, 4]]},
                "line-color": "#fff",
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [14, [1, 0]],
                        [15, [1.75, 1]],
                        [16, [1, 0.75]],
                        [17, [1, 0.5]]
                    ]
                },
                "line-opacity": {"base": 1, "stops": [[14, 0], [14.25, 1]]}
            }
        },
        {
            "id": "bridge-steps",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                ["all", ["==", "structure", "bridge"], ["==", "type", "steps"]]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[15, 1], [18, 4]]},
                "line-color": "#fff",
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [14, [1, 0]],
                        [15, [1.75, 1]],
                        [16, [1, 0.75]],
                        [17, [0.3, 0.3]]
                    ]
                },
                "line-opacity": {"base": 1, "stops": [[14, 0], [14.25, 1]]}
            }
        },
        {
            "id": "bridge-trunk_link",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "layer", 2, 3, 4, 5],
                    ["==", "structure", "bridge"],
                    ["==", "type", "trunk_link"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-color": "#fff"
            }
        },
        {
            "id": "bridge-motorway_link",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "layer", 2, 3, 4, 5],
                    ["==", "class", "motorway_link"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-color": "#fff"
            }
        },
        {
            "id": "bridge-pedestrian",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "pedestrian"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[14, 0.5], [18, 12]]},
                "line-color": "#fff",
                "line-opacity": 1,
                "line-dasharray": {
                    "base": 1,
                    "stops": [[14, [1, 0]], [15, [1.5, 0.4]], [16, [1, 0.2]]]
                }
            }
        },
        {
            "id": "bridge-service-link-track",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!=", "type", "trunk_link"],
                    ["==", "structure", "bridge"],
                    ["in", "class", "link", "service", "track"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[14, 0.5], [18, 12]]},
                "line-color": "#fff"
            }
        },
        {
            "id": "bridge-street_limited",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "street_limited"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12.5, 0.5], [14, 2], [18, 18]]
                },
                "line-color": "#fff",
                "line-opacity": {"base": 1, "stops": [[13.99, 0], [14, 1]]}
            }
        },
        {
            "id": "bridge-street",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "street"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12.5, 0.5], [14, 2], [18, 18]]
                },
                "line-color": "#fff",
                "line-opacity": {"base": 1, "stops": [[13.99, 0], [14, 1]]}
            }
        },
        {
            "id": "bridge-secondary-tertiary",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "structure", "bridge"],
                    ["in", "type", "secondary", "tertiary"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[8.5, 0.5], [10, 0.75], [18, 26]]
                },
                "line-color": "#fff",
                "line-opacity": {"base": 1.2, "stops": [[5, 0], [5.5, 1]]}
            }
        },
        {
            "id": "bridge-primary",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "structure", "bridge"],
                    ["==", "type", "primary"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]},
                "line-color": "#fff",
                "line-opacity": {"base": 1.2, "stops": [[5, 0], [5.5, 1]]}
            }
        },
        {
            "id": "bridge-trunk",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "layer", 2, 3, 4, 5],
                    ["==", "class", "trunk"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]},
                "line-color": "#fff"
            }
        },
        {
            "id": "bridge-motorway",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["!in", "layer", 2, 3, 4, 5],
                    ["==", "class", "motorway"],
                    ["==", "structure", "bridge"]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]},
                "line-color": "#fff"
            }
        },
        {
            "id": "bridge-rail",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "structure", "bridge"],
                    ["in", "class", "major_rail", "minor_rail"]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-color": "#e8edeb",
                "line-width": {"base": 1, "stops": [[14, 0.75], [20, 1]]}
            }
        },
        {
            "id": "bridge-trunk_link-2-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "structure", "bridge"],
                    ["==", "type", "trunk_link"],
                    [">=", "layer", 2]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": "#e8edeb",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-opacity": {"base": 1, "stops": [[10.99, 0], [11, 1]]}
            }
        },
        {
            "id": "bridge-motorway_link-2-case copy",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "motorway_link"],
                    ["==", "structure", "bridge"],
                    [">=", "layer", 2]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[12, 0.75], [20, 2]]},
                "line-color": "#e8edeb",
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "bridge-trunk-2-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "trunk"],
                    ["==", "structure", "bridge"],
                    [">=", "layer", 2]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[10, 1], [16, 2]]},
                "line-color": "#e8edeb",
                "line-gap-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]}
            }
        },
        {
            "id": "bridge-motorway-2-case",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "motorway"],
                    ["==", "structure", "bridge"],
                    [">=", "layer", 2]
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[7, 0.5], [10, 1], [16, 2]]
                },
                "line-color": "#e8edeb",
                "line-gap-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]}
            }
        },
        {
            "id": "bridge-trunk_link-2",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "structure", "bridge"],
                    ["==", "type", "trunk_link"],
                    [">=", "layer", 2]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-color": "#fff"
            }
        },
        {
            "id": "bridge-motorway_link-2",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "motorway_link"],
                    ["==", "structure", "bridge"],
                    [">=", "layer", 2]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [[12, 0.5], [14, 2], [18, 18]]
                },
                "line-color": "#fff"
            }
        },
        {
            "id": "bridge-trunk-2",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "trunk"],
                    ["==", "structure", "bridge"],
                    [">=", "layer", 2]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]},
                "line-color": "#fff"
            }
        },
        {
            "id": "bridge-motorway-2",
            "type": "line",
            "metadata": {"mapbox:group": "1444855799204.86"},
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "all",
                    ["==", "class", "motorway"],
                    ["==", "structure", "bridge"],
                    [">=", "layer", 2]
                ]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": {"base": 1.5, "stops": [[5, 0.75], [18, 32]]},
                "line-color": "#fff"
            }
        },
        {
            "id": "road-label-small",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444933721429.3076"},
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "!in",
                    "class",
                    "ferry",
                    "golf",
                    "link",
                    "motorway",
                    "path",
                    "pedestrian",
                    "primary",
                    "secondary",
                    "street",
                    "street_limited",
                    "tertiary",
                    "track",
                    "trunk"
                ],
                ["==", "$type", "LineString"]
            ],
            "layout": {
                "text-size": {"base": 1, "stops": [[15, 10], [20, 13]]},
                "text-max-angle": 30,
                "symbol-spacing": 500,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "#6B6B6B",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0
            }
        },
        {
            "id": "road-label-medium",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444933721429.3076"},
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", "$type", "LineString"],
                [
                    "in",
                    "class",
                    "link",
                    "pedestrian",
                    "street",
                    "street_limited"
                ]
            ],
            "layout": {
                "text-size": {"base": 1, "stops": [[11, 10], [20, 14]]},
                "text-max-angle": 30,
                "symbol-spacing": 500,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "#6B6B6B",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "road-label-large",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444933721429.3076"},
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 12,
            "filter": [
                "in",
                "class",
                "motorway",
                "primary",
                "secondary",
                "tertiary",
                "trunk"
            ],
            "layout": {
                "text-size": {"base": 1, "stops": [[9, 10], [20, 16]]},
                "text-max-angle": 30,
                "symbol-spacing": 400,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "#6B6B6B",
                "text-halo-color": "rgba(255,255,255, 0.75)",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "poi-scalerank2",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444933358918.2366"},
            "source": "composite",
            "source-layer": "poi_label",
            "filter": [
                "all",
                [
                    "!in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ],
                ["==", "scalerank", 2]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {"base": 1, "stops": [[14, 11], [20, 12]]},
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [0, 0],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": "#949494",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "poi-parks-scalerank2",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444933358918.2366"},
            "source": "composite",
            "source-layer": "poi_label",
            "filter": [
                "all",
                ["==", "scalerank", 2],
                [
                    "in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {"base": 1, "stops": [[14, 11], [20, 12]]},
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [0, 0],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": "#949494",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "poi-parks-scalerank1",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444933322393.2852"},
            "source": "composite",
            "source-layer": "poi_label",
            "filter": [
                "all",
                ["<=", "scalerank", 1],
                [
                    "in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {"base": 1, "stops": [[10, 11], [18, 12]]},
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [0, 0],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 58%)",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "poi-scalerank1",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444933322393.2852"},
            "source": "composite",
            "source-layer": "poi_label",
            "filter": [
                "all",
                [
                    "!in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ],
                ["<=", "scalerank", 1]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {"base": 1, "stops": [[10, 11], [18, 12]]},
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [0, 0],
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": "hsl(0, 0%, 58%)",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-suburb",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 11,
            "maxzoom": 16,
            "filter": ["==", "type", "suburb"],
            "layout": {
                "text-field": "{name_en}",
                "text-transform": "uppercase",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-letter-spacing": 0.15,
                "text-max-width": 7,
                "text-padding": 3,
                "text-size": {"base": 1, "stops": [[11, 11], [15, 18]]}
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1,
                "text-color": "hsl(0, 0%, 62%)",
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-city-sm",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444862510685.128"},
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 14,
            "filter": [
                "all",
                ["!in", "scalerank", 0, 1, 2, 3, 4, 5],
                ["==", "type", "city"]
            ],
            "layout": {
                "text-size": {"base": 1, "stops": [[6, 12], [14, 22]]},
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            ["DIN Offc Pro Regular", "Arial Unicode MS Regular"]
                        ],
                        [8, ["DIN Offc Pro Medium", "Arial Unicode MS Regular"]]
                    ]
                },
                "text-offset": [0, 0],
                "text-field": "{name_en}",
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(0, 0%, 42%)",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.25,
                "icon-opacity": {"base": 1, "stops": [[7.99, 1], [8, 0]]},
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-city-md-s",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444862510685.128"},
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 14,
            "filter": [
                "all",
                ["==", "type", "city"],
                ["in", "ldir", "E", "S", "SE", "SW"],
                ["in", "scalerank", 3, 4, 5]
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-size": {"base": 0.9, "stops": [[5, 12], [12, 22]]},
                "text-anchor": "top",
                "text-offset": {
                    "base": 1,
                    "stops": [[7.99, [0, 0.1]], [8, [0, 0]]]
                },
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            ["DIN Offc Pro Regular", "Arial Unicode MS Regular"]
                        ],
                        [8, ["DIN Offc Pro Medium", "Arial Unicode MS Regular"]]
                    ]
                },
                "icon-image": "dot-10"
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-color": "#ffffff",
                "text-color": "hsl(0, 0%, 42%)",
                "text-halo-blur": 0,
                "icon-opacity": {"base": 1, "stops": [[7.99, 1], [8, 0]]}
            }
        },
        {
            "id": "place-city-md-n",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444862510685.128"},
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 14,
            "filter": [
                "all",
                ["==", "type", "city"],
                ["in", "ldir", "N", "NE", "NW", "W"],
                ["in", "scalerank", 3, 4, 5]
            ],
            "layout": {
                "text-size": {"base": 0.9, "stops": [[5, 12], [12, 22]]},
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            ["DIN Offc Pro Regular", "Arial Unicode MS Regular"]
                        ],
                        [8, ["DIN Offc Pro Medium", "Arial Unicode MS Regular"]]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [[7.99, [0, -0.25]], [8, [0, 0]]]
                },
                "text-anchor": "bottom",
                "text-field": "{name_en}",
                "text-max-width": 7,
                "icon-image": "dot-10"
            },
            "paint": {
                "text-color": "hsl(0, 0%, 42%)",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "icon-opacity": {"base": 1, "stops": [[7.99, 1], [8, 0]]},
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-city-lg-s",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444862510685.128"},
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 14,
            "filter": [
                "all",
                ["<=", "scalerank", 2],
                ["==", "type", "city"],
                ["in", "ldir", "E", "S", "SE", "SW"]
            ],
            "layout": {
                "text-size": {"base": 0.9, "stops": [[4, 12], [10, 22]]},
                "icon-image": "dot-11",
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            ["DIN Offc Pro Regular", "Arial Unicode MS Regular"]
                        ],
                        [8, ["DIN Offc Pro Medium", "Arial Unicode MS Regular"]]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [[7.99, [0, 0.15]], [8, [0, 0]]]
                },
                "icon-size": 1,
                "text-anchor": {
                    "base": 1,
                    "stops": [[7, "top"], [8, "center"]]
                },
                "text-field": "{name_en}",
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(0, 0%, 42%)",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "icon-opacity": {"base": 1, "stops": [[7.99, 1], [8, 0]]},
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-city-lg-n",
            "type": "symbol",
            "metadata": {"mapbox:group": "1444862510685.128"},
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 14,
            "filter": [
                "all",
                ["<=", "scalerank", 2],
                ["==", "type", "city"],
                ["in", "ldir", "N", "NE", "NW", "W"]
            ],
            "layout": {
                "text-size": {"base": 0.9, "stops": [[4, 12], [10, 22]]},
                "icon-image": "dot-11",
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            ["DIN Offc Pro Regular", "Arial Unicode MS Regular"]
                        ],
                        [8, ["DIN Offc Pro Medium", "Arial Unicode MS Regular"]]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [[7.99, [0, -0.25]], [8, [0, 0]]]
                },
                "icon-size": 1,
                "text-anchor": {
                    "base": 1,
                    "stops": [[7, "bottom"], [8, "center"]]
                },
                "text-field": "{name_en}",
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(0, 0%, 42%)",
                "text-opacity": 1,
                "text-halo-color": "#ffffff",
                "text-halo-width": 1,
                "icon-opacity": {"base": 1, "stops": [[7.99, 1], [8, 0]]},
                "text-halo-blur": 0
            }
        }
    ],
    "created": "2018-12-29T14:36:29.518Z",
    "id": "cjq9kk7nscbqn2rllekokwmfq",
    "modified": "2018-12-29T15:24:09.835Z",
    "owner": "erictong",
    "visibility": "public",
    "draft": false
}