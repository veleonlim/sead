import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { FaUserPlus, FaUsers, FaInfoCircle } from "react-icons/fa"; // Importing react-icons

export default function GroupFeatures() {
  const features = [
    {
      title: "Create New Group",
      href: "/group/create",
      text: "This helps to create new group",
      icon: <FaUserPlus size={24} />,
    },
    // {
    //   title: "Add User to Group",
    //   href: "/users/group",
    //   text: "Add user to group",
    //   icon: <FaUsers size={24} />,
    // },
    // {
    //   title: "View User Info",
    //   href: "/users/view",
    //   text: "View user",
    //   icon: <FaInfoCircle size={24} />,
    // },
  ];

  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold mb-6">Group Management</h1>
      <p className="text-sm text-gray-500 mb-6 ">Group Management is a place for group tools</p>
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link key={index} href={feature.href}>
            <Card className="cursor-pointer hover:shadow-md hover:scale-105 transition-all transform rounded-lg border border-gray-200 p-4 ">
              <CardContent className="text-center flex flex-col items-start">
              <div className="flex">

                <div className="text-[#478EF7] flex mr-3">
                  {feature.icon} {/* Displaying the icon */}
                </div>
                <CardTitle className="text-lg font-semibold text-black mb-2">
                  {feature.title}
                </CardTitle>
                </div>
                <p className="text-sm text-gray-500">{feature.text}</p>
              </CardContent>
          
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
