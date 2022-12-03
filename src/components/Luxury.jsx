import React from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

const Luxury = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-2 py-10">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h1>Lorem ipsum dolor.</h1>
          <p className="py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quos
            qui recusandae dolorum animi! Nemo velit blanditiis architecto
            nesciunt. Labore delectus commodi dignissimos consequatur mollitia
            molestiae earum corporis, repellendus libero doloremque beatae, qui
            doloribus? Totam laudantium, modi praesentium sapiente, sed
            voluptates mollitia animi ad autem numquam dolorem hic, non dolore.
            Ad recusandae in doloribus eos rerum ex esse possimus fugit, illo
            porro fuga dolorem id. Culpa dolorum beatae facere adipisci. Ut
            quisquam at fugit in ducimus, exercitationem, voluptatibus corrupti
            maiores animi adipisci nulla hic cum! Ipsum ullam exercitationem
            commodi dolore doloribus rem accusantium veniam? Eaque rerum in
            placeat numquam cumque!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 py-4 text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="font-bold py-2">LEADING SERVICES</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                impedit?
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <button>
              <FaSearchLocation size={50} />
            </button>
            <div>
              <h3 className="font-bold py-2">LEADING SERVICES</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                impedit?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITONAL 15% OFF</p>
          <p className="py-4">10 HOURS LEFT</p>
          <p className="bg-gray-800 py-2 text-white">BOOK NOW AND SAVE</p>
        </div>
        <form>
          <div className="w-full flex flex-col my-2">
            <label htmlFor="destination" className="py-2">
              Destination
            </label>
            <select className="border rounded-md p-2">
              <option value="india">India</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="pakistan">Pakistan</option>
              <option value="nepal">Nepal</option>
              <option value="bhutan">Bhutan</option>
            </select>
          </div>
          <div className="w-full flex flex-col my-2">
            <label htmlFor="checkin" className="py-2">
              Check-in
            </label>
            <input type="date" className="border py-2 rounded-md" />
          </div>
          <div className="w-full flex flex-col my-2">
            <label htmlFor="checkout" className="py-2">
              Check-out
            </label>
            <input type="date" className="border py-2 rounded-md" />
          </div>
        </form>
        <button className="w-full p-2">Rates & Availabavility</button>
      </div>
    </div>
  );
};

export default Luxury;
