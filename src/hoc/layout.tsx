import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, listOutline } from 'ionicons/icons';
import Home from '../pages/Home/home';
import NewList from '../pages/New List/newList';

/**
 * This is the layout of the application which includes routing and structure
 */
const Layout: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/newList" component={NewList} exact={true} />
        <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="newList" href="/newList">
          <IonIcon icon={listOutline} />
          <IonLabel>New List</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default Layout;
