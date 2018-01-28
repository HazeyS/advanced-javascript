/* Hello world - using a pure component */

const NestedComponent = () => (
  <h1>Hello Hailey!</h1>
);

const renderHelloWorld = () => {
  ReactDOM.render(
   <div>
    This is a simple example of some JSX with a nested component
    <NestedComponent/>

    Refresh the page to return to the main menu.
  </div>,
  document.getElementById('root')
  );
};
