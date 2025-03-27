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
      <div className="w-full overflow-hidden bg-primary text-white p-4 text-lg font-semibold">
        <h1 className="container text-[24px]">Notification</h1>
      </div>
      <div className="container my-8">
        <div className="bg-white rounded-md">
          {notifications.map((notification, index) => (
            <div key={item.id}>
              <div
                key={notification.id} // border-b last:border-none
                className="flex items-center p-4"
              >
                <div className="w-16 h-16 relative">
                  <Image
                    src={notification.image}
                    alt="Profile"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>

                <div className="ml-4">
                  <p className="text-lg font-semibold">{notification.title}</p>
                  <p className="text-gray-500 text-sm">{notification.time}</p>
                </div>
              </div>
              <hr
                className={`border-t border-gray-300 ${
                  index !== notifications.length - 1
                    ? "absolute left-0 w-full"
                    : "hidden"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
