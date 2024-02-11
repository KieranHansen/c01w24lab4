import './App.css';

const Note = ({entry, editNote, deleteNote}) => {

    return (
        <div style={NoteStyle.note}>
            <p style={NoteStyle.text}>{entry.title}</p>
                <button
                    onClick={() => editNote(entry)}
                    >
                    Edit note
                </button>
                {<button
                    onClick={() => deleteNote(entry)}
                    >
                    Delete note
                </button>}
        </div>
    )

}

const onChangeColor = async (noteId, color) => {
    try {
      const response = await fetch(`http://localhost:4000/updateNoteColor/${noteId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ color }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update note color');
      }
  
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === noteId ? { ...note, color: color } : note
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

export default Note;

const NoteStyle = {
    note: {
      padding: '20px',
      margin: '20px',
      width: '200px',
      borderStyle: 'dotted',
      borderRadius: '30px',
      borderWidth: 'thin',
      overflowWrap: "break-word"
    },
    text: {
      margin: "0px"
    }, 
  }