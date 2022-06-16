
import { useEffect, useState } from "react";
import { Button } from "ui";
import Form from "ui/Form";
import Row from "ui/Row";

const getUsers = async () => {
  const json = await fetch('http://localhost:4000/api/users/all');

  const result = await json.json();
  return result.users;
}

export default function Web() {
  const [users, setUsers] = useState<any[]>();
  useEffect(() => {
    (async () => {
      setUsers(await getUsers())
    })();
  }, []);


  return (
    <Form>
      <>
        <h1>Web</h1>
        {users && (
          users.map(({ name, email }, index) => (<div key={index}>
            <Row title="Name" value={name} />
            <Row title="Email" value={email} />
          </div>
          ))

        )
        }
        <Button />
      </ >
    </Form >
  );
}
