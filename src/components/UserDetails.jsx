import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/users/${id}`);
        setUser(res.data);
      } catch (err) {
        console.error('Xatolik yuz berdi:', err);
      }
    };
    fetchUsers();
  }, [id]);

  return (
    <div>
      <div className="p-12 gap-6">
        <motion.div
          key={user.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5 * 0.05 }}
        >
          <div className="hover:shadow-xl transition-all duration-300 rounded-2xl">
            <div className="p-4 flex flex-col items-center text-center">
              <div className="w-full h-full mb-3 flex justify-center flex-col items-center">
                <img src={user.image} alt={user.firstName} />
                <div>
                  {user.firstName}
                  {user.lastName}
                </div>
              </div>
              <h2 className="text-lg font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm mt-1 text-gray-600">
                {/* {user.address}, {user.city} */}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserDetails;
