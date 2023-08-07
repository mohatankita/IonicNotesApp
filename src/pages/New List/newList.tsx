import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonTextarea,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonViewDidEnter
} from '@ionic/react';
import "./newList.css";
import { trash, checkmarkCircle } from 'ionicons/icons';
import { INote } from '../../models/notesList';

/** Component for creating a new note */
const NewList: React.FC = () => {
  const [notesList, setNotesList] = useState<INote[]>([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [isNoteSuccess, setIsNoteSuccess] = useState(false);

  // For clearing all the content in the new note
  const clearNote = () => {
    setNoteTitle("");
    setNoteContent("");
  }

  // For saving the new note
  const saveNote = () => {
    const notes: INote[] = [
      ...notesList,
      {
        title: noteTitle,
        content: noteContent
      }
    ];
    localStorage.setItem("notesList", JSON.stringify(notes));
    setNotesList(notes);
    setIsNoteSuccess(true);
    clearNote();
  }

  // Getting the list of notes to append the new note to it
  useEffect(() => {
    const notes = localStorage.getItem("notesList");
    if (notes) {
      setNotesList(JSON.parse(notes));
    }
  }, [])

  return (
    <>
      {isNoteSuccess && (
        <IonToast
          cssClass="custom-toast"
          duration={2000}
          icon={checkmarkCircle}
          isOpen={isNoteSuccess}
          message="Note successfully saved"
          position="top"
        />
      )}
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Note</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="new-note-layout">
          <IonCardHeader>
            </IonCardHeader>
          <IonCardContent>
            <IonHeader className="note-title">
              <IonInput
                placeholder="Title"
                value={noteTitle}
                onIonChange={(e: Event) => {
                  const value = (e.target as HTMLIonInputElement).value as string;
                  setNoteTitle(value);
                }}
              />
              <IonButton
                fill="clear"
                onClick={() => clearNote()}
                size="small"
                color="danger"
              >
                <IonIcon slot="icon-only" icon={trash} />
              </IonButton>
              <IonButton
                fill="clear"
                onClick={() => saveNote()}
                size="small"
              >
                <IonIcon slot="icon-only" icon={checkmarkCircle} color="success" />
              </IonButton>
            </IonHeader>
            <IonTextarea
              className="note-textarea"
              placeholder="Type a note..."
              value={noteContent}
              onIonChange={(e: Event) => {
                const value = (e.target as HTMLIonInputElement).value as string;
                setNoteContent(value);
              }}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default NewList;
