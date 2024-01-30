import { useState } from "react";
import { useEffect } from "react";
import Tableitem from "./Tableitem";

function Table() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`http://localhost:3000/users`)
        .then(res => res.json())
        .then(data => {
          setTimeout(() => {
            setUsers(data);
            setLoading(false);
          }, 1000);
        })
        .catch(err => {
          console.error("Error fetching data:", err);
          setLoading(false);
        });
    }, 0);
  }, []);
  return (
    <>
      <h3 className="m-4 text-4xl text-center uppercase text-bolder">Users</h3>
      <div className="flex flex-row justify-center mt-4">
        {loading ? (
          <p className="text-2xl">Loading...</p>
        ) : (
          <section className="container w-[600px] bg-gray-900 textwhite p-4 rounded mb-4">
            <table className="w-[100%]" id="products">
              <thead>
                <tr id="sorting" className="text-left">
                  <th
                    data-action="sort"
                    data-sort-direction="asc"
                    data-sort-by="name"
                    id="sort-product"
                  >
                    Name
                  </th>
                  <th
                    data-action="sort"
                    data-sort-direction="asc"
                    data-sort-by="price"
                    id="sort-price"
                  >
                    Username
                  </th>
                  <th
                    data-action="sort"
                    data-sort-direction="asc"
                    data-sort-by="stock"
                    id="sort-stock"
                  >
                    E-mail
                  </th>
                  <th
                    data-action="sort"
                    data-sort-direction="asc"
                    data-sort-by="age"
                    id="sort-age"
                  >
                    Age
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map(item => (
                  <Tableitem
                    key={item.id}
                    name={item.name}
                    username={item.username}
                    mail={item.mail}
                    age={item.age}
                  />
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </>
  );
}

export default Table;
