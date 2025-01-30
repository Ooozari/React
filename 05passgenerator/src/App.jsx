import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // useStates hook
  const [length, setlength] = useState(8);
  const [includeChar, setincludeChar] = useState(false);
  const [includeNum, setincludeNum] = useState(false);
  const [password, setpassword] = useState("");
  const [accountID, setaccountID] = useState("");
  const [accountName, setaccountName] = useState("");
  const [passList, setpassList] = useState([]); //  array of passwordList object

  // useRef hook
  const passwordRef = useRef(null);

  // genPassword func
  const genPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNum) str += "0123456789";
    if (includeChar) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      let strIndex = Math.floor(Math.random() * str.length); // return the index of the str
      pass += str.charAt(strIndex); // concatenate the char of str with pass
    }
    setpassword(pass); // setting the password value
  }, [length, includeChar, includeNum, setpassword]);

  useEffect(() => {
    genPassword();
  }, [length, includeChar, includeNum, setpassword]);

  // copy func
  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 32);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // addPassToList func
  const addToList = () => {
    if (password && accountName && accountID) {
      const newEntry = {
        password,
        accountID,
        accountName,
        isPasswordVisible: false, // Default to hidden password
      };
      setpassList((prevList) => [...prevList, newEntry]); // It has access to prev value (ie array) so we can directly modify the array by ading newobject. Add new entry to the list
      
      // resetting the values
      setaccountID("");
      setaccountName("");
      setpassword("");
    }
  };

  // togglePasswordVisibility func
  const togglePasswordVisibility = (index) => { // we have to change the isPasswordVisible for that we use set setpassList
    setpassList((prevList) =>
      prevList.map((item, idx) =>
        idx === index ? { ...item, isPasswordVisible: !item.isPasswordVisible } : item
      )
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navbar */}
        <nav className="bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-3">
            <h1 className="text-2xl font-bold text-center">
              SecureKeyGen - Password Manager
            </h1>
          </div>
        </nav>

        {/* Main Card */}
        <div className="container mx-auto mt-8 px-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Generate Password</h2>

            {/* Account Name Input */}
            <div className="mb-4">
              <label htmlFor="accountName" className="block text-sm font-medium mb-2">
                Account Name
              </label>
              <input
                type="text"
                id="accountName"
                required
                value={accountName}
                onChange={(e) => setaccountName(e.target.value)}
                placeholder="Enter account name (e.g., Facebook)"
                className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Account ID Input */}
            <div className="mb-4">
              <label htmlFor="accountID" className="block text-sm font-medium mb-2">
                Account ID
              </label>
              <input
                type="text"
                id="accountID"
                required
                value={accountID}
                onChange={(e) => setaccountID(e.target.value)}
                placeholder="Enter account id (e.g., example@gmail.com)"
                className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  id="password"
                  value={password}
                  placeholder="Your password"
                  ref={passwordRef}
                  className="w-full px-4 py-2 bg-gray-700 rounded-md text-white pr-16 focus:outline-none cursor-default"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
                  <button
                    type="button"
                    onClick={copypassword}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Password Length Slider */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password Length</label>
              <input
                type="range"
                value={length}
                min="8"
                max="32"
                className="w-full"
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <p className="text-sm mt-1">Length: {length}</p>
            </div>

            {/* Checkboxes */}
            <div className="flex items-center mb-4">
              <label className="flex items-center mr-4">
                <input
                  type="checkbox"
                  className="mr-2"
                  defaultValue={includeNum}
                  onChange={() => {
                    setincludeNum((prev) => !prev);
                  }}
                />
                Include Numbers?
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  defaultValue={includeChar}
                  onChange={() => {
                    setincludeChar((prev) => !prev);
                  }}
                />
                Include Special Characters?
              </label>
            </div>
            
            {/* Add To List */}
            <button
              onClick={addToList}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Add to list
            </button>
          </div>
        </div>

        {/* Stored Password Cards */}
        <div className="container mx-auto mt-8 px-4">
          <h2 className="text-xl font-bold mb-4">My List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* List of passwords */}
            {passList.length === 0 ? (
              <p className="col-span-full bg-gray-700 py-4 px-6 text-center text-white text-2xl font-semibold rounded-md mt-3 mb-3">
                No records found
              </p>
            ) : (
              passList.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center"
                >
                  {/* Text Section */}
                  <div>
                    <h3 className="text-lg font-bold">{item.accountName}</h3>
                    <p className="text-sm text-gray-400">Account ID: {item.accountID}</p>
                    <p className="text-sm text-gray-400">
                      Password: {item.isPasswordVisible
                        ? item.password
                        : "*".repeat(item.password.length)}
                    </p>
                  </div>

                  {/* Button Section */}
                  <button
                    onClick={() => togglePasswordVisibility(index)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md"
                  >
                    {item.isPasswordVisible ? "Hide" : "Reveal"}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
