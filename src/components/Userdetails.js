    import React ,{useRef, useState}from 'react'

const Userdetails = () => {

    const [note, setNote] = useState({_id: "", name: "", email: "", date: ""})
    const ref = useRef(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/auth/getuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":
                localStorage.getItem('token'),
            },
        });
        const json = await response.json();
        console.log(json);
        const date = new Date(json.date).toGMTString()
        setNote({_id:json._id, name: json.name, email: json.email, date:date})
    }

  return (
    <div>
            <form >
        <button onClick={handleSubmit} type="submit" className="btn btn-success">Click To Get User Details</button>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label my-3">Name</label>
            <input type="text" className="form-control" id="name" value={note.name} readOnly />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Account Created date</label>
            <input type="email" className="form-control" id="date" value={note.date} readOnly aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={note.email} readOnly aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">ID</label>
            <input type="text" className="form-control" id="_id" value={note._id} readOnly/>
        </div>
        </form>
    </div>
  )
}

export default Userdetails

