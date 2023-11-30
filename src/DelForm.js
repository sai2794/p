// import React, { useState } from 'react';
// import axios from 'axios';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
// const LoginForm = () => {
//     const [formData, setFormData] = useState({
//       email: '',
//       password: ''
//     });
//     const [message, setMessage] = useState('');
//     const handleChange = e => {
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.value
//         });
//       };
//     const handleSubmit = async e => {
//         e.preventDefault();
    
//         try {
//           const response = await axios.delete('http://localhost:3005//reserve', {
//             data: formData // Send data as part of the DELETE request body
//           });
    
//           if (response.status === 200) {
//             setMessage('Reservation deleted successfully');
//             // Reset form after successful deletion
//             setFormData({ email: '', phone: '' });
//           }
//         } catch (error) {
//           if (error.response && error.response.status === 404) {
//             setMessage('Reservation not found');
//           } else {
//             setMessage('Error deleting reservation');
//           }
//         }
//       };
    
//       return (
//         <div>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Email:</label><br></br>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label>Phone:</label><br></br>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <br></br>
//       <Link class="nav-link" to='/de'>
//       <Button class="button" variant="contained" size="small" type="submit"> 
//         Delete Reservation
//       </Button> </Link>
//           </form>
//           {/* {message && <p>{message}</p>} */}

//         </div>
//       );
//     };
    
//     export default LoginForm;
// import React, { useState } from 'react';

// // Assuming your component structure
// const ReservationForm = () => {
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value);
//   };

//   const deleteReservation = async () => {
//     try {
//       const response = await fetch('http://localhost:3005/reserve', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, phone })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log('Reservation deleted successfully:', data.message);
//         // Handle success - perform any UI updates or notify the user
//       } else {
//         console.error('Failed to delete reservation:', data.message);
//         // Handle error - display an error message or retry
//       }
//     } catch (error) {
//       console.error('Error deleting reservation:', error);
//       // Handle error - display an error message or retry
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         onChange={handleEmailChange}
//       />
//       <input
//         type="text"
//         placeholder="Phone Number"
//         value={phone}
//         onChange={handlePhoneChange}
//       />
//       <button onClick={deleteReservation}>Delete Reservation</button>
//     </div>
//   );
// };

// export default ReservationForm;
import React, { useState } from 'react';
import axios from 'axios';

const DeleteReservation = () => {
  const [deleteData, setDeleteData] = useState({
    date: '',
    table: '',
    name: '',
    phone: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDeleteData({ ...deleteData, [name]: value });
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3005/reserve', { data: deleteData });
      console.log(response.data); // Log success message or handle accordingly
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  return (
    <div>
      <h2>Delete Reservation</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Date:
          <input type="text" name="date" value={deleteData.date} onChange={handleInputChange} />
        </label><br></br><br></br>
        <label>
          Table:
          <input type="text" name="table" value={deleteData.table} onChange={handleInputChange} /><br></br>
        </label><br></br><br></br>
        <label>
          Name:
          <input type="text" name="name" value={deleteData.name} onChange={handleInputChange} /><br></br>
        </label><br></br><br></br>
        <label>
          Phone:
          <input type="text" name="phone" value={deleteData.phone} onChange={handleInputChange} />
        </label><br></br><br></br>
        {/* <button type="button" onClick={handleDelete}>Delete Reservation</button> */}
        <Link class="nav-link" to='/de'>
      <Button class="button" variant="contained" size="small" type="submit"> Delete Reservation</Button> </Link>
        <br></br><br></br>
      </form>
    </div>
  );
};

export default DeleteReservation;
