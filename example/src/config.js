export const CONFIG_STRING = `{
  "services": {
    "settings": {
      "default": {
        "enabled": false,
        "externalLinks": []
      },
      "web": {
        "enabled": true,
        "settingsButtons": [
          {
            "title": "sp_set_user_location_title",
            "description": "sp_set_user_location_description",
            "action": {
              "type": "set_user_location"
            },
            "type": "button"
          },
          {
            "title": "sp_set_dark_style_title",
            "description": "sp_set_dark_style_description",
            "action": {
              "type": "set_dark_style"
            },
            "type": "button"
          },
          {
            "title": "sp_set_default_style_title",
            "description": "sp_set_default_style_description",
            "action": {
              "type": "set_default_style"
            },
            "type": "button"
          }
        ],
        "externalLinks": [
          {
            "title": "sp_send_feedback_title",
            "link": "support@steerpath.com",
            "type": "email"
          },
          {
            "title": "sp_visit_website_title",
            "link": "https://steerpath.com",
            "type": "web"
          }
        ]
      }
    },
    "smartmap": {
      "default": {
        "defaultLanguage": "fi-FI",
				"supportedLanguages": [
					"en-GB",
					"fi-FI",
					"sv-SE",
          "nb-NO"
				],
        "defaultTheme": "default",
        "supportedThemes": [
            "default",
            "dark"
        ],
        "useFloorBasedStyle": true,
        "enableExtrusion": true,
        "enableExtrusionAntialiasing": false,
        "nonSelectableTags": [
            "hidden"
        ],
        "nonSelectableCssClasses": [
            "text_large",
            "text_medium",
            "text_small",
            "service_direction",
            "category_other",
            "infrastructure_hole",
            "category_cover_poi",
            "infrastructure_wing",
            "wing",
            "infrastructure_department",
            "department",
            "infrastructure_department_sticky",
            "department_sticky"
        ],
        "mapDataURL": "https://mapdata.eu.steerpath.net/",
        "bluedot": {
          "indoor": false,
          "outdoor": false
        },
        "routeDataURL": "https://routes.eu.steerpath.net/",
        "navigationDestinationThresholdM": 5,
        "navigationRerouteThresholdM": 5,
        "mapStylePath": "/style/default.json",
        "urlServiceURL": "https://url.eu.steerpath.net/",
        "viewProperties": {
          "bearing": -2.4,
          "pitch": 0,
          "layerIndex": 2,
          "buildingRef": "431",
          "bounds": {
            "sw": {
              "lng": 24.812049873812953,
              "lat": 60.22079674581377
            },
            "ne": {
              "lng": 24.812706546050777,
              "lat": 60.221077322610995
            }
          }
        },
        "initialMapMode": "mapOnly",
        "initialSearchBottomSheetState": "hidden",
        "floorSwitcherState": "hidden"
      }
    },
    "search": {
      "default": {
        "nonSearchableCssClasses": [
          "text_large",
          "text_medium",
          "text_small",
          "service_direction",
          "category_other",
          "infrastructure_hole",
          "category_cover_poi"
      ],
        "searchSuggestions": [
          {
            "title": "sp_show_free_desk_title",
            "shortTitle": "sp_show_free_desk_title_short",
            "description": "sp_show_free_desk_description",
            "iconName": "service_desk_free",
            "action": {
              "type": "show_free_live_rooms",
              "allTags": [
                "service_desk"
              ]
            }
          },
          {
            "title": "sp_show_free_phone_booths_title",
            "shortTitle": "sp_show_free_phone_booths_title_short",
            "description": "sp_show_free_phone_booths_description",
            "iconName": "service_phone_free",
            "action": {
              "type": "show_free_live_rooms",
              "allTags": [
                "service_phone"
              ]
            }
          },
          {
            "title": "sp_show_free_rooms_title",
            "shortTitle": "sp_show_free_rooms_title_short",
            "description": "sp_show_free_rooms_description",
            "iconName": "category_meeting_room_free",
            "action": {
              "type": "show_free_live_rooms",
              "anyTags": [
                "room",
                "category_room"
              ]
            }
          },
          {
            "title": "sp_category_meeting_room_title",
            "shortTitle": "sp_category_meeting_room_title_short",
            "description": "sp_category_meeting_room_description",
            "iconName": "category_meeting_room",
            "action": {
              "type": "show_pois_with_tags",
              "allTags": [
                "category_meeting_room"
              ]
            }
          },
          {
            "title": "sp_service_toilet_title",
            "shortTitle": "sp_service_toilet_title_short",
            "description": "sp_service_toilet_description",
            "iconName": "service_toilet",
            "action": {
              "type": "show_pois_with_tags",
              "anyTags": [
                "service_toilet",
                "toilet"
              ]
            }
          }
        ],
        "moreSuggestionsButton": {
          "title": "sp_more_suggestions_title",
          "shortTitle": "sp_more_suggestions_title_short",
          "description": "sp_more_suggestions_description",
          "iconName": "category_more",
          "action": {
            "type": "show_more_categories"
          }
        }
      }
    },
    "kiosk": {
      "share": {
          "hash": false,
          "qrCodeShare": {
              "enabled": false,
              "qrCodeURL": "https://kiosk.steerpath.com/",
              "qrCodePath": "/default/index.html"
          },
          "copyLinkToClipboard": false
      },
      "analytics": {
          "enabled": false
      }
    },
    "telemetry": {
      "default": {
          "telemetryURL": "https://capture.eu.steerpath.net/v1/",
          "beacons": "known",
          "location": "indoor",
          "enabled": true,
          "locationIntervalS": 20,
          "transmissionIntervalS": 30
      },
      "web": {
          "enabled": false,
          "telemetryURL": "https://capture.eu.steerpath.net/v1/"
      }
  },
    "metadata": {
      "default": {
        "metadataURL": "https://meta2.eu.steerpath.net/meta/v2/"
      }
    },
    "offline": {
      "default": {
        "offlineDataURL": "https://offline.eu.steerpath.net/"
      }
    },
    "live": {
      "default": {
        "liveURL": "https://live3.eu.steerpath.net/",
        "liveApiKey": "eyJhbGciOiJSUzI1NiJ9.eyJpYXQ6IjoxNTY4MDI5MTc0LCJqdGkiOiJlNzY5N2NiMS0wYmE4LTRhNTUtOWY5Zi01OGM5NjNmMDFlZDMiLCJzY29wZXMiOiJ2Mi0zYWU0MTdiYS0wMzg3LTRlNzktYTUxOS03ZWU5MjE3NmRjNjgtbGl2ZTpyLHciLCJzdWIiOiJ2Mi0zYWU0MTdiYS0wMzg3LTRlNzktYTUxOS03ZWU5MjE3NmRjNjgifQ.DV2Vnt5AJfuPv1K8X3Rw0u1SOFROyrr1KHLc6T7cd9R4BwTSgxt69IMYcc4ROTgqP254F3XUh_d92ku0W86pDlJslAoLcqA1T4MMkSgEMFvTl0V3ykAcNQDDs2opmudr4acIbbCJbtYe7_CG4GKV7WAnVocjbXqexpmrbTUol8xWhtuV2uB1ZODGCNLd2morhJYmMJtzp1jugtyvYO8-JKO4clKd5GfeWZ9YL9OywsGxanU5HKdpYivmWsLxCUGw8RajoM9hu9_APHNyw8jj8WDGUwZNqGfvTNHK17jAuZhJS5BaaelJoZCURyn7QqJVPp6QW3y6QW44IE7_H8ol-g",
        "enabled": true
      },
      "web": {
        "enabled": true,
        "liveApiKey": "eyJhbGciOiJSUzI1NiJ9.eyJpYXQ6IjoxNTY4MDI5MTc0LCJqdGkiOiJmOWYxMzlkMS03OWRhLTRiMWEtYjZkNS1iM2Y1MTUwMWRiMzMiLCJzY29wZXMiOiJ2Mi0zYWU0MTdiYS0wMzg3LTRlNzktYTUxOS03ZWU5MjE3NmRjNjgtbGl2ZTpyIiwic3ViIjoidjItM2FlNDE3YmEtMDM4Ny00ZTc5LWE1MTktN2VlOTIxNzZkYzY4In0.WzW22UAZkDMQnD8XDTVewnghareFvHnkZqf9oh4UPm1ZPPIYHbgZ73MQ5M2vRRXsLr5_rsduSt1D620Mwmy0fN6O92Ra_kMEX5NVJR1vZC2S8sUP8ech_bNOF7HEBmVNGyBhT_h3_kZpAAIfMirBimS3UStIutpY_kBbHye6g8_HH2lHbWnh2ZDN76lSu2pmGNMpxIo_TdP_gKfnillbKlo3HyC2ztttMuCnLqmMLcatfX2pGXhzN94yuPIfvKQJ8mtOR_HxkgggzUOlkzZ_lsQHDQsob_ynn44LypbKWn7hDaVRqYY1r95EJHpL1nBT0WD3qFGlA6-VksLWrKaY6Q",
        "liveURL": "https://live3.eu.steerpath.net/sdk-data"
      }
    },
    "positioning": {
      "default": {
          "beaconsURL": "https://beacons2.eu.steerpath.net/",
          "nddURL": "https://ndd.eu.steerpath.net/",
          "eidURL": "https://eidupdates.eu.steerpath.net/",
          "useAccelerometer": true,
          "useGyro": true,
          "useCompass": true,
          "gpsThresholdM": 10,
          "eidUpdatesEnabled": true
      },
      "ios": {
          "useCompass": true,
          "useGyro": true
      },
      "web": {
        "enabled": true
      }
  },
    "ui": {
      "default": {
        "colors": {
          "primaryColor": "#857CE8",
          "secondaryColor": "#857CE8",
          "bluedotColor": "#3887be",
          "backgroundColor": "#fafafa",
          "zoomedInRouteLineColor": "#01b2a5",
          "zoomedOutRouteLineColor": "#d7b127",
          "altRouteLineColor": "#DEC56B",
          "backgroundColorLayout": "rgba(255, 255, 255, 0.6)",
          "backgroundColorItem": "#fafafa",
          "textColor": "#000",
          "textHaloColor": "#fff"
        },
        "colors_dark": {
          "primaryColor": "#272b3f",
          "bluedotColor": "#3a5e78",
          "backgroundColor": "#fafafa",
          "zoomedInRouteLineColor": "#3a7874",
          "zoomedOutRouteLineColor": "#d7b127",
          "altRouteLineColor": "#DEC56B",
          "backgroundColorLayout": "rgba(0, 0, 0, 0.9)",
          "backgroundColorItem": "#333333",
          "textColor": "#fff",
          "textHaloColor": "#000"
        }
      }
    }
  },
  "update": false
}`;
