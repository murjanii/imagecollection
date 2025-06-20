import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import'./Footer.css'

const Footer = () => {
  return (
    <footer style={{ background: "#000", color: "#fff", padding: "40px 20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {/* Contact Info */}
        <div>
          <p><FaEnvelope style={{ marginRight: 10 }} /> vineetmurjani963@gmail.com</p>
          <p><FaPhoneAlt style={{ marginRight: 10 }} /> <strong>All India Toll Free:</strong> 7023-7058-90</p>
          <p><FaWhatsapp style={{ marginRight: 10 }} /> <strong>Whatsapp Us:</strong> +917023705890</p>
          <p><strong>Follow Us</strong></p>
          <div style={{ display: "flex", gap: 15, marginTop: 10 }}>
            <FaFacebookF size={30} style={{ background: "#fff", color: "#4267B2", padding: 5, borderRadius: 5 }} />
            <FaLinkedinIn size={30} style={{ background: "#fff", color: "#0A66C2", padding: 5, borderRadius: 5 }} />
            <FaTwitter size={30} style={{ background: "#fff", color: "#1DA1F2", padding: 5, borderRadius: 5 }} />
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h4>Company Info</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Testimonials</p>
          <p><strong>Image Research</strong></p>
        </div>

        {/* Learn More */}
        <div>
          <h4>Learn More</h4>
          <p>Pricing</p>
          <p>Licensing</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>

        {/* Need Help */}
        <div>
          <h4>Need Help?</h4>
          <p>Contact Us</p>
          <p>Search Tips</p>
          <p>FAQ</p>
          <p>Technical</p>
        </div>
      </div>

      <hr style={{ margin: "30px 0", borderColor: "white" }} />

      <div style={{ textAlign: "center" }}>
        <p>© vineetmurjani963@gmail.com A division of Mash Audio Visuals Pvt. Ltd. All rights reserved.</p>
        <p style={{ marginTop: 10 }}>
          Terms of Use | Privacy Policy | FAQs
        </p>
        <div style={{ marginTop: 15 }}>
          {/* Replace with actual image tags or icons */}
          <img src="/visa.png" alt="visa" style={{ height: 25, marginRight: 10 }} />
          <img src="/logo (1).png" alt="mastercard" style={{ height: 25, marginRight: 10 }} />
          <img src="/logo.png" alt="amex" style={{ height: 25, marginRight: 10 }} />
          <img src="/payment.png" alt="rupay" style={{ height: 25, marginRight: 10 }} />
          <img src="/cyber-security.gif" alt="secure" style={{ height: 25 }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
