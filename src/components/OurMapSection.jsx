import GoogleLoaction from "./GoogleLoaction";

const OurMapSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <div className="grid md:grid-cols-3 gap-8 bg-gray-200 rounded-lg">
        <div className="col-span-2">
          <GoogleLoaction></GoogleLoaction>
        </div>
        <div className="py-10 px-5">
          <h1 className="text-3xl font-semibold">Information</h1>
          <div className="mt-4">
            <p className=" font-semibold">Phone:</p>
            <p className="mt-1">+8801972041006</p>
          </div>
          <div className="mt-4">
            <p className=" font-semibold">Email:</p>
            <p className="mt-1">arafatjibon33@gmail.com</p>
          </div>
          <div className="mt-4">
            <p className=" font-semibold">Address:</p>
            <p className="mt-1">
              2163 Phillips Gap Rd, West Jefferson, North Carolina, United
              States
            </p>
          </div>
          <div className="mt-4">
            <p className=" font-semibold">Open Time:</p>
            <p className="mt-1">Mon - Sat: 7:30am - 8:00pm PST</p>
            <p className="mt-1">Sunday: 9:00am - 5:00pm PST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMapSection;
