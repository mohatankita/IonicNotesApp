import React from 'react';
import { IonApp, IonContent, isPlatform, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './global.css';
import Layout from './hoc/layout';

/** Getting the mode for setting the theme based on the device type */
const getConfigMode = () => isPlatform('ios') ? "ios" : "md";

/** Setting the Ionic React application with global configuration and components */
setupIonicReact({mode: getConfigMode()});

const App: React.FC = () => (
  <IonApp>
    <IonContent className="ion-padding">
      <Layout />
    </IonContent>
  </IonApp>
);

export default App;
