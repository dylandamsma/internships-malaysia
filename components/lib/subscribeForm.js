// import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { useForm } from 'react-hook-form'

const Form = styled.form`
    display: flex;
    width: 500px;
    max-width: 90vw;
    background-color: rgba(52,56,68,0.29);
    border-radius: 4px;
    padding: 6px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    box-shadow: 11px 4px 24px rgba(0,0,0,0.25);
    border: 1px solid rgba(255,255,255,0.03);
    transition: all 0.3s;

    &:hover {
        background-color: rgba(52,56,68,0.49);
    }
`

const InputField = styled.input`
    background: none;
    border: none;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 0 16px;
    font-size: 15px;
    color: #fff;
    font-weight: 400;
    height: 48px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    border-radius: 0;
    
    &:focus {
        outline: none;
        border: none;
    }
`;

const Button = styled.input`
    height: 48px;
    padding: 0 26px;
    color: #fff;
    background: linear-gradient(102deg,#4551b5 9.16%,#5643cc 32.02%,#543fd7 64.72%);
    border-radius: 4px;
    cursor: pointer;
    border: none;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 14px;
    font-weight: 600;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;

    &:hover {
        background: linear-gradient(102deg,#4551b5 2.16%,#5643cc 42.02%,#543fd7 74.72%);
    }
    &:focus {
        outline: none;
    }
`

const SubscribeForm = props => {

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

//   console.log(watch('example')) // watch input value by passing the name of it

  return (
    
    <Form onSubmit={handleSubmit(onSubmit)}>
        
      <InputField name="email" type="email" placeholder="> Your email address" ref={register} />

      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      
      <Button type="submit" value="Get new Jobs weekly"/>
    </Form>
  )

};

export default SubscribeForm;