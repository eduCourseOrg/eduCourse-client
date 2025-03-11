/* eslint-disable react/prop-types */
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-100/30 z-50">
      <div className="bg-white p-7 rounded shadow-lg relative flex flex-col gap-4 w-[47%]">
        <button onClick={onClose} className="absolute top-5 right-5 text-md font-bold w-7 h-7 rounded-full bg-secondary text-primary">X</button>
            <div className="w-full flex flex-col gap-8">
                {children}
            </div>
      </div>
    </div>
  );
};

export default Modal;
