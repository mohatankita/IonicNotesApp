import React, { useEffect, useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { INote } from '../../models/notesList';
import "./home.css";

// Displaying the list of notes in a card format
const Home: React.FC = () => {
  const [notesList, setNotesList] = useState<INote[]>([]);

  useEffect(() => {
    const notes = localStorage.getItem("notesList");
    if (notes) {
      setNotesList(JSON.parse(notes));
    }
  }, [notesList?.length])

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {notesList.map((notes: INote, index) => {
          return (
            <IonCard className="card-content" key={index}>
              <IonCardHeader>
                <IonCardTitle>
                  <h4>{notes.title}</h4>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{notes.content}</IonCardContent>
            </IonCard>
          )
        })}
      </IonContent>
    </>
  );
};

export default Home;
