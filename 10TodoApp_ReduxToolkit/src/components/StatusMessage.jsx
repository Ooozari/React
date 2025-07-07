// StatusMessage.jsx
import { useSelector } from 'react-redux';

function StatusMessage() {
    const statusMessage = useSelector((state) => state.todo.statusMessage);

    if (!statusMessage) return null;

    const isDelete = statusMessage.toLowerCase().includes("deleted");
    const isAdd = statusMessage.toLowerCase().includes("added");

    return (
        <div className="fixed top-5 right-5 z-50">
            <div className={`
            px-4 py-2 border-b-2 rounded text-center 
            w-full max-w-xs sm:max-w-sm md:max-w-md shadow-md text-sm 
            opacity-90 backdrop-blur-sm
            ${isDelete ? "text-red-500 bg-red-100 border-red-600" :
            isAdd ? "text-blue-500 bg-blue-100 border-blue-600" :
            "text-green-500 bg-green-100 border-green-600"}
            `}>
                {statusMessage}
            </div>
        </div>


    );
}

export default StatusMessage;
