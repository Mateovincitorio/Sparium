import React from "react";

const Modal = () => {
  return (
    <div
      className="modal fade bg-dark bg-opacity-50"
      id="miModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-dark bg-opacity-90 text-white">

          <div className="modal-header">
            <h1 className="modal-title fs-7">Plan Mensual</h1>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <div className="pagos">
            <button className='btnMensual'>PayPal</button>
            <button className='btnTrimestral'>Mercado Pago</button>
          </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;