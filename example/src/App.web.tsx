import React, { useState, useRef, useEffect } from "react";
import {
  SmartMapManager,
  SmartMapView,
} from "react-native-steerpath-smart-map";
import Drawer from "./Drawer.js";
import { View, Platform } from "react-native";
import { CONFIG_STRING } from "./config.js";

const API_KEY =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIndyYXBwZWQiOnRydWV9.eyJjbGllbnRfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltbHpjeUk2SW5OMFpXVnljR0YwYUMxemJXRnlkQzF2Wm1acFkyVWlmUS5leUpqWm1jaU9pSnpkR1ZsY25CaGRHaGZZMjl1Wm1sbkxtcHpiMjRpTENKbFpHbDBVbWxuYUhSeklqb2lJaXdpWldsa1FXTmpaWE56SWpvaUlpd2lhV0YwT2lJNk1UVTRNVFF5TWpJNU55d2lhblJwSWpvaU5HSmxZbVV4TURFdE1UUXdZUzAwWW1Nd0xXRTBORGN0TjJNME9UZzJNamN4T0RGbUlpd2liV1YwWVVGalkyVnpjeUk2SW5raUxDSnpZMjl3WlhNaU9pSjJNaTB6WVdVME1UZGlZUzB3TXpnM0xUUmxOemt0WVRVeE9TMDNaV1U1TWpFM05tUmpOamd0Y0hWaWJHbHphR1ZrT25JaUxDSnpkV0lpT2lKMk1pMHpZV1UwTVRkaVlTMHdNemczTFRSbE56a3RZVFV4T1MwM1pXVTVNakUzTm1Sak5qZ2lmUS5reVowOHFBbXprQXBNMFpRUVJDRDVjb2Z0eVNMbmpFNkkwekRqSFNsRjVSdTFIYUVWVkJqQzI1TFdaSk1wYWw4Ui14RS01NXJoUkRMNjJlcHF0TjBOZ1JtdEJNbGdWM2Q1ZElVR3F0Vl9BbDZ2bVRjWWs4RHFjLTVYZUxSby11cUFwZ0Z4a0JNQ3ZzblNzQ0hjeV9QZzNLSWNsbElFbTcybWhDUHVxVEVfdDNZUjU4MVRCUWxjM2RqU254bFpkQTNhMUVjVm1TdzB6QXhBcnV2NFRLb215LVcta2tYVEpSem9GTktCdGh4QVZrZTVvVzk3U09tNjJoQ0pBdWFtUkJ4ZzZpcEZPQ3ByNnBYQm9lNkRIb2xTWXQ2NjBqejM2cjBTWmp6aUJkbGdUcEU5WDNwMFMzMjBHVE93MzlKVDU0YkRQWkxFd0gtaTlLRTFWclFiMHFJSGciLCJpYXQiOjE1ODE0MjI0MTMsImlzcyI6InN0ZWVycGF0aF93cmFwcGVyIiwianRpIjoiZTc3Y2VmNTYtNTRmMy00ZjIzLTlmZjItY2EyM2QxMjAzZTUyIn0.SgJQ0qFc3duW-dQjCTf8okgFdQ4xBSo48V9N0NFUol2XT7UIO_EhYLNBnc2NvxO0Ijiw9rQuMwqhhzZNus2CwvlBZ6oTGWakgrnxeNingI32OBAfIMZLY46k1b_-tUzkH_kGXmG4S-plTvvXe3DYHRF4-u5i3FnRxNJCi7-8tmLRYDFpoexCM4SIgnG50ZR9TBABv8NX-42l1fyb6dKpXcvYRR2XTXVEZLAGRY_xBUsrtKycsNPslH4UTr4katYpVHoKXYfEvJbjP9Wnm3B0P-Pi1_40fui__P1_HExEzVYVfnxR-fLEuDRFrCGt7vmxbekckMqr8bDsaNh85DWBWQ";

export default function App() {
  const smartMapRef = useRef();
  SmartMapManager.start(API_KEY, CONFIG_STRING);


  // navigate to selected smart map object
  const navigateToPoi = (smartmapObject) => {
    if (smartmapObject) {
      const userTask = {
        type: "navigation",
        payload: smartmapObject,
      };

      smartMapRef.current?.startUserTask(userTask);
    }
  };

  return (
    <View style={{ flex: 10, flexDirection: "row" }}>
      <View style={{ flex: 7 }}>
        <SmartMapView
          style={{ flex: 1 }}
          apiKey={API_KEY}
          ref={smartMapRef}
          onMapLoaded={() => {
            console.log("Map loaded");
          }}
          onMapClicked={(payload) => {
            console.log(payload);
            const { mapObjects } = payload;
            console.log("length", mapObjects.length);

            for (let i = 0; i < mapObjects.length; i++) {
              console.log("object", mapObjects[i]);
            }

            const smartmapObject = mapObjects[0];
            // use selectMapObject() to open the default info bottomsheet of selected smartMapObject
            smartMapRef.current?.selectMapObject(smartmapObject);

            //navigateToPoi(smartmapObject);
          }}
          onUserFloorChanged={(payload) =>
            console.log("User floor changed", payload)
          }
          onVisibleFloorChanged={(payload) =>
            console.log("Visible Floor changed", payload)
          }
          onSearchResultSelected={(payload) => {
            smartMapRef.current?.selectMapObject(payload);
            console.log("Search result selected ", payload);
          }}
          onViewStatusChanged={(payload) =>
            console.log("onViewstatuschanged", payload)
          }
          onNavigationEnded={() => console.log("navigation ended")}
          onNavigationStarted={() => console.log("navigation started")}
          onNavigationPreviewAppeared={() =>
            console.log("navigation PreviewAppeared")
          }
          onNavigationDestinationReached={() =>
            console.log("navigation DestinationReached")
          }
          onUserTaskResponse={(payload) => {
            console.log(payload);
          }}
          onBackPressed={(payload) => {
            console.log("onBackPressed", payload);
          }}
        />
      </View>
      {
        <View style={{ flex: 3 }}>
          <Drawer smartMapRef={smartMapRef} />
        </View>
      }
    </View>
  );
}