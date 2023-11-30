// import React from 'react';
// import axios from 'axios';

// const DeleteAccount = () => {
//   const handleDeleteAccount = async () => {
//     const emailToDelete = <form>

//     </form>; // Replace with the email of the user to be deleted

//     try {
//       const response = await axios.delete('http://localhost:3001/delete-account', {
//         data: {
//           email: emailToDelete,
//         },
//       });

//       console.log(response.data.message); // Log success message
//     } catch (error) {
//       console.error('Account deletion failed:', error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleDeleteAccount}>Delete Account</button>
//     </div>
//   );
// };

// export default DeleteAccount;
import React, { useState } from 'react';
import axios from 'axios';
import './DeleteAccount.css';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // });
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  //  const [message, setMessage] = useState('');
  //   const handleChange = e => {
  //       setFormData({
  //         ...formData,
  //         [e.target.name]: e.target.value
  //       });
  //     };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete('http://localhost:3001/delete-account', {
        data: {
          email: email,
          
        },
      });

      setMessage(response.data.message); // Set the response message
    } catch (error) {
      setMessage(error.response.data.message); // Set error message
    }
  };

  return (
    <div className='delet'>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        {/* <label>
          Enter password:
          <input type="password" value={email} onChange={handleEmailChange} required />
        </label> */}
        <button type="submit">Delete Account</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// const DeleteAccount = ({ loggedInUserEmail }) => {
//   const [message, setMessage] = useState('');

//   const handleDeleteAccount = async () => {
//     try {
//       const response = await axios.delete('http://localhost:3001/delete-account', {
//         data: {
//           email: loggedInUserEmail,
//         },
//       });

//       setMessage(response.data.message); // Set the response message
//     } catch (error) {
//       setMessage(error.response.data.message); // Set error message
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleDeleteAccount}>Delete Account</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default DeleteAccount;


