const Contact = () => {
  return (
    <div className="m-auto h-lvh bg-gray-200">
      <h1 className="text-center font-bold text-2xl m-8">Contact Us Page</h1>
      <div className="flex justify-center flex-col items-center">
        <div>
          <input type="text" placeholder="Enter Your Name" className="border border-black m-2 p-1"/>
        </div>
        <div>
          <input type="text" placeholder="Enter Your Message" className="border border-black m-2 px-2 py-5"/>
        </div>
        <div>
          <button className="border border-black p-2 m-2 hover:bg-blue-600">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

