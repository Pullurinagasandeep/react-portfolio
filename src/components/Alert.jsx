export default function Alert({ onclick }) {
  return (
    <>
      <div className="alert">
        <h3 className="alert-heading">Form submitted sucessfully...!</h3>
        <button className="alert-close-button" onClick={onclick}>
          <img className="alert-close" src="/ham-menu-close.svg" alt="close" />
        </button>
      </div>
    </>
  );
}
