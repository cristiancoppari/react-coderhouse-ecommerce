import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { serverTimestamp } from "firebase/firestore";
import { setPurchaseOrder } from '../../helpers/helpers';
import classes from "./Form.module.scss";
import { useForm } from "react-hook-form";

const CheckoutForm = ({ cart, clear, getCartTotalPrice, orderIdHandler }) => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const nameHandler = (event) => {
  //   setName(() => event.target.value);
  // }

  // const emailHandler = (event) => {
  //   setEmail(() => event.target.value);
  // }

  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    defaultValues: {
      name: ""
    }
  });

  const submitHandler = (event) => {
    const order = {
      buyer: {
        name: getValues("name"),
        email: getValues("email")
      },
      items: cart,
      date: serverTimestamp(),
      total: getCartTotalPrice()
    }

    setPurchaseOrder(order)
      .then((data) => {
        orderIdHandler(data.id);
        clear();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // console.log(errors)

  return (
    <Form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Cosme Fulanito"
          {...register("name", {
            required: {
              value: true,
              message: "Este campo es obligatorio."
            }
          })} />
        {errors.name && <p className="text-danger mt-2 small">{errors.name.message}</p>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="cosmefulanito@gmail.com" {...register("email", {
          required: {
            value: true,
            message: "Este campo es requerido"
          },
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Debe ser un mail válido"
          }
        })} />
        {errors.email && <p className="text-danger mt-2 small">{errors.email.message}</p>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirma tu email</Form.Label>
        <Form.Control type="text" placeholder="cosmefulanito@gmail.com" {...register("emailConfirmation", {
          required: {
            value: true,
            message: "Este campo es requerido"
          },
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Debe ser un mail válido"
          },
          validate: {
            checkEmail: (value) => value === getValues("email") || "Los mails deben coincidir"
          }
        })} />
        {errors.emailConfirmation && <p className="text-danger mt-2 small">{errors.emailConfirmation.message}</p>}
      </Form.Group>

      <Button variant="success" type="submit">
        Finalizar compra
      </Button>
    </Form>
  )
}

export default CheckoutForm