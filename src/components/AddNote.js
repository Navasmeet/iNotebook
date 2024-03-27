// import React, { useContext } from "react";
// import noteContext from "../context/notes/noteContext";

// const AddNote = () => {
//     const context = useContext(noteContext);
//     const { notes, addNote } = context;

//   return (
//     <div>
//       <div className="conatiner my-4">
//       <h1>Add a Note</h1>
//                 <form className="my-3">
//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//               <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//               <input type="password" className="form-control" id="exampleInputPassword1"/>
//             </div>
//             <div className="mb-3 form-check">
//               <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//               <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </form>

//           </div>
//     </div>
//   )
// }

// export default AddNote

import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Succesfully", "success")

  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            value={note.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
