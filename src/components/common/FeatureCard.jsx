import { FaShieldAlt, FaMoneyBillWave, FaTasks, FaRobot } from "react-icons/fa";

const icons = {
  shield: <FaShieldAlt size={40} className="text-blue-600" />,
  payment: <FaMoneyBillWave size={40} className="text-green-600" />,
  milestone: <FaTasks size={40} className="text-purple-600" />,
  ai: <FaRobot size={40} className="text-orange-500" />,
};

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">

      <div className="flex justify-center mb-4">
        {icons[icon]}
      </div>

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;