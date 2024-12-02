import React, { useState } from "react";
import { submitForm } from "../../fakeApi";

const FormTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.terms) {
      setMessage("Debes aceptar los términos y condiciones.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await submitForm(formData);
      setMessage(response.message);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          terms: false,
        });

        // Reset the form for the next submission
        document.getElementById("form")?.reset();

        setMessage("");
      }, 2000);
    } catch (error) {
      setMessage(error.error || "Error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-form">
      <div className="box-texts">
        <p className="promo-text">
          <strong>✨ La moda empieza contigo.🎀 </strong>
          <br />
          Vive la experiencia de ser la primera en explorar nuestra colección.
          <br />
          <em>👗 Reserva tus favoritos antes de que desaparezcan.</em>
        </p>
      </div>
      <div className="box-form">
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            Nombre:
            <input
              className="input-form"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </label>
          <br />
          <label className="label">
            Email:
            <input
              className="input-form"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </label>
          <br />
          <label className="label">
            Teléfono:
            <input
              className="input-form"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </label>
          <br />
          <label className="label label-4">
            <input
              className="input-form"
              type="checkbox"
              checked={formData.terms}
              onChange={(e) =>
                setFormData({ ...formData, terms: e.target.checked })
              }
            />
            Acepto los términos y condiciones
          </label>
          <br />
          <button className="button-form" type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
          {message && <p className="message-form">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default FormTab;
