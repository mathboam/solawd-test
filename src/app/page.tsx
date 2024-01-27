"use client";

import { useState } from "react";
interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  cities: [{ name: string; date: string }];
}
export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [cities, setCities] = useState([{ name: "", date: "" }]);
  const [data, setData] = useState<any>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // pust to data state
    const user = {
      firstName,
      lastName,
      dateOfBirth,
      cities,
    };

    setData([...data, user]);

    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setCities([{ name: "", date: "" }]);
  };

  return (
    <main className="flex min-h-screen items-center justify-center gap-12">
      <div className="border-b bg-white px-10 py-10 rounded-xl my-auto border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="first-name"
                id="first-name"
                placeholder="Eg. John"
                autoComplete="given-name"
                className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="last-name"
                placeholder="Eg. Doe"
                id="last-name"
                autoComplete="family-name"
                className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date of Birth
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date"
                autoComplete="email"
                className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Cities travelled
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 max-h-60 overflow-scroll sm:grid-cols-6">
          {cities.map((city, index) => (
            // this should be a component for easy readability and reusability
            <div
              key={index}
              className="col-span-6 relative grid grid-cols-1 gap-x-6 gap-y-3 max-h-60 overflow-scroll sm:grid-cols-6"
            >
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date Arrived
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="first-name"
                    id="first-name"
                    value={city.date}
                    onChange={(e) => {
                      const newCities = [...cities];
                      newCities[index].date = e.target.value;
                      setCities(newCities);
                    }}
                    placeholder="Eg. John"
                    autoComplete="given-name"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    onChange={(e) => {
                      const newCities = [...cities];
                      newCities[index].name = e.target.value;
                      setCities(newCities);
                    }}
                    value={city.name}
                    placeholder="Eg. Doe"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {cities?.length > 1 && (
                <button
                  onClick={() => {
                    const newCities = [...cities];
                    newCities.splice(index, 1);
                    setCities(newCities);
                  }}
                  type="button"
                  className="text-white text-xs absolute top-0 right-0 rounded-full bg-red-500 w-4 flex items-center justify-center h-4"
                >
                  x
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setCities([...cities, { name: "", date: "" }])}
            className="border mt-3 col-span-2 px-3 py-2 text-xs font-light text-black rounded-full shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            + Add More
          </button>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md mt-5 w-full bg-indigo-600 col-span-6 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>

      <ul
        role="list"
        className="divide-y space-y-4 max-h-[70vh] overflow-scroll w-2/6 divide-gray-100"
      >
        {data.map((user: User) => (
          // this should be a component for easy readability and reusability
          <li
            key={user?.lastName + user?.firstName}
            className="flex flex-col bg-white px-4 rounded-lg justify-between gap-3 py-4"
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 border w-12 flex-none rounded-full bg-gray-50"
                src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {user.firstName} {user.lastName}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  Dob: {user.dateOfBirth}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-start">
              <p className="text-sm leading-6 text-gray-900">Cities Traveled</p>
              <div className="mt-1 text-xs flex flex-wrap gap-2 leading-5 text-gray-500">
                {user.cities.map((city) => (
                  <div
                    className={
                      "rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset"
                    }
                  >
                    {city.name} - {city.date}
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
