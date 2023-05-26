export default function UImodal() {
  return (
    <>
      <div className="myModal">
        <div
          className="modal"
          tabIndex={-1}
          role="dialog"
          id="modal1"
          aria-labelledby="modal1Title"
          aria-describedby="modal1Description"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title h5 " id="modal1Title">
                  Intestazione modale
                </h2>
              </div>
              <div className="modal-body">
                <p id="modal1Description">Descrizione scopo della modale.</p>
                <p>
                  Font Titillium 16px. Leading 24px. omnis iste natus error.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Azione 2
                </button>
                <button className="btn btn-primary btn-sm" type="button">
                  Azione 1
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
