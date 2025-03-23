import Image from "next/image";

const notifications = [
  {
    id: 1,
    title: "Title",
    time: "Posted from 1 hour",
    image: "/imgs/mini logo.png",
  },
  {
    id: 2,
    title: "Title",
    time: "Posted from 1 hour",
    image: "/imgs/mini logo.png",
  },
  {
    id: 3,
    title: "Title",
    time: "Posted from 1 hour",
    image: "/imgs/mini logo.png",
  },
];

export default function Notifications() {
  return (
    <>
      <div className="w-full bg-primary text-white p-4 text-lg font-semibold">
        <h1 className="w-[80%] mx-auto">Notification</h1>
      </div>
      <div className="w-[80%] mx-auto my-8">
        <div className="bg-white shadow-md rounded-md">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center p-4 border-b last:border-none"
            >
              <div className="w-12 h-12 relative">
                <Image
                  src={notification.image}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>

              <div className="ml-4">
                <p className="text-lg font-semibold">{notification.title}</p>
                <p className="text-gray-500 text-sm">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
