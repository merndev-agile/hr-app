import Login from './index';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, configure, getByTestId } from '@testing-library/react';
import { ValidationEmail } from '../generic/Validation';
import userEvent from '@testing-library/user-event';
// describe("Login",()=>{
//     it("email field is present",()=>{
//         const component=render(
//             <BrowserRouter>
//                 <Login/>
//             </BrowserRouter>
//         ).container;

//         const email=getByTestId("emailField").textContent;
//         console.log(email)
//         expect(email).toBeInTheDocument(); 

//   expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
//   expect(screen.getByText('Visible Example')).toBeVisible()
//     })

// it("sign in button ", async () => {
//     //Arrange---------
//     render(<BrowserRouter><Login /></BrowserRouter>);
//     //act------------
//     const SignInBtn = await screen.findAllByRole("button");
//     // console.log(SignInBtn);
//     //assertion---------
//     expect(SignInBtn).toHaveLength(1);

// })
it("email validation", async () => {
   render(<BrowserRouter><Login /></BrowserRouter>);
    // act-----------------
    const input=  await screen.findAllByRole("input");
    let x=input[0]
      userEvent.type(x, "test@mail.com");
     expect(screen.getByText('Email is invalid')).toBeVisible()

    // const button=  await screen.findAllByRole("button");
    // let y=button[0];
// await userEvent.click(y)
    // const testEmail = 'test123@gmail.com';
    // const element =getByTestId('emailField')
    console.log(x)
   
    // expect(ValidationEmail(testEmail)).toBe(true)
    // const res = ValidationEmail(testEmail);
    // console.log("res", res)
    // assertion--------
    // expect(email).toBeTruthy(); 


})
// })
