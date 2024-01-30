function Tableitem({ name, username, mail, age }) {
  return (
    <tr>
      <td className="w-[30%]" data-field="name">
        {name}
      </td>
      <td className="w-[30%]" data-field="username">
        {username}
      </td>
      <td className="w-[30%]" data-field="mail">
        {mail}
      </td>
      <td className="w-[10%]" data-field="age">
        {age}
      </td>
    </tr>
  );
}

export default Tableitem;
