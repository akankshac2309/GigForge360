import DashboardCard from "../components/common/DashboardCard";

function FreelancerDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Freelancer Dashboard
      </h1>

      <p className="text-xl text-gray-600 mb-10">
        Welcome back, Akanksha 👋
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <DashboardCard
          title="Applications"
          value="12"
          color="bg-blue-600"
        />

        <DashboardCard
          title="Active Contracts"
          value="4"
          color="bg-green-600"
        />

        <DashboardCard
          title="Payments"
          value="₹1.2L"
          color="bg-purple-600"
        />

        <DashboardCard
          title="Reviews"
          value="4.9 ⭐"
          color="bg-orange-500"
        />

      </div>

      <div className="bg-white rounded-xl shadow-lg mt-12 p-8">
        <h2 className="text-2xl font-bold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>✅ Applied for Salesforce Administrator</li>
          <li>💰 Payment received from MedAI Labs</li>
          <li>⭐ New 5-star review received</li>
          <li>📄 Contract completed successfully</li>
        </ul>
      </div>

    </div>
  );
}

export default FreelancerDashboard;