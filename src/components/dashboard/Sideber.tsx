import Link from "next/link";

const Sidebar = () => {
    return (
      <div className="bg-gray-800 text-white h-screen w-64 flex-shrink-0">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <ul className="space-y-4">
            <li><Link href={"/dashboard"} className="block hover:bg-gray-700 py-2 px-4 rounded">Dashboard</Link></li>
            <li><Link href={"/dashboard/projects"} className="block hover:bg-gray-700 py-2 px-4 rounded">Projects</Link></li>
            <li><Link href={"/"} className="block hover:bg-gray-700 py-2 px-4 rounded">Portfolio</Link></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  