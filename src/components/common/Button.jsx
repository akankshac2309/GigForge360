import { Link } from "react-router-dom";

function Button({
    text,
    to,
    variant = "primary"
}) {

    const styles = {

        primary:
            "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl",

        secondary:
            "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white",

        white:
            "bg-white text-indigo-700 hover:bg-gray-100 shadow-lg"

    };

    return (

        <Link to={to}>

            <button

                className={`px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${styles[variant]}`}

            >

                {text}

            </button>

        </Link>

    );

}

export default Button;