
import {
  SmartMapManager,
  SmartMapView,
  SmartMapModes,
  SmartObjectSource
} from "react-native-steerpath-smart-map";
import { SafeAreaView, Button } from 'react-native'
import { NavigationScreenProp } from 'react-navigation';
import { useSmartMapContext } from './SmartMapContext';
import React, { useRef, useEffect } from 'react';

interface MapScreenProps {
  navigation: NavigationScreenProp<any>;
}

const API_KEY =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIndyYXBwZWQiOnRydWV9.eyJjbGllbnRfdG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKelkyOXdaWE1pT2lKaVlYTmxPbkk3YzNSbFpYSndZWFJvWDNOMFlYUnBZenB5TzNOMFpXVnljR0YwYUY5a2VXNWhiV2xqT25JaUxDSnRaWFJoUVdOalpYTnpJam9pZVNJc0ltcDBhU0k2SWpobE5UQTJPV1JoTFRWaU5ERXROR1l4WlMxaVlqWXpMVEUzTm1FMFkyRmpNRGN5T0NJc0luTjFZaUk2SW5OMFpXVnljR0YwYUNJc0ltVmthWFJTYVdkb2RITWlPaUlpTENKbGFXUkJZMk5sYzNNaU9pSjVJbjAuaW44eklVbV9abFZobVlQaFJNc014U2hscUNIMG5Kbm9mMGtSbFd5S3VRdyIsImlhdCI6MTU2MjkzMjUyNywiaXNzIjoic3RlZXJwYXRoX3dyYXBwZXIiLCJqdGkiOiJiNjhiNTM3MS05MjM1LTRkMmYtOGE3NC1iOWZiNDAzZDhhOWIifQ.nRix79oSLz2mmoxitFYAlinu6Ft8znnBWq2GnkLBkck1xQVfXgc7iJkSrFE2J9dtM-EICEEZCgVdSjRq0UpaHrJB2SQxr8p_AIk9C4YgCRSkAa1D6luqVnpxcVbaI0qwMbZeAFB2DGdn3gQuhoOOXlpU1mbAZLj_aAEvrVXVBmMzmnNtFNgai_v0s2jyMVDnO4p1mEvjGcyka8RHr4EAEV1emot8K_GTgoLMm5otIxj9Kzy-d_BjtalFETnEOXvbUegJe8wCgC6qAPlQ9-iie_b3cWyW52gXnVe21hS7fia5OMoAan1pEJLmPSMyHPx5ELb0llP8Pc7oKhoNVA3aAQ";

// For native platform
SmartMapManager.start(API_KEY);

export default function App({navigation}: MapScreenProps) {

  const smartMapRef = useRef<any>(null);
  const { setSmartMapRef } = useSmartMapContext();

  useEffect(() => {
    setSmartMapRef(smartMapRef);
  }, [setSmartMapRef]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SmartMapView
        ref={smartMapRef}
        style={{ flex: 1 }}
        mapMode={SmartMapModes.MAP_ONLY}
        onMapLoaded={() => console.log("MapLoaded")}
        onMapClicked={mapObjects => console.log("Map Clicked: ", mapObjects)}
        onUserFloorChanged={payload => console.log("User floor changed", payload)}
        onVisibleFloorChanged={payload =>
          console.log("Visible Floor changed", payload)
        }
        onViewStatusChanged={payload =>
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
        onUserTaskResponse={payload => {
          console.log("onUsertask response", payload);
        }}
      />
      <Button
        title="Open drawer"
        onPress={() => {
          navigation.openDrawer();
        }}/>
    </SafeAreaView>
  );
}