import { useState, createContext, useContext } from 'react';

const UserContext = createContext({
  name: 'Show default name',
  location: 'Show default location',
  numOfHouse: 1,
});

const FirstLevel = () => (
  <div>
    <h4>First Level</h4>
    <SecondLevel />
  </div>
);

const SecondLevel = () => (
  <div>
    <h3>Second Level</h3>
    <ThirdLevel />
  </div>
);

const ThirdLevel = () => (
  <div>
    <h4>Thrid Level</h4>
    <FouthLevel />
  </div>
);

const FouthLevel = () => (
  <div>
    <h4>Fouth Level</h4>
    <ShowUser />
  </div>
);

const ShowUser = () => {
  // const myContext = useContext(UserContext);

  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <p>Name : {user.name}</p>
      <p>Location : {user.location}</p>
      <p>Number of House : {user.numOfHouse}</p>

      {/*You can change the parent state by doing this*/}
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { numOfHouse: user.numOfHouse + 1 }));
        }}
      >
        Add House
      </button>
    </div>
  );
};

const ContextComponent = () => {
  // userState  = [{...}, f]
  const userState = useState({
    name: 'Waranya',
    location: 'Melbourne',
    numOfHouse: 1,
  });

  return (
    <div>
      <h2>3. useContext Example</h2>
      {/* value can be anything, but if it is Hooks, you can update the state at the child component, more convenient */}
      <UserContext.Provider value={userState}>
        <FirstLevel />
      </UserContext.Provider>
      {/*This component will use the default value from createContext because no Provider*/}
      {/* <ShowUser /> */}
      <br />
      <hr />
    </div>
  );
};

export default ContextComponent;
