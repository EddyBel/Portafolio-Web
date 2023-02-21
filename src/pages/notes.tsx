import { useState, useEffect } from "react";
import { NoteCard, BookLoader, SearchEngine } from "../components/common/index";
import { useMyAPI, useGithub } from "../hook/useContext";
import { validateToDataFromDict } from "../util/index";

export function Notes() {
  const [matters, setMatters] = useState<string[]>();
  const [stateMatter, setStateMatter] = useState<string>();
  const [allNotes, setAllNotes] = useState<any>();

  const myApi = useMyAPI();
  const github = useGithub();

  const avatar = github?.user_data?.avatar_url;
  const notes = myApi?.notes?.body.notes;

  interface Objeto {
    matter: string;
  }

  function obtenerMattersSinRepetir(lista: Objeto[]): string[] {
    const mattersUnicos: Set<string> = new Set();
    const mattersSinRepetir: string[] = [];

    mattersSinRepetir.push("All");

    lista.forEach((objeto: Objeto) => {
      const matter = objeto.matter;
      if (!mattersUnicos.has(matter)) {
        mattersUnicos.add(matter);
        mattersSinRepetir.push(matter);
      }
    });

    setMatters(mattersSinRepetir);

    return mattersSinRepetir;
  }

  const updateState = (e: any) => {
    e.preventDefault();
    const matter = e.target.value;
    setStateMatter(matter);
  };

  useEffect(() => {
    if (notes) {
      obtenerMattersSinRepetir(notes);
      setAllNotes(notes);
    }
  }, [notes]);

  useEffect(() => {
    if (stateMatter) {
      if (stateMatter.toLowerCase() === "all") {
        setAllNotes(notes);
      } else {
        const newNotes: any[] = [];

        notes?.map((note) => {
          if (stateMatter.toLowerCase() === note.matter.toLowerCase())
            newNotes.push(note);
        });

        setAllNotes(newNotes);
      }
    }
  }, [notes, stateMatter]);

  return (
    <div className="notes">
      <div className="notes__container__user">
        <img
          src={avatar}
          alt="avatar__github"
          className="notes__user__avatar"
        />
        <h1 className="notes__welcome__text">
          <span>Hello!</span> Here you will find a selection of my best notes in
          Spanish and summaries on a variety of topics and subjects. I have
          created this space with the intention of sharing my knowledge and
          helping other students in their learning.
          <br />I am excited to share my work with you and hope that my notes
          will be helpful in your own educational journey. Feel free to explore
          my page and use the information you find on it. Thank you for visiting
          my website!
        </h1>
      </div>
      {/* <SearchEngine /> */}
      <div className="notes__filter__tect">
        {!matters ? (
          <></>
        ) : (
          matters.map((matter) => (
            <button
              onClick={updateState}
              className="notes__filter__tec"
              value={matter}
              key={`option-${matter}`}
            >
              {matter}
            </button>
          ))
        )}
      </div>

      <div className="notes__all">
        {!allNotes ? (
          <div className="notes__container__loader">
            <BookLoader key={"notes__loader"} />
          </div>
        ) : (
          allNotes.map((note: any) => {
            const { level, name, tags, date } = validateToDataFromDict(
              note.metadata
            );

            return (
              <NoteCard
                language={note.matter}
                level={level}
                title={note.name}
                tags={tags}
                date={date}
                key={`note-${Math.random()}`}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
