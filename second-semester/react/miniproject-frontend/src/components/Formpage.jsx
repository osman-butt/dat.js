import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formpage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (age === 0 || name === "" || mail === "" || username === "") {
      setError(true);
    } else {
      const body = { name, username, mail, age };
      const json = JSON.stringify(body);
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: json,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(json);
      if (response.ok) {
        setError(false);
        navigate("/users");
      } else {
        setError(true);
      }
    }
  };
  return (
    <>
      <h3 className="m-4 text-4xl text-center uppercase text-bolder">
        Add user
      </h3>
      <div className="w-full max-w-xs m-auto mt-4">
        <form
          className="px-8 pt-6 pb-8 mb-4 text-black bg-gray-900 rounded shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-white">
              Name
              <input
                className="w-full px-3 py-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-white">
              Username
              <input
                className="w-full px-3 py-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-white">
              E-mail
              <input
                className="w-full px-3 py-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="mail"
                placeholder="E-mail"
                value={mail}
                onChange={e => setMail(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-white">
              Age
              <input
                className="w-full px-3 py-2 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Age"
                value={age}
                onChange={e => setAge(e.target.value)}
              />
            </label>
          </div>
          {error ? (
            <p className="pb-4 text-center text-red-600">
              Something went wrong
            </p>
          ) : (
            <p></p>
          )}
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
            >
              Save user
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Formpage;
