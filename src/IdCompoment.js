import { useId } from 'react';

const UserForm = () => {
  const id = useId();
  return (
    <>
      {/* Set the ID this way, you don't need to use multiple useId() for each element */}
      <label htmlFor={`${id}-name`}>Name: </label>
      <input id={`${id}-name`} type='text'></input>
      <br />
      <label htmlFor={`${id}-email`}>Email : </label>
      <input type='email' id={`${id}-email`}></input>
    </>
  );
};

const IdComponent = () => {
  return (
    <div>
      <h2>13. useId Example</h2>
      <UserForm />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim quod,
        itaque aliquam aspernatur minima obcaecati sapiente iure perferendis
        architecto soluta quo, amet veritatis deserunt ut! Dolore dicta
        explicabo blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Doloribus nihil, sed voluptate quasi rerum tenetur modi dolores,
        placeat tempore iusto doloremque excepturi quibusdam incidunt eos ea
        aspernatur repudiandae nulla facere?
      </p>
      <UserForm />
      <br />
      <br />
      <br />
    </div>
  );
};

export default IdComponent;
