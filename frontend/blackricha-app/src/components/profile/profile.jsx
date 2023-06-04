import React from 'react';
import './profile.css'
import { getUserById } from '../../api/usersApi';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';





export default function Profile() {
  const { id } = useParams();
console.log(id);
  const [user, setuser] = useState([]);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const userData = await getUserById(id);
        setuser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
  
    fetchuser();
  }, [id]);
  
  if (!user) {
    return <div>Loading...</div>;
  }


  return (

    <div>
      <div className='user information' key={user.id}>
      <h1>{user.username}</h1>
      <p>
        {user.email}
      </p>
      </div>
    </div>
    )
  //   <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
  //     <MDBContainer className="py-5 h-100">
  //       <MDBRow className="justify-content-center align-items-center h-100">
  //         <MDBCol lg="6" className="mb-4 mb-lg-0">
  //           <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
  //             <MDBRow className="g-0">
  //               <div className='user-information<'>
  //                 <MDBCol md="4" className="gradient-custom text-center text-white"
  //                   style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
  //                   <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
  //                     alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
  //                   <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
  //                   <MDBCardText>Web Designer</MDBCardText>
  //                   <MDBIcon far icon="edit mb-5" />
  //                 </MDBCol>
  //                 <MDBCol md="8">
  //                   <MDBCardBody className="p-4">
  //                     <MDBTypography tag="h6">Information</MDBTypography>
  //                     <hr className="mt-0 mb-4" />
  //                     <MDBRow className="pt-1">
  //                       <MDBCol size="6" className="mb-3">
  //                         <MDBTypography tag="h6">Email</MDBTypography>
  //                         <MDBCardText className="text-muted">info@example.com</MDBCardText>
  //                       </MDBCol>
  //                       <MDBCol size="6" className="mb-3">
  //                         <MDBTypography tag="h6">Phone</MDBTypography>
  //                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
  //                       </MDBCol>
  //                     </MDBRow>

  //                     <MDBTypography tag="h6">Information</MDBTypography>
  //                     <hr className="mt-0 mb-4" />
  //                     <MDBRow className="pt-1">
  //                       <MDBCol size="6" className="mb-3">
  //                         <MDBTypography tag="h6">Email</MDBTypography>
  //                         <MDBCardText className="text-muted">info@example.com</MDBCardText>
  //                       </MDBCol>
  //                       <MDBCol size="6" className="mb-3">
  //                         <MDBTypography tag="h6">Phone</MDBTypography>
  //                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
  //                       </MDBCol>
  //                     </MDBRow>

  //                     <div className="d-flex justify-content-start">
  //                       <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
  //                       <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
  //                       <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
  //                     </div>
  //                   </MDBCardBody>
  //                 </MDBCol>
  //               </div>
  //             </MDBRow>
  //           </MDBCard>
  //         </MDBCol>
  //       </MDBRow>
  //     </MDBContainer>
  //   </section>
  // );
}